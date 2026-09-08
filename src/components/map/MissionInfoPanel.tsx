import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  Radio, 
  ShieldCheck, 
  Ship, 
  ArrowUpRight, 
  Crosshair, 
  Wind, 
  Compass, 
  Battery, 
  Thermometer, 
  ArrowDownCircle, 
  Clock,
  AlertTriangle,
  Play,
  Waves,
  Droplets
} from 'lucide-react';

interface MissionInfoPanelProps {
  onFocusRoute: () => void;
  onFocusBuoy: () => void;
}

export const MissionInfoPanel: React.FC<MissionInfoPanelProps> = ({
  onFocusRoute,
  onFocusBuoy
}) => {
  const { 
    marineMapState, 
    highlightRecoveryRoute, 
    setHighlightRecoveryRoute 
  } = useMissionStore();

  const { buoy, geofence, vessel } = marineMapState;

  const handleToggleRoute = () => {
    setHighlightRecoveryRoute(!highlightRecoveryRoute);
    onFocusRoute();
  };

  return (
    <div className="w-72 flex-shrink-0 flex flex-col gap-3 select-none">
      
      {/* SECTION 1: TAMAS BUOY TELEMETRY */}
      <div className="tamas-card p-4 space-y-2.5">
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#E87522] animate-pulse" />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              TAMAS BUOY
            </h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full tamas-tag-green font-semibold">
            ● ONLINE
          </span>
        </div>

        {/* Coordinates Box */}
        <div className="bg-[#1A2834] p-2.5 rounded-lg border border-tamas-border/50 font-mono space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-[10px] text-tamas-textMuted uppercase font-sans">Latitude</span>
            <span className="font-bold text-tamas-text">{buoy.latitude.toFixed(4)}° N</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-[10px] text-tamas-textMuted uppercase font-sans">Longitude</span>
            <span className="font-bold text-tamas-text">{buoy.longitude.toFixed(4)}° E</span>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Drift Speed</span>
            <span className="font-bold text-tamas-info font-mono text-sm block">
              {buoy.driftSpeedKnots} kts
            </span>
          </div>

          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Heading</span>
            <span className="font-bold text-tamas-text font-mono text-sm block">
              {buoy.headingCardinal}
            </span>
          </div>

          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Spar Depth</span>
            <span className="font-bold text-tamas-text font-mono text-sm block">
              {buoy.depthMeters} m
            </span>
          </div>

          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Water Temp</span>
            <span className="font-bold text-tamas-text font-mono text-sm block">
              {buoy.temperatureC} °C
            </span>
          </div>

          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Wave Height</span>
            <span className="font-bold text-tamas-operational font-mono text-sm block">
              {buoy.waveHeightM ?? 1.2} m
            </span>
          </div>

          <div className="p-2 rounded bg-[#1A2834] border border-tamas-border/40">
            <span className="text-[9px] text-tamas-textMuted uppercase block">Salinity</span>
            <span className="font-bold text-tamas-info font-mono text-sm block">
              {buoy.salinityPsu ?? 35.2} PSU
            </span>
          </div>
        </div>

        {/* Battery & Last Update */}
        <div className="flex justify-between items-center text-[11px] pt-1 text-tamas-textMuted border-t border-tamas-border/40 font-mono">
          <span className="flex items-center space-x-1">
            <Battery className="w-3.5 h-3.5 text-tamas-operational" />
            <span className="text-tamas-operational font-bold">{buoy.batteryPercentage}%</span>
            <span>({buoy.batteryVoltage}V)</span>
          </span>
          <span>{buoy.lastUpdatedText}</span>
        </div>
      </div>

      {/* SECTION 2: GEOFENCE STATUS */}
      <div className="tamas-card p-4 space-y-2.5">
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className={`w-4 h-4 ${geofence.isInside ? 'text-tamas-operational' : 'text-tamas-critical'}`} />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              GEOFENCE STATUS
            </h3>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
            geofence.isInside 
              ? 'bg-tamas-operational/15 text-tamas-operational border border-tamas-operational/40' 
              : 'bg-tamas-critical/15 text-tamas-critical border border-tamas-critical/40 animate-pulse'
          }`}>
            {geofence.isInside ? '● WITHIN SAFE ZONE' : '⚠ OUTSIDE OPERATIONAL ZONE'}
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono">
          <div className="flex justify-between">
            <span className="text-tamas-textMuted">Operational Radius:</span>
            <span className="font-bold text-tamas-text">{geofence.radiusKm.toFixed(1)} km</span>
          </div>

          <div className="flex justify-between">
            <span className="text-tamas-textMuted">Offset from Center:</span>
            <span className="font-bold text-tamas-info">{geofence.distanceFromCenterKm} km</span>
          </div>

          <div className="flex justify-between">
            <span className="text-tamas-textMuted">Center Datum:</span>
            <span className="text-tamas-text">{geofence.centerLat}°N, {geofence.centerLng}°E</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: RECOVERY PLAN */}
      <div className="tamas-card p-4 space-y-2.5 flex-1">
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <Ship className="w-4 h-4 text-tamas-info" />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              RECOVERY PLAN
            </h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full tamas-tag-blue font-semibold">
            {vessel.status}
          </span>
        </div>

        <div className="bg-[#1A2834] p-3 rounded-lg border border-tamas-border/50 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-tamas-textMuted text-[11px]">Primary Asset</span>
            <span className="font-bold text-tamas-text">{vessel.name}</span>
          </div>

          <div className="flex items-center justify-between font-mono">
            <span className="text-tamas-textMuted text-[11px]">Distance:</span>
            <span className="text-base font-extrabold text-tamas-operational">
              {vessel.distanceKm} km <span className="text-xs text-tamas-textMuted">({vessel.distanceNm} NM)</span>
            </span>
          </div>

          <div className="flex items-center justify-between font-mono">
            <span className="text-tamas-textMuted text-[11px]">ETA:</span>
            <span className="text-base font-extrabold text-[#F1A340]">
              ~{vessel.etaMinutes} min
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-tamas-textMuted">
            <span>Cruising Speed:</span>
            <span className="font-mono text-tamas-text">{vessel.speedKnots} kts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleToggleRoute}
            className={`w-full py-2 px-3 rounded-md text-xs font-bold tracking-wide transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
              highlightRecoveryRoute
                ? 'bg-tamas-info text-white shadow-[0_0_12px_rgba(79,163,184,0.4)]'
                : 'bg-[#1A2834] hover:bg-[#253949] border border-tamas-border/60 text-tamas-text'
            }`}
          >
            <span>{highlightRecoveryRoute ? 'ROUTE HIGHLIGHTED' : 'VIEW ROUTE →'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onFocusRoute}
            className="w-full py-2 px-3 rounded-md bg-tamas-orange hover:bg-orange-600 text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>START RECOVERY</span>
          </button>
        </div>

      </div>

      {/* SECTION 4: ALERTS */}
      <div className="tamas-card p-4 space-y-2.5">
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-tamas-warning" />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              ALERTS
            </h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-tamas-warning/15 border border-tamas-warning/40 text-tamas-warning font-semibold">
            1 Active
          </span>
        </div>

        <div className="bg-[#1A2834] p-3 rounded-lg border border-tamas-warning/40 space-y-2">
          <div>
            <span className="text-xs font-bold text-tamas-warning block">
              Ocean Current Anomaly Detected
            </span>
            <p className="text-[11px] text-tamas-textMuted mt-0.5 leading-relaxed">
              Abnormal current detected near TAMAS buoy.
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-tamas-textMuted font-mono pt-0.5">
            <span>Severity: <strong className="text-tamas-warning">Medium</strong></span>
            <span>2 min ago</span>
          </div>

          <button
            onClick={onFocusBuoy}
            className="w-full mt-1 py-1.5 rounded bg-[#16222C] hover:bg-[#1E2E3C] border border-tamas-border/50 text-[11px] font-semibold text-tamas-info flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Crosshair className="w-3.5 h-3.5 text-tamas-info" />
            <span>VIEW LOCATION ON MAP</span>
          </button>
        </div>
      </div>

    </div>
  );
};
