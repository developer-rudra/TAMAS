import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import { GeofenceConfig } from '../../types/telemetry';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

interface GeofenceZoneProps {
  geofence: GeofenceConfig;
}

export const GeofenceZone: React.FC<GeofenceZoneProps> = ({ geofence }) => {
  const isInside = geofence.isInside;
  const strokeColor = isInside ? '#52B788' : '#D9574B';
  const fillColor = isInside ? '#52B788' : '#D9574B';

  return (
    <Circle
      center={[geofence.centerLat, geofence.centerLng]}
      radius={geofence.radiusKm * 1000} // meters
      pathOptions={{
        color: strokeColor,
        weight: 1.8,
        dashArray: isInside ? '8, 6' : '4, 4',
        fillColor: fillColor,
        fillOpacity: 0.07
      }}
    >
      <Popup className="tamas-dark-popup">
        <div className="p-3 text-xs font-sans space-y-2 select-none">
          <div className="flex items-center space-x-2 border-b border-[#3D5A68] pb-1.5">
            {isInside ? (
              <ShieldCheck className="w-4 h-4 text-[#52B788]" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-[#D9574B]" />
            )}
            <span className="font-bold text-[#E8EDF0]">
              {isInside ? 'OPERATIONAL GEOFENCE' : 'GEOFENCE BREACH'}
            </span>
          </div>

          <div className="text-[11px] space-y-1 font-mono">
            <div className="flex justify-between">
              <span className="text-[#9AA9B5]">Radius:</span>
              <span className="text-[#E8EDF0] font-bold">{geofence.radiusKm} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9AA9B5]">Current Offset:</span>
              <span className="text-[#4FA3B8] font-bold">{geofence.distanceFromCenterKm} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9AA9B5]">Status:</span>
              <span className={`font-bold ${isInside ? 'text-[#52B788]' : 'text-[#D9574B]'}`}>
                {isInside ? '● WITHIN SAFE ZONE' : '⚠ OUTSIDE OPERATIONAL ZONE'}
              </span>
            </div>
          </div>
        </div>
      </Popup>
    </Circle>
  );
};
