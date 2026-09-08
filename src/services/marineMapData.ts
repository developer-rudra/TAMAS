import { 
  MarineBuoyTelemetry, 
  BreadcrumbPoint, 
  RecoveryVesselInfo, 
  GeofenceConfig,
  OceanAnalyticsPoint
} from '../types/telemetry';

export interface WeatherVectorPoint {
  id: string;
  lat: number;
  lng: number;
  currentSpeedKts: number;
  currentSpeedMs: number;
  currentDirectionDeg: number;
  windSpeedKts: number;
  windDirectionDeg: number;
  waveHeightM: number;
}

export interface MarineMapSimulationState {
  buoy: MarineBuoyTelemetry;
  driftHistory: BreadcrumbPoint[];
  predictedPath: [number, number][];
  geofence: GeofenceConfig;
  vessel: RecoveryVesselInfo;
  weatherGrid: WeatherVectorPoint[];
  lastUpdateSecondsAgo: number;
}

// 24-Hour Historical Telemetry for Bottom Ocean Analytics Panel
export function getOceanAnalyticsHistory(): OceanAnalyticsPoint[] {
  const points: OceanAnalyticsPoint[] = [];
  for (let i = 24; i >= 0; i--) {
    const hourLabel = i === 0 ? 'Now' : `-${i}h`;
    const phase = ((24 - i) / 24) * Math.PI * 2;
    const currentMs = +(0.62 + Math.sin(phase) * 0.07 + Math.cos(phase * 2) * 0.03).toFixed(2);
    const windKnots = +(23.8 + Math.sin(phase - 0.7) * 3.4 + Math.cos(phase * 2.5) * 1.2).toFixed(1);
    const waveHeightM = +(1.22 + Math.sin(phase - 1.1) * 0.24 + Math.sin(phase * 2) * 0.08).toFixed(2);
    
    points.push({
      timestamp: hourLabel,
      hourLabel,
      currentMs,
      windKnots,
      waveHeightM
    });
  }
  return points;
}

// Haversine formula to compute great-circle distance between two points in km
export function calculateHaversineDistanceKm(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate bearing in degrees from point 1 to point 2
export function calculateBearingDeg(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const y = Math.sin(((lon2 - lon1) * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180);
  const x =
    Math.cos((lat1 * Math.PI) / 180) * Math.sin((lat2 * Math.PI) / 180) -
    Math.sin((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.cos(((lon2 - lon1) * Math.PI) / 180);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

// Convert degrees to cardinal direction
export function degToCardinal(deg: number): string {
  const cardinals = [
    'N', 'NNE', 'NE', 'ENE', 
    'E', 'ESE', 'SE', 'SSE', 
    'S', 'SSW', 'SW', 'WSW', 
    'W', 'WNW', 'NW', 'NNW'
  ];
  const idx = Math.round(deg / 22.5) % 16;
  return cardinals[idx];
}

// Generate future predicted trajectory coordinates based on heading & speed
export function generatePredictedPath(
  startLat: number,
  startLng: number,
  headingDeg: number,
  speedKnots: number,
  stepHours: number = 0.5,
  stepsCount: number = 5
): [number, number][] {
  const path: [number, number][] = [[startLat, startLng]];
  const radHeading = (headingDeg * Math.PI) / 180;
  
  // 1 knot = 1.852 km/h
  // 1 deg latitude ~ 111 km
  // 1 deg longitude ~ 111 km * cos(lat)
  const kmPerDegLat = 110.574;
  const kmPerDegLng = 111.32 * Math.cos((startLat * Math.PI) / 180);

  let curLat = startLat;
  let curLng = startLng;

  for (let i = 1; i <= stepsCount; i++) {
    const distKm = speedKnots * 1.852 * (stepHours * i);
    const dNorthKm = distKm * Math.cos(radHeading);
    const dEastKm = distKm * Math.sin(radHeading);

    const nextLat = curLat + dNorthKm / kmPerDegLat;
    const nextLng = curLng + dEastKm / kmPerDegLng;
    path.push([nextLat, nextLng]);
  }

  return path;
}

// Generate weather vector overlay grid around center in Arabian Sea
export function generateWeatherGrid(
  centerLat: number, 
  centerLng: number
): WeatherVectorPoint[] {
  const grid: WeatherVectorPoint[] = [];
  const latOffsets = [-0.18, -0.09, 0.0, 0.09, 0.18];
  const lngOffsets = [-0.18, -0.09, 0.0, 0.09, 0.18];

  let idCounter = 1;
  latOffsets.forEach((dLat, rIdx) => {
    lngOffsets.forEach((dLng, cIdx) => {
      // Gentle pseudo-random variation based on grid coordinates
      const angleVariance = ((rIdx * 7 + cIdx * 11) % 16) - 8;
      const speedKts = +(1.15 + ((rIdx + cIdx) % 4) * 0.12).toFixed(2);
      const speedMs = +(speedKts * 0.514444).toFixed(2);
      grid.push({
        id: `wx-${idCounter++}`,
        lat: +(centerLat + dLat).toFixed(4),
        lng: +(centerLng + dLng).toFixed(4),
        currentSpeedKts: speedKts,
        currentSpeedMs: speedMs,
        currentDirectionDeg: (45 + angleVariance + 360) % 360,
        windSpeedKts: +(23.2 + ((rIdx * 3 + cIdx) % 5) * 0.7).toFixed(1),
        windDirectionDeg: (42 + angleVariance + 360) % 360,
        waveHeightM: +(1.2 + ((rIdx + cIdx) % 3) * 0.12).toFixed(2)
      });
    });
  });

  return grid;
}

// Initial Simulated Marine Map Data - Arabian Sea Ocean Basin (~200 km offshore)
export function getInitialMarineMapState(): MarineMapSimulationState {
  const baseLat = 16.2500;
  const baseLng = 71.1500;
  const initialHeading = 45; // North-East
  const initialSpeed = 1.2; // knots (~0.62 m/s)

  // Historical breadcrumbs leading up to the current position in the Arabian Sea
  const driftHistory: BreadcrumbPoint[] = [
    {
      lat: +(baseLat - 0.0160).toFixed(4),
      lng: +(baseLng - 0.0175).toFixed(4),
      timestamp: '2h ago',
      speedKnots: 1.1
    },
    {
      lat: +(baseLat - 0.0120).toFixed(4),
      lng: +(baseLng - 0.0130).toFixed(4),
      timestamp: '90m ago',
      speedKnots: 1.2
    },
    {
      lat: +(baseLat - 0.0080).toFixed(4),
      lng: +(baseLng - 0.0088).toFixed(4),
      timestamp: '60m ago',
      speedKnots: 1.3
    },
    {
      lat: +(baseLat - 0.0045).toFixed(4),
      lng: +(baseLng - 0.0050).toFixed(4),
      timestamp: '30m ago',
      speedKnots: 1.2
    },
    {
      lat: +(baseLat - 0.0018).toFixed(4),
      lng: +(baseLng - 0.0020).toFixed(4),
      timestamp: '10m ago',
      speedKnots: 1.2
    },
    {
      lat: baseLat,
      lng: baseLng,
      timestamp: 'Live Fix',
      speedKnots: 1.2
    }
  ];

  const buoy: MarineBuoyTelemetry = {
    latitude: baseLat,
    longitude: baseLng,
    driftSpeedKnots: initialSpeed,
    headingDeg: initialHeading,
    headingCardinal: 'NE (045°)',
    depthMeters: 18.6,
    temperatureC: 26.4,
    waveHeightM: 1.2,
    salinityPsu: 35.2,
    batteryPercentage: 82,
    batteryVoltage: 3.63,
    status: 'Operational',
    lastUpdatedText: '2 sec ago'
  };

  const geofenceCenterLat = 16.2500;
  const geofenceCenterLng = 71.1500;
  const geofenceRadiusKm = 25.0; // 25 km safe operational circle in open Arabian Sea
  const distFromCenter = calculateHaversineDistanceKm(
    buoy.latitude, 
    buoy.longitude, 
    geofenceCenterLat, 
    geofenceCenterLng
  );

  const geofence: GeofenceConfig = {
    centerLat: geofenceCenterLat,
    centerLng: geofenceCenterLng,
    radiusKm: geofenceRadiusKm,
    isInside: distFromCenter <= geofenceRadiusKm,
    distanceFromCenterKm: +distFromCenter.toFixed(2)
  };

  // Recovery vessel positioned ~16.2 km away (South-West approaching North-East)
  const vesselLat = 16.1280;
  const vesselLng = 71.0150;
  const vesselSpeedKnots = 14.2;
  const distVesselKm = calculateHaversineDistanceKm(vesselLat, vesselLng, buoy.latitude, buoy.longitude);
  const distVesselNm = distVesselKm / 1.852;
  const etaMinutes = Math.round((distVesselKm / (vesselSpeedKnots * 1.852)) * 60);

  const vessel: RecoveryVesselInfo = {
    name: 'ORV Sagar Nidhi',
    callsign: 'VTND',
    latitude: vesselLat,
    longitude: vesselLng,
    headingDeg: Math.round(calculateBearingDeg(vesselLat, vesselLng, buoy.latitude, buoy.longitude)),
    speedKnots: vesselSpeedKnots,
    distanceKm: +distVesselKm.toFixed(1),
    distanceNm: +distVesselNm.toFixed(1),
    etaMinutes: etaMinutes,
    status: 'En Route'
  };

  const predictedPath = generatePredictedPath(
    buoy.latitude,
    buoy.longitude,
    buoy.headingDeg,
    buoy.driftSpeedKnots
  );

  const weatherGrid = generateWeatherGrid(baseLat, baseLng);

  return {
    buoy,
    driftHistory,
    predictedPath,
    geofence,
    vessel,
    weatherGrid,
    lastUpdateSecondsAgo: 2
  };
}

// Subtle live simulation tick updater
export function tickMarineSimulation(
  prev: MarineMapSimulationState
): MarineMapSimulationState {
  // Drift delta: subtle movement ~0.00003 deg each tick (about 3 meters)
  const driftLatDelta = 0.000025;
  const driftLngDelta = 0.000028;

  const newLat = +(prev.buoy.latitude + driftLatDelta).toFixed(6);
  const newLng = +(prev.buoy.longitude + driftLngDelta).toFixed(6);

  // Slight natural fluctuations in speed and heading
  const timeSec = Date.now() / 1000;
  const newSpeed = +(1.2 + Math.sin(timeSec / 10) * 0.15).toFixed(1);
  const newHeading = Math.round(45 + Math.sin(timeSec / 15) * 4);
  const newHeadingCard = `NE (${String(newHeading).padStart(3, '0')}°)`;

  const newBuoy: MarineBuoyTelemetry = {
    ...prev.buoy,
    latitude: newLat,
    longitude: newLng,
    driftSpeedKnots: newSpeed,
    headingDeg: newHeading,
    headingCardinal: newHeadingCard,
    waveHeightM: +(1.2 + Math.sin(timeSec / 8) * 0.08).toFixed(2),
    salinityPsu: 35.2,
    lastUpdatedText: 'Just now'
  };

  // Update drift history: append when distance from last point exceeds threshold
  const lastPoint = prev.driftHistory[prev.driftHistory.length - 1];
  const distFromLastKm = calculateHaversineDistanceKm(
    lastPoint.lat, 
    lastPoint.lng, 
    newLat, 
    newLng
  );

  let newHistory = [...prev.driftHistory];
  if (distFromLastKm > 0.1) {
    newHistory.push({
      lat: newLat,
      lng: newLng,
      timestamp: 'Live Fix',
      speedKnots: newSpeed
    });
    if (newHistory.length > 25) {
      newHistory.shift();
    }
  } else {
    // Update the last live fix position
    newHistory[newHistory.length - 1] = {
      ...newHistory[newHistory.length - 1],
      lat: newLat,
      lng: newLng,
      speedKnots: newSpeed
    };
  }

  // Recalculate Geofence
  const distFromCenter = calculateHaversineDistanceKm(
    newLat, 
    newLng, 
    prev.geofence.centerLat, 
    prev.geofence.centerLng
  );
  const isInside = distFromCenter <= prev.geofence.radiusKm;

  const newGeofence: GeofenceConfig = {
    ...prev.geofence,
    distanceFromCenterKm: +distFromCenter.toFixed(2),
    isInside
  };

  // Recovery vessel slowly moves along intercept vector towards buoy
  const vBearing = calculateBearingDeg(
    prev.vessel.latitude, 
    prev.vessel.longitude, 
    newLat, 
    newLng
  );
  const vBearingRad = (vBearing * Math.PI) / 180;
  // Vessel moves ~0.00006 deg (~7m)
  const vLatDelta = 0.000045 * Math.cos(vBearingRad);
  const vLngDelta = 0.000045 * Math.sin(vBearingRad);

  const newVesselLat = +(prev.vessel.latitude + vLatDelta).toFixed(6);
  const newVesselLng = +(prev.vessel.longitude + vLngDelta).toFixed(6);
  const newVesselDistKm = calculateHaversineDistanceKm(
    newVesselLat, 
    newVesselLng, 
    newLat, 
    newLng
  );
  const newVesselDistNm = newVesselDistKm / 1.852;
  const newEta = Math.max(1, Math.round((newVesselDistKm / (prev.vessel.speedKnots * 1.852)) * 60));

  const newVessel: RecoveryVesselInfo = {
    ...prev.vessel,
    latitude: newVesselLat,
    longitude: newVesselLng,
    headingDeg: Math.round(vBearing),
    distanceKm: +newVesselDistKm.toFixed(1),
    distanceNm: +newVesselDistNm.toFixed(1),
    etaMinutes: newEta
  };

  // Recalculate predicted trajectory
  const newPredictedPath = generatePredictedPath(newLat, newLng, newHeading, newSpeed);

  return {
    buoy: newBuoy,
    driftHistory: newHistory,
    predictedPath: newPredictedPath,
    geofence: newGeofence,
    vessel: newVessel,
    weatherGrid: prev.weatherGrid,
    lastUpdateSecondsAgo: 0
  };
}
