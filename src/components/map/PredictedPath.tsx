import React from 'react';
import { Polyline, CircleMarker, Tooltip } from 'react-leaflet';

interface PredictedPathProps {
  path: [number, number][];
}

export const PredictedPath: React.FC<PredictedPathProps> = ({ path }) => {
  if (!path || path.length < 2) return null;

  const endpoint = path[path.length - 1];

  return (
    <>
      {/* Dashed Amber/Orange Predicted Drift Vector Polyline */}
      <Polyline
        positions={path}
        pathOptions={{
          color: '#F1A340',
          weight: 2.5,
          dashArray: '6, 8',
          opacity: 0.85,
          lineCap: 'round',
          lineJoin: 'round'
        }}
      />

      {/* Terminal Vector Projection Arrow / Marker */}
      <CircleMarker
        center={endpoint}
        radius={4.5}
        pathOptions={{
          color: '#F1A340',
          fillColor: '#E87522',
          fillOpacity: 0.9,
          weight: 1.5
        }}
      >
        <Tooltip
          direction="top"
          offset={[0, -6]}
          opacity={0.95}
        >
          <div className="bg-[#1A2834] text-[#E8EDF0] px-2 py-1 rounded border border-[#F1A340]/60 text-[10px] font-mono select-none">
            <span className="text-[#F1A340] font-bold block">PREDICTED DRIFT (+2.5 hrs)</span>
            <span>Simulated Hydrodynamic Vector</span>
          </div>
        </Tooltip>
      </CircleMarker>
    </>
  );
};
