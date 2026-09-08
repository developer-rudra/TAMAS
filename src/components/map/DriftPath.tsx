import React from 'react';
import { Polyline, CircleMarker, Tooltip } from 'react-leaflet';
import { BreadcrumbPoint } from '../../types/telemetry';

interface DriftPathProps {
  history: BreadcrumbPoint[];
}

export const DriftPath: React.FC<DriftPathProps> = ({ history }) => {
  if (!history || history.length < 2) return null;

  const positions: [number, number][] = history.map((pt) => [pt.lat, pt.lng]);

  return (
    <>
      {/* Outer Cyan Soft Glow Polyline */}
      <Polyline
        positions={positions}
        pathOptions={{
          color: '#4FA3B8',
          weight: 6,
          opacity: 0.25,
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />

      {/* Main Sharp Tactical Cyan Drift Polyline */}
      <Polyline
        positions={positions}
        pathOptions={{
          color: '#4FA3B8',
          weight: 2.5,
          opacity: 0.9,
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />

      {/* Historical Breadcrumb Waypoint Dots */}
      {history.map((pt, idx) => {
        const isCurrent = idx === history.length - 1;
        if (isCurrent) return null; // Current position handled by BuoyMarker

        return (
          <CircleMarker
            key={`breadcrumb-${idx}-${pt.lat}-${pt.lng}`}
            center={[pt.lat, pt.lng]}
            radius={3.5}
            pathOptions={{
              color: '#4FA3B8',
              fillColor: '#18242D',
              fillOpacity: 1,
              weight: 2
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -4]}
              opacity={0.95}
              className="tamas-tooltip"
            >
              <div className="bg-[#1A2834] text-[#E8EDF0] px-2 py-1 rounded border border-[#3D5A68] text-[10px] font-mono select-none">
                <span className="text-[#4FA3B8] font-bold block">WAYPOINT #{idx + 1}</span>
                <span>{pt.timestamp} • {pt.speedKnots} kts</span>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </>
  );
};
