import React, { useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MarineBuoyTelemetry } from '../../types/telemetry';
import { 
  Radio, 
  Activity, 
  Battery, 
  Compass, 
  Wind, 
  Thermometer, 
  ArrowDownCircle,
  Clock,
  ShieldCheck,
  Waves,
  Droplets
} from 'lucide-react';

interface BuoyMarkerProps {
  telemetry: MarineBuoyTelemetry;
  isSelected?: boolean;
}

export const BuoyMarker: React.FC<BuoyMarkerProps> = ({ telemetry, isSelected }) => {
  // Create high-visibility tactical orange buoy DivIcon with pulsing wave ring
  const customIcon = useMemo(() => {
    return L.divIcon({
      className: 'tamas-buoy-marker-wrapper',
      html: `
        <div class="relative flex items-center justify-center" style="width: 44px; height: 44px;">
          <!-- Animated Concentric Radar Pulse Ring -->
          <div class="absolute inset-0 rounded-full bg-orange-500/25 animate-ping" style="animation-duration: 2.4s;"></div>
          <div class="absolute inset-1.5 rounded-full bg-orange-500/35 animate-pulse"></div>
          
          <!-- Outer Spar Float Ring -->
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#18242D] border-2 border-[#E87522] shadow-[0_0_12px_rgba(232,117,34,0.7)]">
            <!-- Center Core Buoy Dot -->
            <div class="w-3.5 h-3.5 rounded-full bg-[#E87522] flex items-center justify-center shadow-inner">
              <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>

          <!-- Compass Direction Pointer Bead -->
          <div class="absolute top-0 w-2 h-2 rounded-full bg-[#4FA3B8] shadow-sm transform -translate-y-1" style="transform-origin: 22px 22px; transform: rotate(${telemetry.headingDeg}deg) translateY(-14px);"></div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -22]
    });
  }, [telemetry.headingDeg]);

  const latFormatted = `${telemetry.latitude.toFixed(4)}° N`;
  const lngFormatted = `${telemetry.longitude.toFixed(4)}° E`;

  return (
    <Marker 
      position={[telemetry.latitude, telemetry.longitude]} 
      icon={customIcon}
    >
      <Popup className="tamas-dark-popup" maxWidth={320} minWidth={280}>
        <div className="p-3 text-xs font-sans space-y-2.5 select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#3D5A68] pb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E87522] animate-pulse" />
              <div>
                <h4 className="font-extrabold text-[#E8EDF0] text-sm tracking-wide">
                  TAMAS BUOY
                </h4>
                <span className="text-[10px] text-[#9AA9B5] font-mono">
                  SPAR-04 • ISRO/INCOIS
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-[#52B788]/15 border border-[#52B788]/40 text-[#52B788] text-[10px] font-bold">
              <ShieldCheck className="w-3 h-3" />
              <span>{telemetry.status.toUpperCase()}</span>
            </div>
          </div>

          {/* Coordinates Grid */}
          <div className="grid grid-cols-2 gap-2 bg-[#1A2834] p-2 rounded-md border border-[#2D414D] font-mono text-[11px]">
            <div>
              <span className="text-[9px] text-[#9AA9B5] block uppercase font-sans">Latitude</span>
              <span className="text-[#E8EDF0] font-bold">{latFormatted}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#9AA9B5] block uppercase font-sans">Longitude</span>
              <span className="text-[#E8EDF0] font-bold">{lngFormatted}</span>
            </div>
          </div>

          {/* Dynamic Telemetry Rows */}
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Wind className="w-3.5 h-3.5 text-[#4FA3B8]" />
                <span>Drift Speed:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.driftSpeedKnots} knots
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-[#4FA3B8]" />
                <span>Heading:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.headingCardinal}
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Battery className="w-3.5 h-3.5 text-[#52B788]" />
                <span>Battery Status:</span>
              </span>
              <span className="font-bold text-[#52B788] font-mono">
                {telemetry.batteryPercentage}% ({telemetry.batteryVoltage}V)
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Thermometer className="w-3.5 h-3.5 text-[#4FA3B8]" />
                <span>Water Temp:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.temperatureC} °C
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <ArrowDownCircle className="w-3.5 h-3.5 text-[#4FA3B8]" />
                <span>Spar Draft Depth:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.depthMeters} m
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Waves className="w-3.5 h-3.5 text-[#52B788]" />
                <span>Wave Height:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.waveHeightM ?? 1.2} m
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5]">
              <span className="flex items-center space-x-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#4FA3B8]" />
                <span>Salinity:</span>
              </span>
              <span className="font-bold text-[#E8EDF0] font-mono">
                {telemetry.salinityPsu ?? 35.2} PSU
              </span>
            </div>

            <div className="flex justify-between items-center text-[#9AA9B5] pt-1 border-t border-[#3D5A68]/40">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9AA9B5]" />
                <span>Last Update:</span>
              </span>
              <span className="text-[#9AA9B5] font-mono">
                {telemetry.lastUpdatedText}
              </span>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
