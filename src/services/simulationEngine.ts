import { TelemetryPacket, DecodedFieldByteRange, CTDProfilePoint, VesselState, RadarContact } from '../types/telemetry';

export class SimulationEngine {
  private packetCounter: number = 1042;
  private simTime: number = 0; // seconds
  private speedMultiplier: number = 1.0;
  private isPaused: boolean = false;
  
  // Buoy physical state
  private latitude: number = -59.8450; // Just north of 60°S so user can easily test geofence handoff
  private longitude: number = 68.4210; // Southern Ocean / Kerguelen sector
  private altitude: number = 0.85; // meters (radome height above sea)
  
  // Wave & tilt dynamics
  private pitch: number = 6.2;
  private roll: number = -4.8;
  private yaw: number = 124.5;
  private heave: number = 0.15;
  private forcedTiltAnomaly: boolean = false;
  private sustainedTiltCounter: number = 0;
  
  // Power & passivation state
  private lisocl2Voltage: number = 3.642;
  private hlcVoltage: number = 3.615;
  private hlcCharge: number = 98.6;
  private isBurstTransmitting: boolean = false;
  
  // Atmospheric & oceanic
  private windSpeedKnots: number = 26.4;
  private windDirectionDeg: number = 285;
  private barometricPressureHpa: number = 982.4;
  private airTempC: number = -9.8;
  private waterTempC: number = -1.14;
  private salinityPsu: number = 34.18;
  private pdmsPressureBar: number = 1.042;
  private bellowsMm: number = 12.8;

  // SAR Vessel state (e.g. ORV Sagar Nidhi)
  private vessel: VesselState = {
    name: 'ORV Sagar Nidhi',
    callsign: 'VTFX',
    latitude: -59.7820,
    longitude: 68.3100,
    heading: 142.0,
    speedKnots: 11.5
  };

  // Pre-calculated CTD depth profile (0 to 500m)
  private ctdProfileData: CTDProfilePoint[] = [];

  constructor() {
    this.generateInitialCTDProfile();
  }

  public setSpeed(speed: number) {
    this.speedMultiplier = speed;
    this.isPaused = speed === 0;
  }

  public togglePause(): boolean {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  public getIsPaused(): boolean {
    return this.isPaused;
  }

  public setForcedTiltAnomaly(active: boolean) {
    this.forcedTiltAnomaly = active;
    if (!active) {
      this.sustainedTiltCounter = 0;
    }
  }

  public getForcedTiltAnomaly(): boolean {
    return this.forcedTiltAnomaly;
  }

  // Cross the 60°S Geofence boundary immediately
  public toggleGeofencePosition() {
    if (this.latitude > -60.0) {
      // Push south of 60°S
      this.latitude = -60.1850;
    } else {
      // Push north of 60°S
      this.latitude = -59.8150;
    }
  }

  public setLatitude(lat: number) {
    this.latitude = lat;
  }

  public getVessel(): VesselState {
    return this.vessel;
  }

  private generateInitialCTDProfile() {
    // Antarctic Southern Ocean vertical stratification:
    // 0-80m: Antarctic Surface Water (AASW) - cold (-1.5°C to -1.0°C), low salinity (33.9 to 34.1 PSU)
    // 80-200m: Winter Water (WW) - temperature minimum (-1.8°C), sharp halocline
    // 200-500m: Circumpolar Deep Water (CDW) - warmer (+1.2°C to +2.0°C), higher salinity (34.6 to 34.8 PSU)
    const points: CTDProfilePoint[] = [];
    const depths = [0, 10, 25, 50, 75, 100, 150, 200, 250, 300, 350, 400, 450, 500];

    depths.forEach(d => {
      let t = 0;
      let s = 0;
      if (d <= 80) {
        t = -1.2 + (d / 80) * -0.6; // drops from -1.2 to -1.8
        s = 33.92 + (d / 80) * 0.25; // 33.92 to 34.17
      } else if (d <= 200) {
        const factor = (d - 80) / 120;
        t = -1.8 + factor * 2.2; // warms up into CDW (-1.8 to +0.4)
        s = 34.17 + factor * 0.45; // 34.17 to 34.62
      } else {
        const factor = (d - 200) / 300;
        t = 0.4 + factor * 1.4; // 0.4 to 1.8 °C
        s = 34.62 + factor * 0.16; // 34.62 to 34.78 PSU
      }
      points.push({
        depth: d,
        temp: parseFloat(t.toFixed(3)),
        salinity: parseFloat(s.toFixed(3)),
        timestamp: new Date().toISOString()
      });
    });
    this.ctdProfileData = points;
  }

  public getCTDProfile(): CTDProfilePoint[] {
    return this.ctdProfileData;
  }

  // Physics and telemetry step (1 second base)
  public tick(): TelemetryPacket {
    if (!this.isPaused) {
      this.simTime += 1.0 * this.speedMultiplier;
      this.packetCounter++;

      // Drift in Antarctic Circumpolar Current: eastward (lon +) and slight equatorward/polar meander
      const driftSpeedKnots = 0.8 + 0.3 * Math.sin(this.simTime * 0.02);
      const driftAngleRad = (80 + 15 * Math.sin(this.simTime * 0.01)) * (Math.PI / 180);
      
      // Move buoy coordinates (1 NM approx 1/60th deg latitude)
      const latDelta = (Math.cos(driftAngleRad) * driftSpeedKnots * (1 / 3600)) * (1 / 60);
      const lonDelta = (Math.sin(driftAngleRad) * driftSpeedKnots * (1 / 3600)) * (1 / (60 * Math.cos(this.latitude * Math.PI / 180)));
      
      this.latitude += latDelta * this.speedMultiplier;
      this.longitude += lonDelta * this.speedMultiplier;

      // SAR vessel slow cruising towards buoy
      const vLatDelta = Math.cos(this.vessel.heading * Math.PI / 180) * (this.vessel.speedKnots / 3600) * (1 / 60);
      const vLonDelta = Math.sin(this.vessel.heading * Math.PI / 180) * (this.vessel.speedKnots / 3600) * (1 / (60 * Math.cos(this.vessel.latitude * Math.PI / 180)));
      this.vessel.latitude += vLatDelta * this.speedMultiplier;
      this.vessel.longitude += vLonDelta * this.speedMultiplier;

      // Wave & tilt motion (superposition of primary Southern Ocean swell + wind chop)
      if (this.forcedTiltAnomaly) {
        // Severe tilt from pack-ice override / iceberg collision
        this.pitch = 64.5 + 4.2 * Math.sin(this.simTime * 1.5);
        this.roll = -28.0 + 3.8 * Math.cos(this.simTime * 1.2);
        this.heave = -1.85 + 0.4 * Math.sin(this.simTime * 0.8);
        this.sustainedTiltCounter += 1.0 * this.speedMultiplier;
      } else {
        // Nominal spar-buoy heave/roll damping (slender spar acts as mechanical low-pass filter)
        const swellPhase = this.simTime * (2 * Math.PI / 8.5); // 8.5s swell
        const chopPhase = this.simTime * (2 * Math.PI / 3.4); // 3.4s wind chop
        
        this.pitch = 5.5 * Math.sin(swellPhase) + 2.2 * Math.sin(chopPhase);
        this.roll = 7.0 * Math.cos(swellPhase + 0.8) + 1.8 * Math.cos(chopPhase);
        this.yaw = (this.yaw + 0.15 * Math.sin(swellPhase * 0.5) + 360) % 360;
        this.heave = 0.45 * Math.sin(swellPhase);
        this.sustainedTiltCounter = 0;
      }

      // Atmospheric fluctuations
      this.windSpeedKnots = 26.0 + 6.5 * Math.sin(this.simTime * 0.05) + (Math.random() - 0.5) * 1.2;
      this.windDirectionDeg = Math.round((280 + 15 * Math.sin(this.simTime * 0.02) + 360) % 360);
      this.barometricPressureHpa = 981.5 + 2.0 * Math.sin(this.simTime * 0.01) + (Math.random() - 0.5) * 0.1;
      this.airTempC = -9.5 + 1.2 * Math.sin(this.simTime * 0.015);
      
      // Micro-CTD at 7m spar base
      this.waterTempC = -1.14 + 0.08 * Math.sin(this.simTime * 0.03);
      this.salinityPsu = 34.18 + 0.04 * Math.sin(this.simTime * 0.025);
      this.pdmsPressureBar = 1.040 + 0.005 * Math.sin(this.simTime * 0.08);
      this.bellowsMm = 12.5 + 1.5 * Math.sin(this.simTime * 0.1);

      // Power & Passivation dynamics:
      // Every 15 seconds, a 4.8 kbps burst transmission happens
      this.isBurstTransmitting = Math.floor(this.simTime) % 15 === 0;
      if (this.isBurstTransmitting) {
        this.hlcCharge = 94.2;
        this.hlcVoltage = 3.560;
        this.lisocl2Voltage = 3.610; // Transient passivation dip
      } else {
        // HLC trickle-charges back from LiSOCl2 cells
        this.hlcCharge = Math.min(99.4, this.hlcCharge + 0.4 * this.speedMultiplier);
        this.hlcVoltage = Math.min(3.620, this.hlcVoltage + 0.006 * this.speedMultiplier);
        this.lisocl2Voltage = Math.min(3.645, this.lisocl2Voltage + 0.003 * this.speedMultiplier);
      }
    }

    // Combined tilt angle
    const tiltMagnitude = Math.sqrt(this.pitch * this.pitch + this.roll * this.roll);
    const isDistressTilt = tiltMagnitude > 60.0;
    const sasrActive = isDistressTilt && this.sustainedTiltCounter >= 2.0;

    // Determine Uplink mode: North vs South of 60°S Geofence
    const isSouthOf60S = this.latitude <= -60.0000;
    const uplinkMode = sasrActive ? 'SASR_DISTRESS' : (isSouthOf60S ? 'ARGOS_POLAR' : 'INSAT_DRT');
    const frequencyMhz = sasrActive ? 406.05 : (isSouthOf60S ? 401.65 : 402.75);

    // Build 32-byte ISRO INSAT DRT telemetry packet
    const rawHex = this.encodeRawHexPacket(sasrActive);
    const decodedFieldsMap = this.decodeHexFields(rawHex);

    const nowIso = new Date().toISOString();

    return {
      packetSequence: this.packetCounter,
      timestamp: nowIso,
      navic: {
        latitude: parseFloat(this.latitude.toFixed(5)),
        longitude: parseFloat(this.longitude.toFixed(5)),
        altitude: parseFloat(this.altitude.toFixed(2)),
        fixType: '3D-NavIC',
        satellitesTracked: 9,
        hdop: 0.85,
        timestamp: nowIso
      },
      gyro: {
        pitch: parseFloat(this.pitch.toFixed(2)),
        roll: parseFloat(this.roll.toFixed(2)),
        yaw: parseFloat(this.yaw.toFixed(1)),
        heaveAcceleration: parseFloat((this.heave * 2.8).toFixed(2)),
        angularVelocity: parseFloat((Math.abs(this.pitch) * 0.45).toFixed(2)),
        tiltAngle: parseFloat(tiltMagnitude.toFixed(2)),
        isDistressTilt,
        sustainedTiltSeconds: parseFloat(this.sustainedTiltCounter.toFixed(1))
      },
      power: {
        lisocl2CellVoltage: parseFloat(this.lisocl2Voltage.toFixed(3)),
        hlcVoltage: parseFloat(this.hlcVoltage.toFixed(3)),
        hlcChargePercentage: parseFloat(this.hlcCharge.toFixed(1)),
        esrMilliohms: 118,
        pulseBurstsRemaining: 4892,
        currentDrawMilliamps: this.isBurstTransmitting ? 1850 : 2.4,
        passivationIndex: this.lisocl2Voltage > 3.62 ? 'NOMINAL' : 'MILD'
      },
      pte: {
        pdmsFluidPressureBar: parseFloat(this.pdmsPressureBar.toFixed(3)),
        zeroVoidSaturationPct: 100,
        fvmqBellowsDisplacementMm: parseFloat(this.bellowsMm.toFixed(2)),
        bellowsFlexibilityPct: 96.5,
        internalTempC: parseFloat((this.waterTempC + 0.3).toFixed(2)),
        sealIntegrity: 'HERMETIC_PASS'
      },
      sensors: {
        windSpeedKnots: parseFloat(this.windSpeedKnots.toFixed(1)),
        windSpeedMs: parseFloat((this.windSpeedKnots * 0.514444).toFixed(2)),
        windDirectionDeg: this.windDirectionDeg,
        transducersActive: 4,
        barometricPressureHpa: parseFloat(this.barometricPressureHpa.toFixed(2)),
        ambientSupercooledTempC: parseFloat(this.airTempC.toFixed(2)),
        relativeHumidityPct: 88.4,
        waterTempC: parseFloat(this.waterTempC.toFixed(3)),
        conductivityMsm: 29.42,
        salinityPsu: parseFloat(this.salinityPsu.toFixed(3)),
        depthMeters: 7.12,
        soundVelocityMs: 1445.6
      },
      uplink: {
        mode: uplinkMode,
        frequencyMhz,
        carrierLocked: true,
        signalSnrDb: isSouthOf60S ? 14.8 : 17.2,
        rssiDbm: isSouthOf60S ? -98 : -92,
        linkMarginDb: isSouthOf60S ? 11.4 : 14.6,
        geofenceStatus: isSouthOf60S ? 'SOUTH_60S_ARGOS' : 'NORTH_60S_INSAT'
      },
      distress: {
        sasrActive,
        frequencyMhz: 406.05,
        inmccAlertDispatched: sasrActive,
        overrideTime: sasrActive ? nowIso : undefined,
        lastValidFix: {
          latitude: parseFloat(this.latitude.toFixed(5)),
          longitude: parseFloat(this.longitude.toFixed(5)),
          altitude: 0.85,
          fixType: '3D-NavIC',
          satellitesTracked: 9,
          hdop: 0.85,
          timestamp: nowIso
        },
        triggerReason: sasrActive ? 'SUSTAINED TILT > 60° (ICE OVERRIDE DETECTED)' : undefined,
        overrideTiltAngle: sasrActive ? parseFloat(tiltMagnitude.toFixed(2)) : undefined
      },
      rawHex,
      decodedFieldsMap
    };
  }

  // Calculate radar tracking from vessel to buoy
  public calculateRadarContact(): RadarContact {
    const lat1 = this.vessel.latitude * (Math.PI / 180);
    const lon1 = this.vessel.longitude * (Math.PI / 180);
    const lat2 = this.latitude * (Math.PI / 180);
    const lon2 = this.longitude * (Math.PI / 180);

    // Haversine formula
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const rKm = 6371 * c;
    const rNm = rKm / 1.852;

    // True bearing (initial)
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    let trueBearing = Math.atan2(y, x) * (180 / Math.PI);
    trueBearing = (trueBearing + 360) % 360;

    // Relative bearing = True Bearing - Vessel Heading
    let relBearing = (trueBearing - this.vessel.heading + 360) % 360;

    // Estimated time of intercept (minutes) at vessel speed
    const speed = Math.max(1, this.vessel.speedKnots);
    const etiMinutes = (rNm / speed) * 60;
    const cpaNm = rNm * Math.sin(Math.abs(relBearing) * (Math.PI / 180));

    return {
      rangeKm: parseFloat(rKm.toFixed(2)),
      rangeNm: parseFloat(rNm.toFixed(2)),
      trueBearingDeg: Math.round(trueBearing),
      relativeBearingDeg: Math.round(relBearing),
      cpaNm: parseFloat(Math.abs(cpaNm).toFixed(2)),
      etiMinutes: Math.round(etiMinutes)
    };
  }

  // Encode 32 bytes into standard hex representation
  private encodeRawHexPacket(distressActive: boolean): string {
    const buffer = new Uint8Array(32);

    // Bytes 0-3: Sync Header: 0x54 ('T'), 0x41 ('A'), 0x4D ('M'), version 0x01 (or 0x7F if distress)
    buffer[0] = 0x54;
    buffer[1] = 0x41;
    buffer[2] = 0x4D;
    buffer[3] = distressActive ? 0x7F : 0x01;

    // Bytes 4-7: Timestamp epoch (seconds)
    const epochSec = Math.floor(Date.now() / 1000);
    buffer[4] = (epochSec >> 24) & 0xFF;
    buffer[5] = (epochSec >> 16) & 0xFF;
    buffer[6] = (epochSec >> 8) & 0xFF;
    buffer[7] = epochSec & 0xFF;

    // Bytes 8-11: NavIC Latitude (* 100,000 as signed 32-bit integer)
    const latScaled = Math.round(this.latitude * 100000);
    buffer[8] = (latScaled >> 24) & 0xFF;
    buffer[9] = (latScaled >> 16) & 0xFF;
    buffer[10] = (latScaled >> 8) & 0xFF;
    buffer[11] = latScaled & 0xFF;

    // Bytes 12-15: NavIC Longitude (* 100,000 as signed 32-bit integer)
    const lonScaled = Math.round(this.longitude * 100000);
    buffer[12] = (lonScaled >> 24) & 0xFF;
    buffer[13] = (lonScaled >> 16) & 0xFF;
    buffer[14] = (lonScaled >> 8) & 0xFF;
    buffer[15] = lonScaled & 0xFF;

    // Bytes 16-17: LiSOCl2 Cell Voltage in millivolts (e.g. 3642 mV)
    const liMv = Math.round(this.lisocl2Voltage * 1000);
    buffer[16] = (liMv >> 8) & 0xFF;
    buffer[17] = liMv & 0xFF;

    // Bytes 18-19: HLC Capacitor Voltage in millivolts (e.g. 3615 mV)
    const hlcMv = Math.round(this.hlcVoltage * 1000);
    buffer[18] = (hlcMv >> 8) & 0xFF;
    buffer[19] = hlcMv & 0xFF;

    // Bytes 20-21: Pitch & Roll (signed int8 degrees, clamped -128..127)
    buffer[20] = (Math.round(this.pitch) & 0xFF);
    buffer[21] = (Math.round(this.roll) & 0xFF);

    // Bytes 22-23: Barometric Pressure (0.1 hPa unit, e.g. 982.4 -> 9824)
    const baroDeci = Math.round(this.barometricPressureHpa * 10);
    buffer[22] = (baroDeci >> 8) & 0xFF;
    buffer[23] = baroDeci & 0xFF;

    // Bytes 24-25: Ambient Supercooled Air Temp (signed int16 centi-degrees, e.g. -9.80°C -> -980)
    const tempCenti = Math.round(this.airTempC * 100);
    buffer[24] = (tempCenti >> 8) & 0xFF;
    buffer[25] = tempCenti & 0xFF;

    // Bytes 26-27: Wind Speed (0.1 knot) & Wind Direction (0-359 deg / 2)
    const windDeci = Math.min(255, Math.round(this.windSpeedKnots * 2));
    const windDirCompressed = Math.round(this.windDirectionDeg / 2);
    buffer[26] = windDeci & 0xFF;
    buffer[27] = windDirCompressed & 0xFF;

    // Bytes 28-29: Micro-CTD Water Temp (centi-deg signed) & Salinity (0.01 PSU)
    const wTempCenti = Math.round(this.waterTempC * 100);
    const salScaled = Math.round((this.salinityPsu - 30.0) * 100); // 34.18 -> 418
    buffer[28] = (wTempCenti >> 8) & 0xFF;
    buffer[29] = salScaled & 0xFF;

    // Bytes 30-31: CRC-16-CCITT Checksum
    const crc = this.calculateCrc16(buffer.subarray(0, 30));
    buffer[30] = (crc >> 8) & 0xFF;
    buffer[31] = crc & 0xFF;

    return Array.from(buffer).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
  }

  // Interactive Hex Field Decoder
  public decodeHexFields(hexString: string): DecodedFieldByteRange[] {
    const cleanHex = hexString.replace(/\s+/g, '');
    const bytes: number[] = [];
    for (let i = 0; i < cleanHex.length; i += 2) {
      bytes.push(parseInt(cleanHex.substring(i, i + 2), 16) || 0);
    }

    if (bytes.length < 32) return [];

    // Decode fields
    const isDistress = bytes[3] === 0x7F;
    const epoch = (bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7];
    
    // Signed 32-bit latitude
    const latRaw = (bytes[8] << 24) | (bytes[9] << 16) | (bytes[10] << 8) | bytes[11];
    const latDec = (latRaw / 100000).toFixed(5);

    // Signed 32-bit longitude
    const lonRaw = (bytes[12] << 24) | (bytes[13] << 16) | (bytes[14] << 8) | bytes[15];
    const lonDec = (lonRaw / 100000).toFixed(5);

    // Battery & HLC
    const liMv = (bytes[16] << 8) | bytes[17];
    const hlcMv = (bytes[18] << 8) | bytes[19];

    // Pitch & Roll (int8 signed)
    const pitch = (bytes[20] << 24) >> 24;
    const roll = (bytes[21] << 24) >> 24;

    // Barometric
    const baro = (((bytes[22] << 8) | bytes[23]) / 10).toFixed(1);

    // Air Temp (int16 signed)
    const airTempRaw = ((bytes[24] << 8) | bytes[25]);
    const airTempSigned = (airTempRaw << 16) >> 16;
    const airTemp = (airTempSigned / 100).toFixed(2);

    // Wind
    const windSpeed = (bytes[26] / 2).toFixed(1);
    const windDir = (bytes[27] * 2);

    // CTD
    const wTempRaw = (bytes[28] << 24) >> 24;
    const wTemp = (wTempRaw / 10).toFixed(2);
    const salinity = (30.0 + bytes[29] / 100).toFixed(2);

    // CRC
    const crcHex = bytes[30].toString(16).padStart(2, '0') + bytes[31].toString(16).padStart(2, '0');

    return [
      {
        name: 'Sync Header & Status',
        bytes: '00-03',
        startByte: 0,
        endByte: 3,
        hexValue: bytes.slice(0, 4).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: isDistress ? 'EMERGENCY OVERRIDE (SAS&R 406.05 MHz)' : 'TAMAS PROTOCOL v1.0 (NOMINAL)',
        colorClass: isDistress ? 'text-red-400 border-red-500/40 bg-red-950/30' : 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30'
      },
      {
        name: 'Timestamp Epoch',
        bytes: '04-07',
        startByte: 4,
        endByte: 7,
        hexValue: bytes.slice(4, 8).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: new Date(epoch * 1000).toUTCString(),
        unit: 'UTC',
        colorClass: 'text-blue-400 border-blue-500/40 bg-blue-950/30'
      },
      {
        name: 'NavIC Coordinates',
        bytes: '08-15',
        startByte: 8,
        endByte: 15,
        hexValue: bytes.slice(8, 16).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `${latDec}°S, ${lonDec}°E`,
        unit: 'WGS84 / NavIC',
        colorClass: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30'
      },
      {
        name: 'Power System (LiSOCl2 & HLC)',
        bytes: '16-19',
        startByte: 16,
        endByte: 19,
        hexValue: bytes.slice(16, 20).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `LiSOCl2: ${(liMv / 1000).toFixed(3)}V | HLC: ${(hlcMv / 1000).toFixed(3)}V`,
        unit: 'Volts',
        colorClass: 'text-amber-400 border-amber-500/40 bg-amber-950/30'
      },
      {
        name: '6-DoF Gyro Attitude',
        bytes: '20-21',
        startByte: 20,
        endByte: 21,
        hexValue: bytes.slice(20, 22).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `Pitch: ${pitch}° | Roll: ${roll}° (Total Tilt: ${Math.round(Math.sqrt(pitch*pitch + roll*roll))}°)`,
        unit: 'Degrees',
        colorClass: (Math.sqrt(pitch*pitch + roll*roll) > 60) ? 'text-red-400 border-red-500/40 bg-red-950/30' : 'text-purple-400 border-purple-500/40 bg-purple-950/30'
      },
      {
        name: 'Atmospheric Baro & Air Temp',
        bytes: '22-25',
        startByte: 22,
        endByte: 25,
        hexValue: bytes.slice(22, 26).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `Baro: ${baro} hPa | Air Temp: ${airTemp}°C`,
        unit: 'MEMS Dual-Die',
        colorClass: 'text-teal-400 border-teal-500/40 bg-teal-950/30'
      },
      {
        name: 'Ultrasonic Anemometer',
        bytes: '26-27',
        startByte: 26,
        endByte: 27,
        hexValue: bytes.slice(26, 28).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `${windSpeed} kts @ ${windDir}°`,
        unit: 'Polar Sonic',
        colorClass: 'text-sky-400 border-sky-500/40 bg-sky-950/30'
      },
      {
        name: 'Micro-CTD Sonde (7m Base)',
        bytes: '28-29',
        startByte: 28,
        endByte: 29,
        hexValue: bytes.slice(28, 30).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `Water Temp: ${wTemp}°C | Salinity: ${salinity} PSU`,
        unit: 'RS485 Sonde',
        colorClass: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/30'
      },
      {
        name: 'CRC-16-CCITT Checksum',
        bytes: '30-31',
        startByte: 30,
        endByte: 31,
        hexValue: bytes.slice(30, 32).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' '),
        interpretedValue: `0x${crcHex.toUpperCase()} (VALID INTEGRITY)`,
        unit: 'CRC-16',
        colorClass: 'text-slate-300 border-slate-600/40 bg-slate-900/30'
      }
    ];
  }

  private calculateCrc16(data: Uint8Array): number {
    let crc = 0xFFFF;
    for (let i = 0; i < data.length; i++) {
      crc ^= data[i] << 8;
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
        } else {
          crc = (crc << 1) & 0xFFFF;
        }
      }
    }
    return crc;
  }
}

export const simEngine = new SimulationEngine();
