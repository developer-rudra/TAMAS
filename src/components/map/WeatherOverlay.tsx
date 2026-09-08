import React, { useMemo } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { WeatherVectorPoint } from '../../services/marineMapData';

interface WeatherOverlayProps {
  weatherGrid: WeatherVectorPoint[];
}

export const WeatherOverlay: React.FC<WeatherOverlayProps> = ({ weatherGrid }) => {
  // Create vector arrow markers with animated streamline pulses for each grid point
  const markers = useMemo(() => {
    return weatherGrid.map((pt) => {
      const icon = L.divIcon({
        className: 'tamas-weather-vector-icon',
        html: `
          <div class="flex flex-col items-center justify-center pointer-events-auto opacity-70 hover:opacity-100 transition-opacity" style="width: 36px; height: 36px;">
            <!-- Vector Flow Arrow rotated by current direction with animated wave pulse -->
            <div class="relative flex items-center justify-center" style="transform: rotate(${pt.currentDirectionDeg}deg);">
              <svg 
                class="w-5 h-5 text-[#4FA3B8]/80 hover:text-[#00F0FF] transition-colors" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <!-- Trailing Particle Streamline -->
              <div class="absolute -bottom-1 w-1 h-3 bg-gradient-to-t from-transparent via-[#4FA3B8]/40 to-[#00F0FF]/60 rounded-full animate-pulse"></div>
            </div>
            <!-- Sub-label with current velocity -->
            <span class="text-[8px] font-mono text-[#9AA9B5]/80 select-none tracking-tighter mt-0.5">
              ${pt.currentSpeedMs ?? (pt.currentSpeedKts * 0.514).toFixed(2)}m/s
            </span>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      return {
        point: pt,
        icon
      };
    });
  }, [weatherGrid]);

  return (
    <>
      {markers.map(({ point, icon }) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
          icon={icon}
        >
          <Tooltip direction="top" offset={[0, -8]} opacity={0.95}>
            <div className="bg-[#1A2834] text-[#E8EDF0] px-2.5 py-1.5 rounded border border-[#3D5A68] text-[10px] font-mono select-none space-y-0.5">
              <div className="text-[#4FA3B8] font-bold border-b border-[#3D5A68]/40 pb-0.5">
                SURFACE HYDRODYNAMICS
              </div>
              <div>Current: <strong className="text-white">{point.currentSpeedKts} kts</strong> @ {point.currentDirectionDeg}°</div>
              <div>Wind: <strong className="text-white">{point.windSpeedKts} kts</strong> @ {point.windDirectionDeg}°</div>
              <div>Swell: <strong className="text-white">{point.waveHeightM} m</strong></div>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </>
  );
};
