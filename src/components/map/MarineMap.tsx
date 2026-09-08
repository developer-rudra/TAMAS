import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useMissionStore } from '../../store/useMissionStore';
import { BuoyMarker } from './BuoyMarker';
import { DriftPath } from './DriftPath';
import { PredictedPath } from './PredictedPath';
import { GeofenceZone } from './GeofenceZone';
import { RecoveryVessel } from './RecoveryVessel';
import { WeatherOverlay } from './WeatherOverlay';
import { MapLayersPanel } from './MapLayersPanel';
import { MissionInfoPanel } from './MissionInfoPanel';
import { OceanAnalyticsPanel } from './OceanAnalyticsPanel';
import { 
  PanelLeftClose, 
  PanelLeftOpen, 
  PanelRightClose, 
  PanelRightOpen,
  Compass,
  Radio,
  Maximize2
} from 'lucide-react';

// Controller sub-component with access to Leaflet map instance
interface MapViewControllerProps {
  onControllerReady: (controller: {
    zoomIn: () => void;
    zoomOut: () => void;
    centerBuoy: () => void;
    focusRoute: () => void;
    resetView: () => void;
  }) => void;
}

const MapViewController: React.FC<MapViewControllerProps> = ({ onControllerReady }) => {
  const map = useMap();
  const { marineMapState, mapFocusTarget, setMapFocusTarget } = useMissionStore();
  const { buoy, vessel } = marineMapState;

  useEffect(() => {
    onControllerReady({
      zoomIn: () => map.zoomIn(),
      zoomOut: () => map.zoomOut(),
      centerBuoy: () => {
        map.flyTo([buoy.latitude, buoy.longitude], 12, { duration: 1.2 });
      },
      focusRoute: () => {
        const bounds = L.latLngBounds([
          [vessel.latitude, vessel.longitude],
          [buoy.latitude, buoy.longitude]
        ]);
        map.flyToBounds(bounds, { padding: [60, 60], duration: 1.4 });
      },
      resetView: () => {
        map.flyTo([16.2500, 71.1500], 10, { duration: 1.2 });
      }
    });
  }, [map, onControllerReady, buoy.latitude, buoy.longitude, vessel.latitude, vessel.longitude]);

  // Handle external focus triggers from dashboard deep-links
  useEffect(() => {
    if (!mapFocusTarget) return;

    if (mapFocusTarget === 'buoy') {
      map.flyTo([buoy.latitude, buoy.longitude], 12, { duration: 1.2 });
    } else if (mapFocusTarget === 'route' || mapFocusTarget === 'vessel') {
      const bounds = L.latLngBounds([
        [vessel.latitude, vessel.longitude],
        [buoy.latitude, buoy.longitude]
      ]);
      map.flyToBounds(bounds, { padding: [60, 60], duration: 1.4 });
    } else if (mapFocusTarget === 'geofence') {
      map.flyTo([16.2500, 71.1500], 10, { duration: 1.2 });
    }

    setMapFocusTarget(null);
  }, [mapFocusTarget, map, buoy.latitude, buoy.longitude, vessel.latitude, vessel.longitude, setMapFocusTarget]);

  return null;
};

export const MarineMap: React.FC = () => {
  const { 
    marineMapState, 
    mapLayers, 
    mapTileStyle,
    highlightRecoveryRoute 
  } = useMissionStore();

  const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(true);
  const [rightPanelOpen, setRightPanelOpen] = useState<boolean>(true);

  const controllerRef = useRef<{
    zoomIn: () => void;
    zoomOut: () => void;
    centerBuoy: () => void;
    focusRoute: () => void;
    resetView: () => void;
  } | null>(null);

  // Free map tile URL configs
  const getTileConfig = () => {
    switch (mapTileStyle) {
      case 'dark':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        };
      case 'ocean':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean/MapServer/tile/{z}/{y}/{x}',
          attribution: '&copy; Esri, GEBCO, NOAA, National Geographic, Garmin, HERE, Geonames.org'
        };
      case 'osm':
        return {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        };
    }
  };

  const tileConfig = getTileConfig();

  return (
    <div className="space-y-4 select-none">
      
      {/* 1. TOP INTERACTIVE MARINE MAP CONTAINER */}
      <div className="relative flex flex-col h-[520px] lg:h-[580px] w-full rounded-xl overflow-hidden border border-tamas-border/60 shadow-xl">
        
        {/* Top Sector Tactical Status Banner */}
        <div className="bg-[#1A2834] px-4 py-2 border-b border-tamas-border/60 flex flex-wrap items-center justify-between text-xs z-10 font-mono">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-tamas-operational font-bold">
              <span className="w-2 h-2 rounded-full bg-tamas-operational animate-pulse" />
              <span>ARABIAN SEA DEPLOYMENT SECTOR</span>
            </span>
            <span className="text-tamas-border hidden sm:inline">|</span>
            <span className="text-tamas-textMuted hidden sm:inline">
              ZONE: GEOFENCE-ALPHA (25 KM SAFE RADIUS)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-tamas-textMuted text-[10px]">BUOY COORDS:</span>
              <span className="text-tamas-text font-bold">
                {marineMapState.buoy.latitude.toFixed(4)}° N, {marineMapState.buoy.longitude.toFixed(4)}° E
              </span>
            </div>

            <div className="flex items-center space-x-1 text-tamas-textMuted">
              <button
                onClick={() => setLeftPanelOpen(!leftPanelOpen)}
                title={leftPanelOpen ? "Collapse Left Panel" : "Expand Left Panel"}
                className="p-1 rounded hover:bg-[#263745] text-tamas-textMuted hover:text-white"
              >
                {leftPanelOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4 text-tamas-info" />}
              </button>
              <button
                onClick={() => setRightPanelOpen(!rightPanelOpen)}
                title={rightPanelOpen ? "Collapse Right Panel" : "Expand Right Panel"}
                className="p-1 rounded hover:bg-[#263745] text-tamas-textMuted hover:text-white"
              >
                {rightPanelOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4 text-tamas-info" />}
              </button>
            </div>
          </div>
        </div>

        {/* Main Map Body Row */}
        <div className="relative flex-1 flex overflow-hidden">
          
          {/* Left Side: Map Layers & Controls Panel */}
          {leftPanelOpen && (
            <div className="absolute lg:relative z-20 left-0 inset-y-0 p-3 bg-tamas-bg/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-r border-tamas-border/60 overflow-y-auto">
              <MapLayersPanel
                onZoomIn={() => controllerRef.current?.zoomIn()}
                onZoomOut={() => controllerRef.current?.zoomOut()}
                onCenterBuoy={() => controllerRef.current?.centerBuoy()}
                onResetView={() => controllerRef.current?.resetView()}
              />
            </div>
          )}

          {/* Center: Leaflet Interactive Map Viewport */}
          <div className="flex-1 relative h-full w-full bg-[#121B22]">
            <MapContainer
              center={[marineMapState.buoy.latitude, marineMapState.buoy.longitude]}
              zoom={10}
              zoomControl={false}
              scrollWheelZoom={true}
              className="w-full h-full"
            >
              <TileLayer
                key={mapTileStyle}
                url={tileConfig.url}
                attribution={tileConfig.attribution}
              />

              <MapViewController
                onControllerReady={(ctrl) => {
                  controllerRef.current = ctrl;
                }}
              />

              {/* Layer 1: Geofence Safe Perimeter */}
              {mapLayers.showGeofence && (
                <GeofenceZone geofence={marineMapState.geofence} />
              )}

              {/* Layer 2: Drift Path (Past) */}
              {mapLayers.showPastDrift && (
                <DriftPath history={marineMapState.driftHistory} />
              )}

              {/* Layer 3: Predicted Path */}
              {mapLayers.showPredictedDrift && (
                <PredictedPath path={marineMapState.predictedPath} />
              )}

              {/* Layer 4: Recovery Vessel & Route */}
              {mapLayers.showRecoveryVessel && (
                <RecoveryVessel
                  vessel={marineMapState.vessel}
                  buoy={marineMapState.buoy}
                  isHighlighted={highlightRecoveryRoute}
                />
              )}

              {/* Layer 5: Weather / Ocean Current Overlay */}
              {mapLayers.showWeatherOverlay && (
                <WeatherOverlay weatherGrid={marineMapState.weatherGrid} />
              )}

              {/* Layer 6: TAMAS Buoy Live Marker */}
              {mapLayers.showBuoy && (
                <BuoyMarker
                  telemetry={marineMapState.buoy}
                  isSelected={true}
                />
              )}
            </MapContainer>

            {/* Compact Floating Weather/Current Legend (Section 9 Requirement) */}
            {mapLayers.showWeatherOverlay && (
              <div className="absolute top-4 right-4 z-20 bg-[#1A2834]/95 backdrop-blur-md border border-tamas-border/60 p-2.5 rounded-lg text-[10px] font-mono space-y-1.5 shadow-lg select-none">
                <div className="text-tamas-info font-bold text-[9px] uppercase tracking-wider border-b border-tamas-border/40 pb-1 flex items-center justify-between">
                  <span>HYDRODYNAMIC LEGEND</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-tamas-info animate-ping" />
                </div>
                <div className="flex justify-between space-x-3 text-[#9AA9B5]">
                  <span>Ocean Current:</span>
                  <strong className="text-tamas-text font-bold">0.62 m/s (1.2 kts)</strong>
                </div>
                <div className="flex justify-between space-x-3 text-[#9AA9B5]">
                  <span>Wind Speed:</span>
                  <strong className="text-tamas-warning font-bold">24.3 kts (NE 042°)</strong>
                </div>
                <div className="flex justify-between space-x-3 text-[#9AA9B5]">
                  <span>Wave Height:</span>
                  <strong className="text-tamas-operational font-bold">1.2 m (T: 6.4s)</strong>
                </div>
              </div>
            )}

            {/* Floating Map Compass / Tactical Reticle (Bottom-Right) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden md:flex items-center space-x-2 bg-[#1A2834]/85 backdrop-blur-sm border border-tamas-border/60 px-3 py-1.5 rounded-lg text-[10px] font-mono text-tamas-textMuted">
              <Compass className="w-3.5 h-3.5 text-tamas-info animate-spin" style={{ animationDuration: '40s' }} />
              <span>NORTH UP • ARABIAN SEA DATUM</span>
            </div>

            {/* Floating Map Legend (Bottom-Left) */}
            <div className="absolute bottom-4 left-4 z-20 hidden md:block bg-[#1A2834]/90 backdrop-blur-sm border border-tamas-border/60 p-2.5 rounded-lg text-[10px] font-mono space-y-1.5 pointer-events-auto select-none">
              <div className="text-[#9AA9B5] font-bold text-[9px] uppercase tracking-wider border-b border-[#3D5A68]/40 pb-0.5">
                MAP LEGEND
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E87522]" />
                <span className="text-[#E8EDF0]">TAMAS Buoy (Live)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-0.5 bg-[#4FA3B8]" />
                <span className="text-[#9AA9B5]">Drift Trail (Past)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-0.5 border-t border-dashed border-[#F1A340]" />
                <span className="text-[#9AA9B5]">Predicted Vector</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-0.5 border-t border-dashed border-[#52B788]" />
                <span className="text-[#9AA9B5]">Recovery Intercept</span>
              </div>
            </div>
          </div>

          {/* Right Side: Mission Info Panel */}
          {rightPanelOpen && (
            <div className="absolute lg:relative z-20 right-0 inset-y-0 p-3 bg-tamas-bg/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-l border-tamas-border/60 overflow-y-auto">
              <MissionInfoPanel
                onFocusRoute={() => controllerRef.current?.focusRoute()}
                onFocusBuoy={() => controllerRef.current?.centerBuoy()}
              />
            </div>
          )}

        </div>

      </div>

      {/* 2. BOTTOM OCEAN ANALYTICS PANEL (Section 15 Requirement) */}
      <OceanAnalyticsPanel />

    </div>
  );
};
