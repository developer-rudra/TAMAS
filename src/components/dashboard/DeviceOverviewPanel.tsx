import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { MarineBuoy3D } from './MarineBuoy3D';
import { Radio, Navigation, Compass } from 'lucide-react';

export const DeviceOverviewPanel: React.FC = () => {
  const { currentPacket } = useMissionStore();

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col h-full select-none relative overflow-hidden">
      
      {/* Top Header: Device Name, Status, and Satellite Coordinates */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-tamas-border/60 pb-3 mb-2">
        <div>
          <div className="flex items-center space-x-2.5">
            <h2 className="text-sm font-extrabold tracking-wider text-tamas-text uppercase font-sans">
              DEVICE OVERVIEW
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-tamas-cyan/15 text-tamas-cyan border border-tamas-cyan/30 font-semibold">
              T.A.M.A.S. SPAR-04
            </span>
          </div>
          <p className="text-xs text-tamas-textMuted mt-0.5">
            7.0m Polar Autonomous Hydrographic Sensing Platform
          </p>
        </div>

        {/* Live Status Pill & Coordinates */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle text-[11px] font-mono text-tamas-text">
            <Navigation className="w-3 h-3 text-tamas-cyan transform -rotate-45" />
            <span className="text-tamas-textMuted">LAT/LON:</span>
            <span className="font-bold text-tamas-cyan">
              {currentPacket.navic.latitude.toFixed(4)}° S, {Math.abs(currentPacket.navic.longitude).toFixed(4)}° W
            </span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full tamas-tag-green text-xs font-mono font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational animate-pulse" />
            <span>SURFACE DRIFT • 1.4 KTS • 042°</span>
          </div>
        </div>
      </div>

      {/* 3D Model with Realistic Waterline Ocean Scene, Floating Controls, and Compass */}
      <div className="flex-1 w-full rounded-2xl overflow-hidden relative border border-tamas-borderSubtle bg-gradient-to-b from-[#091824] to-[#040D14]">
        <MarineBuoy3D />
      </div>

    </div>
  );
};
