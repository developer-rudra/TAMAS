import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { AlertOctagon, Radio, ArrowRight } from 'lucide-react';

export const DistressBanner: React.FC = () => {
  const { currentPacket, openDistressModal } = useMissionStore();

  if (!currentPacket.distress.sasrActive && !currentPacket.gyro.isDistressTilt) {
    return null;
  }

  return (
    <div className="bg-red-950/90 border-b border-red-500/60 shadow-crimson-glow text-red-100 px-4 py-2.5 transition-all">
      <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 animate-ping" />
          <div className="flex items-center space-x-2">
            <AlertOctagon className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="font-bold text-sm tracking-wider text-red-200 uppercase">
              CRITICAL DISTRESS: SAS&R 406.05 MHz ACTIVE — BEACON BROADCASTING TO INMCC
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs text-red-300">
          <div>
            <span className="text-red-400/80">OVERRIDE TILT: </span>
            <span className="font-bold text-red-100">{currentPacket.gyro.tiltAngle}°</span>
            <span className="text-red-400/80"> (LIMIT &gt;60°)</span>
          </div>
          <div className="hidden md:block">
            <span className="text-red-400/80">SUSTAINED: </span>
            <span className="font-bold text-red-100">{currentPacket.gyro.sustainedTiltSeconds}s</span>
          </div>
          <div className="hidden lg:block">
            <span className="text-red-400/80">COSPAS-SARSAT STATUS: </span>
            <span className="font-bold text-emerald-400">INMCC BANGALORE NOTIFIED</span>
          </div>
        </div>

        <button
          onClick={openDistressModal}
          className="flex items-center space-x-1.5 px-3 py-1 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wider transition-colors shadow-lg"
        >
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>OPEN SAS&R FORENSICS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
