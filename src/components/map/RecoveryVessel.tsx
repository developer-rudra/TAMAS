import React, { useMemo } from 'react';
import { Marker, Polyline, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { RecoveryVesselInfo, MarineBuoyTelemetry } from '../../types/telemetry';
import { Ship, Navigation, Clock, Gauge, Compass } from 'lucide-react';

interface RecoveryVesselProps {
  vessel: RecoveryVesselInfo;
  buoy: MarineBuoyTelemetry;
  isHighlighted?: boolean;
}

export const RecoveryVessel: React.FC<RecoveryVesselProps> = ({
  vessel,
  buoy,
  isHighlighted = false
}) => {
  // Custom Tactical Vessel DivIcon
  const shipIcon = useMemo(() => {
    return L.divIcon({
      className: 'tamas-vessel-marker-wrapper',
      html: `
        <div class="relative flex items-center justify-center" style="width: 40px; height: 40px;">
          <!-- Radar Pulse if Highlighted -->
          ${isHighlighted ? '<div class="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" style="animation-duration: 2s;"></div>' : ''}
          
          <!-- Outer Ring -->
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#18242D] border-2 ${isHighlighted ? 'border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.8)]' : 'border-[#4FA3B8] shadow-md'}">
            <!-- Ship SVG icon rotated by vessel heading -->
            <svg 
              class="w-4 h-4 text-[#4FA3B8]" 
              style="transform: rotate(${vessel.headingDeg}deg);" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2.2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <polygon points="12 2 19 21 12 17 5 21 12 2" fill="rgba(79, 163, 184, 0.35)"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });
  }, [vessel.headingDeg, isHighlighted]);

  const routePositions: [number, number][] = [
    [vessel.latitude, vessel.longitude],
    [buoy.latitude, buoy.longitude]
  ];

  // Calculate mid-point coordinate for route badge
  const midLat = (vessel.latitude + buoy.latitude) / 2;
  const midLng = (vessel.longitude + buoy.longitude) / 2;

  return (
    <>
      {/* Tactical Intercept Route Line: Vessel -> Buoy */}
      <Polyline
        positions={routePositions}
        pathOptions={{
          color: isHighlighted ? '#00F0FF' : '#52B788',
          weight: isHighlighted ? 3.5 : 2.2,
          dashArray: '8, 6',
          opacity: isHighlighted ? 1 : 0.75,
          lineCap: 'round'
        }}
      >
        <Tooltip
          direction="top"
          offset={[0, -5]}
          opacity={0.95}
          permanent={isHighlighted}
        >
          <div className="bg-[#1A2834] text-[#E8EDF0] px-2.5 py-1 rounded border border-[#3D5A68] text-[10px] font-mono select-none">
            <span className="text-[#52B788] font-bold block">INTERCEPT ROUTE</span>
            <span>{vessel.distanceKm} km ({vessel.distanceNm} NM) • ETA {vessel.etaMinutes} min</span>
          </div>
        </Tooltip>
      </Polyline>

      {/* Recovery Vessel Marker */}
      <Marker
        position={[vessel.latitude, vessel.longitude]}
        icon={shipIcon}
      >
        <Popup className="tamas-dark-popup" maxWidth={300} minWidth={260}>
          <div className="p-3 text-xs font-sans space-y-2.5 select-none">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#3D5A68] pb-2">
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded bg-[#1A2834] text-[#4FA3B8] border border-[#2D414D]">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#E8EDF0] text-sm tracking-wide">
                    {vessel.name}
                  </h4>
                  <span className="text-[10px] text-[#9AA9B5] font-mono">
                    Callsign: {vessel.callsign} • SAR Support
                  </span>
                </div>
              </div>

              <span className="px-2 py-0.5 rounded-full bg-[#52B788]/15 border border-[#52B788]/40 text-[#52B788] text-[10px] font-bold">
                {vessel.status}
              </span>
            </div>

            {/* Readouts */}
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-[#9AA9B5]">
                <span className="flex items-center space-x-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#4FA3B8]" />
                  <span>Distance to TAMAS:</span>
                </span>
                <span className="font-bold text-[#E8EDF0] font-mono">
                  {vessel.distanceKm} km ({vessel.distanceNm} NM)
                </span>
              </div>

              <div className="flex justify-between items-center text-[#9AA9B5]">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F1A340]" />
                  <span>Estimated Arrival Time:</span>
                </span>
                <span className="font-bold text-[#F1A340] font-mono">
                  ~{vessel.etaMinutes} min
                </span>
              </div>

              <div className="flex justify-between items-center text-[#9AA9B5]">
                <span className="flex items-center space-x-1.5">
                  <Gauge className="w-3.5 h-3.5 text-[#4FA3B8]" />
                  <span>Cruising Speed:</span>
                </span>
                <span className="font-bold text-[#E8EDF0] font-mono">
                  {vessel.speedKnots} knots
                </span>
              </div>

              <div className="flex justify-between items-center text-[#9AA9B5]">
                <span className="flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#4FA3B8]" />
                  <span>Bearing:</span>
                </span>
                <span className="font-bold text-[#E8EDF0] font-mono">
                  {String(vessel.headingDeg).padStart(3, '0')}° True
                </span>
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};
