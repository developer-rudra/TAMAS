import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { MarineMapTileStyle } from '../../types/telemetry';
import { 
  Radio, 
  Route, 
  TrendingUp, 
  Ship, 
  ShieldCheck, 
  Waves, 
  ZoomIn, 
  ZoomOut, 
  Crosshair, 
  Layers, 
  RotateCcw,
  Check
} from 'lucide-react';

interface MapLayersPanelProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterBuoy: () => void;
  onResetView: () => void;
}

export const MapLayersPanel: React.FC<MapLayersPanelProps> = ({
  onZoomIn,
  onZoomOut,
  onCenterBuoy,
  onResetView
}) => {
  const { 
    mapLayers, 
    toggleMapLayer, 
    mapTileStyle, 
    setMapTileStyle 
  } = useMissionStore();

  const cycleMapTileStyle = () => {
    const nextStyle: Record<MarineMapTileStyle, MarineMapTileStyle> = {
      dark: 'ocean',
      ocean: 'osm',
      osm: 'dark'
    };
    setMapTileStyle(nextStyle[mapTileStyle]);
  };

  const getStyleLabel = (style: MarineMapTileStyle) => {
    switch (style) {
      case 'dark': return 'Tactical Dark';
      case 'ocean': return 'Esri Ocean';
      case 'osm': return 'OpenStreetMap';
    }
  };

  return (
    <div className="w-64 flex-shrink-0 flex flex-col gap-3 select-none">
      
      {/* 1. MAP LAYERS CARD */}
      <div className="tamas-card p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-tamas-info" />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              MAP LAYERS
            </h3>
          </div>
          <span className="text-[10px] text-tamas-textMuted font-mono">
            Active: {Object.values(mapLayers).filter(Boolean).length}/6
          </span>
        </div>

        {/* Toggle List */}
        <div className="space-y-2 text-xs">
          
          {/* Layer 1: TAMAS Buoy */}
          <div 
            onClick={() => toggleMapLayer('showBuoy')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E87522] shadow-[0_0_8px_rgba(232,117,34,0.6)]" />
              <span className="text-[11px] font-semibold text-tamas-text">
                TAMAS Buoy
              </span>
            </div>
            
            {/* Toggle Switch */}
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showBuoy ? 'bg-[#E87522]' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showBuoy ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

          {/* Layer 2: Drift Path (Past) */}
          <div 
            onClick={() => toggleMapLayer('showPastDrift')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Route className="w-3.5 h-3.5 text-tamas-info" />
              <span className="text-[11px] font-semibold text-tamas-text">
                Drift Path (Past)
              </span>
            </div>
            
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showPastDrift ? 'bg-tamas-info' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showPastDrift ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

          {/* Layer 3: Predicted Path */}
          <div 
            onClick={() => toggleMapLayer('showPredictedDrift')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <TrendingUp className="w-3.5 h-3.5 text-tamas-warning" />
              <span className="text-[11px] font-semibold text-tamas-text">
                Predicted Path
              </span>
            </div>
            
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showPredictedDrift ? 'bg-tamas-warning' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showPredictedDrift ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

          {/* Layer 4: Recovery Vessel */}
          <div 
            onClick={() => toggleMapLayer('showRecoveryVessel')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Ship className="w-3.5 h-3.5 text-tamas-operational" />
              <span className="text-[11px] font-semibold text-tamas-text">
                Recovery Vessel
              </span>
            </div>
            
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showRecoveryVessel ? 'bg-tamas-operational' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showRecoveryVessel ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

          {/* Layer 5: Geofence Zone */}
          <div 
            onClick={() => toggleMapLayer('showGeofence')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#52B788]" />
              <span className="text-[11px] font-semibold text-tamas-text">
                Geofence Zone
              </span>
            </div>
            
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showGeofence ? 'bg-tamas-operational' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showGeofence ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

          {/* Layer 6: Weather / Ocean Data */}
          <div 
            onClick={() => toggleMapLayer('showWeatherOverlay')}
            className="flex items-center justify-between p-2 rounded-lg bg-[#1A2834] hover:bg-[#203241] border border-tamas-border/40 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2.5">
              <Waves className="w-3.5 h-3.5 text-[#4FA3B8]" />
              <span className="text-[11px] font-semibold text-tamas-text">
                Weather / Ocean Data
              </span>
            </div>
            
            <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
              mapLayers.showWeatherOverlay ? 'bg-tamas-info' : 'bg-[#2A3B49]'
            }`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform transform ${
                mapLayers.showWeatherOverlay ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAP CONTROLS CARD */}
      <div className="tamas-card p-4 space-y-2.5">
        <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase border-b border-tamas-border/60 pb-2">
          MAP CONTROLS
        </h3>

        <div className="space-y-1.5 text-xs">
          
          {/* Zoom Buttons Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onZoomIn}
              className="py-1.5 px-2 rounded-md bg-[#1A2834] hover:bg-[#243746] border border-tamas-border/60 text-tamas-text flex items-center justify-center space-x-1.5 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-tamas-info" />
              <span className="font-semibold text-[11px]">+ Zoom In</span>
            </button>

            <button
              onClick={onZoomOut}
              className="py-1.5 px-2 rounded-md bg-[#1A2834] hover:bg-[#243746] border border-tamas-border/60 text-tamas-text flex items-center justify-center space-x-1.5 transition-colors"
            >
              <ZoomOut className="w-3.5 h-3.5 text-tamas-info" />
              <span className="font-semibold text-[11px]">− Zoom Out</span>
            </button>
          </div>

          {/* Center on TAMAS */}
          <button
            onClick={onCenterBuoy}
            className="w-full py-1.5 px-3 rounded-md bg-[#1A2834] hover:bg-[#243746] border border-tamas-border/60 text-tamas-text flex items-center justify-between transition-colors"
          >
            <span className="flex items-center space-x-2 text-[11px] font-semibold">
              <Crosshair className="w-3.5 h-3.5 text-[#E87522]" />
              <span>Center on TAMAS</span>
            </span>
            <span className="text-[10px] text-tamas-textMuted font-mono">◎ FIX</span>
          </button>

          {/* Toggle Map Style */}
          <button
            onClick={cycleMapTileStyle}
            className="w-full py-1.5 px-3 rounded-md bg-[#1A2834] hover:bg-[#243746] border border-tamas-border/60 text-tamas-text flex items-center justify-between transition-colors"
          >
            <span className="flex items-center space-x-2 text-[11px] font-semibold">
              <Layers className="w-3.5 h-3.5 text-tamas-info" />
              <span>Toggle Map Style</span>
            </span>
            <span className="text-[10px] text-tamas-info font-mono font-bold">
              {getStyleLabel(mapTileStyle)}
            </span>
          </button>

          {/* Reset View */}
          <button
            onClick={onResetView}
            className="w-full py-1.5 px-3 rounded-md bg-[#1A2834] hover:bg-[#243746] border border-tamas-border/60 text-tamas-text flex items-center justify-center space-x-1.5 transition-colors text-[11px] font-medium text-tamas-textMuted hover:text-white"
          >
            <RotateCcw className="w-3 h-3 text-tamas-textMuted" />
            <span>Reset Default View</span>
          </button>

        </div>
      </div>

    </div>
  );
};
