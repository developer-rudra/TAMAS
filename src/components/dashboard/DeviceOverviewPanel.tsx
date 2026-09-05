import React, { useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { MarineBuoy3D, BuoyComponentInfo } from './MarineBuoy3D';
import { Info, Radio } from 'lucide-react';

export const DeviceOverviewPanel: React.FC = () => {
  const { currentPacket, setSelectedHotspotId } = useMissionStore();

  // Selected Component (default to Power Reservoir matching the reference image)
  const [selectedComponent, setSelectedComponent] = useState<BuoyComponentInfo>({
    id: 'battery',
    name: 'Power Reservoir',
    category: 'Primary Energy Storage',
    material: 'LiSOCl2 Bobbin Cells & HLC 1550',
    functionDesc: 'Dual 3.6V LiSOCl2 primary battery matrix buffered by Hybrid Layer Capacitor (HLC 1550) for 4.8 kbps bursts.',
    status: 'READY',
    metrics: {
      'Battery Level': '82%',
      'Voltage': '3.62 V',
      'Temperature': '29.1 °C',
      'Status': 'READY',
      'Health': '98.2%'
    },
    hotspotMappingId: 'power_reservoir'
  });

  const handleComponentSelect = (info: BuoyComponentInfo) => {
    setSelectedComponent(info);
    if (setSelectedHotspotId) {
      setSelectedHotspotId(info.hotspotMappingId);
    }
  };

  return (
    <div className="space-y-3.5 flex flex-col h-full select-none">
      
      {/* MAIN 3D OCEAN SCENE CARD */}
      <div className="tamas-card p-4 sm:p-5 flex flex-col flex-1 relative overflow-hidden">
        
        {/* Card Header (Matching Reference Image) */}
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-2">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-tamas-text uppercase">
              DEVICE OVERVIEW
            </h2>
            <p className="text-xs text-tamas-textMuted">
              7.0m Autonomous Spar-Buoy
            </p>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-tamas-cardLight border border-tamas-border text-xs text-tamas-textMuted hover:text-tamas-text transition-colors cursor-pointer">
            <Info className="w-3.5 h-3.5 text-tamas-info" />
            <span>Component Info</span>
          </div>
        </div>

        {/* 3D Model with Realistic Waterline Ocean Scene */}
        <div className="flex-1 w-full rounded-lg overflow-hidden relative">
          <MarineBuoy3D 
            onComponentSelect={handleComponentSelect}
            selectedComponentId={selectedComponent.id}
          />
        </div>

      </div>

      {/* SELECTED COMPONENT INFORMATION SECTION (Matching Reference Image) */}
      <div className="tamas-card p-4">
        
        {/* Header row */}
        <div className="flex items-center justify-between mb-3 border-b border-tamas-border/40 pb-2">
          <div className="flex items-center space-x-4">
            <span className="text-[11px] font-bold text-tamas-textMuted tracking-wider uppercase">
              SELECTED COMPONENT
            </span>
            <span className="text-sm font-bold text-tamas-text">
              {selectedComponent.name}
            </span>
          </div>

          {/* Orange target radio icon */}
          <div className="w-5 h-5 rounded-full border border-tamas-orange/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-tamas-orange" />
          </div>
        </div>

        {/* Metrics Row (Matching Reference Image) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center text-xs">
          
          {/* Battery Level / Progress Bar */}
          <div>
            <span className="text-[10px] text-tamas-textMuted block uppercase">
              Battery Level
            </span>
            <span className="text-base font-bold text-tamas-text block mt-0.5">
              82%
            </span>
            <div className="w-full h-1 bg-[#1A2834] rounded-full mt-1.5 overflow-hidden border border-tamas-border/40">
              <div className="h-full bg-tamas-operational rounded-full w-[82%]" />
            </div>
          </div>

          {/* Voltage */}
          <div>
            <span className="text-[10px] text-tamas-textMuted block uppercase">
              Voltage
            </span>
            <span className="text-base font-bold text-tamas-text block mt-0.5 font-mono">
              3.62 V
            </span>
          </div>

          {/* Temperature */}
          <div>
            <span className="text-[10px] text-tamas-textMuted block uppercase">
              Temperature
            </span>
            <span className="text-base font-bold text-tamas-text block mt-0.5 font-mono">
              29.1 °C
            </span>
          </div>

          {/* Status */}
          <div>
            <span className="text-[10px] text-tamas-textMuted block uppercase">
              Status
            </span>
            <span className="text-base font-bold text-tamas-operational block mt-0.5">
              READY
            </span>
          </div>

          {/* Health */}
          <div>
            <span className="text-[10px] text-tamas-textMuted block uppercase">
              Health
            </span>
            <span className="text-base font-bold text-tamas-text block mt-0.5 font-mono">
              98.2%
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
