export type ActiveRole = 'sar' | 'oceanographic';

export type ActiveNavTab = 'monitoring' | 'device' | 'map' | 'ocean' | 'alerts';

export type MarineMapTileStyle = 'dark' | 'ocean' | 'osm';

export type MapFocusTarget = 'buoy' | 'vessel' | 'route' | 'geofence' | null;

export interface MarineMapLayers {
  showBuoy: boolean;
  showPastDrift: boolean;
  showPredictedDrift: boolean;
  showGeofence: boolean;
  showRecoveryVessel: boolean;
  showWeatherOverlay: boolean;
}

export interface BreadcrumbPoint {
  lat: number;
  lng: number;
  timestamp: string;
  speedKnots: number;
}

export interface MarineBuoyTelemetry {
  latitude: number;
  longitude: number;
  driftSpeedKnots: number;
  headingDeg: number;
  headingCardinal: string;
  depthMeters: number;
  temperatureC: number;
  batteryPercentage: number;
  batteryVoltage: number;
  status: 'Operational' | 'Warning' | 'Critical';
  lastUpdatedText: string;
  waveHeightM?: number;
  salinityPsu?: number;
}

export interface OceanAnalyticsPoint {
  timestamp: string;
  hourLabel: string;
  currentMs: number; // m/s
  windKnots: number; // kts
  waveHeightM: number; // meters
}

export interface RecoveryVesselInfo {
  name: string;
  callsign: string;
  latitude: number;
  longitude: number;
  headingDeg: number;
  speedKnots: number;
  distanceKm: number;
  distanceNm: number;
  etaMinutes: number;
  status: 'En Route' | 'Standing By' | 'Intercepting';
}

export interface GeofenceConfig {
  centerLat: number;
  centerLng: number;
  radiusKm: number;
  isInside: boolean;
  distanceFromCenterKm: number;
}

export type UplinkMode = 'INSAT_DRT' | 'ARGOS_POLAR' | 'SASR_DISTRESS';

export interface NavICCoordinates {
  latitude: number; // Decimal degrees (negative for South)
  longitude: number; // Decimal degrees (negative for West)
  altitude: number; // Meters above MSL
  fixType: '3D-DGNSS' | '3D-NavIC' | '2D' | 'NO_FIX';
  satellitesTracked: number;
  hdop: number;
  timestamp: string; // ISO string
}

export interface GyroAttitude {
  pitch: number; // degrees (-90 to +90)
  roll: number; // degrees (-180 to +180)
  yaw: number; // degrees (0 to 360)
  heaveAcceleration: number; // m/s^2
  angularVelocity: number; // deg/s
  tiltAngle: number; // Combined tilt off vertical axis in degrees: sqrt(pitch^2 + roll^2)
  isDistressTilt: boolean; // True if tilt > 60°
  sustainedTiltSeconds: number;
}

export interface PowerSystem {
  lisocl2CellVoltage: number; // Nominal > 3.6V (e.g. 3.64V)
  hlcVoltage: number; // Hybrid Layer Capacitor voltage (e.g. 3.61V)
  hlcChargePercentage: number; // 0-100%
  esrMilliohms: number; // Equivalent Series Resistance (~120 mOhm)
  pulseBurstsRemaining: number;
  currentDrawMilliamps: number; // mA
  passivationIndex: 'NOMINAL' | 'MILD' | 'RECOVERED';
}

export interface PTESuspension {
  pdmsFluidPressureBar: number; // 1.04 bar nominal (ambient + 0.04)
  zeroVoidSaturationPct: number; // 100%
  fvmqBellowsDisplacementMm: number; // Dynamic displacement in mm
  bellowsFlexibilityPct: number; // 0-100%
  internalTempC: number;
  sealIntegrity: 'HERMETIC_PASS' | 'DEGRADED' | 'FAULT';
}

export interface SensorSuiteData {
  // Ultrasonic Anemometer
  windSpeedKnots: number;
  windSpeedMs: number;
  windDirectionDeg: number;
  transducersActive: number; // e.g. 4 of 4
  
  // Atmospheric MEMS dies
  barometricPressureHpa: number;
  ambientSupercooledTempC: number;
  relativeHumidityPct: number;

  // RS485 Benthic Micro-CTD Sonde (at base 7m)
  waterTempC: number;
  conductivityMsm: number; // mS/cm
  salinityPsu: number; // Practical Salinity Units
  depthMeters: number;
  soundVelocityMs: number;
}

export interface SubsystemStatus {
  id: 'core_avionics' | 'power_reservoir' | 'pte_suspension' | 'sensor_suite';
  name: string;
  category: string;
  state: 'PASS' | 'WARN' | 'FAIL';
  details: string;
  metrics: { [key: string]: string | number };
}

export interface CTDProfilePoint {
  depth: number; // 0 to 500m
  temp: number; // °C
  salinity: number; // PSU
  timestamp: string;
}

export interface TelemetryPacket {
  packetSequence: number;
  timestamp: string;
  navic: NavICCoordinates;
  gyro: GyroAttitude;
  power: PowerSystem;
  pte: PTESuspension;
  sensors: SensorSuiteData;
  uplink: {
    mode: UplinkMode;
    frequencyMhz: number;
    carrierLocked: boolean;
    signalSnrDb: number;
    rssiDbm: number;
    linkMarginDb: number;
    geofenceStatus: 'NORTH_60S_INSAT' | 'SOUTH_60S_ARGOS';
  };
  distress: {
    sasrActive: boolean;
    frequencyMhz: 406.05;
    inmccAlertDispatched: boolean;
    overrideTime?: string;
    lastValidFix?: NavICCoordinates;
    triggerReason?: string;
    overrideTiltAngle?: number;
  };
  rawHex: string; // 32-byte hex representation
  decodedFieldsMap: DecodedFieldByteRange[];
}

export interface DecodedFieldByteRange {
  name: string;
  bytes: string; // e.g., "00-03"
  startByte: number;
  endByte: number;
  hexValue: string;
  interpretedValue: string;
  unit?: string;
  colorClass: string;
}

export interface VesselState {
  name: string;
  callsign: string;
  latitude: number;
  longitude: number;
  heading: number; // degrees
  speedKnots: number;
}

export interface RadarContact {
  rangeNm: number;
  rangeKm: number;
  trueBearingDeg: number;
  relativeBearingDeg: number;
  cpaNm: number; // Closest point of approach
  etiMinutes: number; // Estimated time of intercept
}
