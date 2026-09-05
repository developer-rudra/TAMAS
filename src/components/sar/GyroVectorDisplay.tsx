import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { Compass, RotateCw, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';

export const GyroVectorDisplay: React.FC = () => {
  const { currentPacket } = useMissionStore();
  const { pitch, roll, yaw, heaveAcceleration, angularVelocity, tiltAngle, isDistressTilt } = currentPacket.gyro;

  // Artificial horizon roll angle rotation
  const rollClamped = Math.max(-45, Math.min(45, roll));
  const pitchOffset = Math.max(-50, Math.min(50, pitch * 2));

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center space-x-2">
          <RotateCw className="w-4 h-4 text-cyber-cyan" />
          <span className="text-xs font-bold text-slate-200 tracking-wider">
            6-DoF INERTIAL ATTITUDE &amp; GYRO VECTOR
          </span>
        </div>
        <span className={`text-[11px] px-2 py-0.5 rounded font-bold border ${
          isDistressTilt 
            ? 'bg-red-500/20 text-red-300 border-red-500 animate-pulse' 
            : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
        }`}>
          {isDistressTilt ? 'CRITICAL TILT (>60°)' : 'STABLE HORIZON'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Synthetic Horizon PFD Instrument */}
        <div className="relative w-full aspect-square max-h-[220px] mx-auto rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-950 flex items-center justify-center">
          
          {/* Pitch / Roll Horizon Sky/Ground Plane */}
          <div 
            className="absolute inset-[-50%] transition-transform duration-100 ease-out"
            style={{
              transform: `rotate(${-rollClamped}deg) translateY(${pitchOffset}px)`
            }}
          >
            {/* Sky (Navy Blue) */}
            <div className="h-1/2 bg-gradient-to-b from-[#0b2545] to-[#134074] border-b border-cyan-400/80" />
            {/* Sea/Ground (Deep Oceanic Slate) */}
            <div className="h-1/2 bg-gradient-to-b from-[#141e2e] to-[#070a0f]" />
          </div>

          {/* Pitch Ladder Marks */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center space-y-4 text-[10px] text-cyan-300/60 font-mono">
            <div className="w-16 border-t border-cyan-400/40 text-center">- 20°</div>
            <div className="w-10 border-t border-cyan-400/40 text-center">- 10°</div>
            <div className="w-24 border-t-2 border-cyan-400 text-center text-cyan-200 font-bold">0° HORIZON</div>
            <div className="w-10 border-t border-cyan-400/40 text-center">+ 10°</div>
            <div className="w-16 border-t border-cyan-400/40 text-center">+ 20°</div>
          </div>

          {/* Fixed Aircraft/Spar Crosshair Reticle */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-amber-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            </div>
            <div className="absolute w-24 h-0.5 bg-amber-400/80" />
          </div>

          {/* Roll Pointer at top */}
          <div className="absolute top-2 inset-x-0 flex justify-center pointer-events-none">
            <div className="w-0 h-0 border-x-4 border-x-transparent border-b-6 border-b-amber-400" />
          </div>

          {/* Critical 60° Limit Ring indicator */}
          <div className={`absolute inset-3 rounded-full border-2 border-dashed pointer-events-none ${
            isDistressTilt ? 'border-red-500 animate-pulse' : 'border-red-500/30'
          }`} />
        </div>

        {/* Readout Metrics */}
        <div className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800">
              <div className="text-[10px] text-slate-400">PITCH ANGLE</div>
              <div className="text-base font-bold text-cyan-300 mt-0.5">{pitch}°</div>
            </div>
            <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800">
              <div className="text-[10px] text-slate-400">ROLL ANGLE</div>
              <div className="text-base font-bold text-cyan-300 mt-0.5">{roll}°</div>
            </div>
          </div>

          <div className={`p-3 rounded-lg border transition-all ${
            isDistressTilt 
              ? 'bg-red-950/40 border-red-500/60 shadow-crimson-glow' 
              : 'bg-slate-950/80 border-slate-800'
          }`}>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">COMBINED VECTOR TILT:</span>
              <span className={`text-lg font-bold ${isDistressTilt ? 'text-red-300 animate-pulse' : 'text-slate-200'}`}>
                {tiltAngle}°
              </span>
            </div>
            {/* Progress bar towards 60° cutoff */}
            <div className="w-full h-2 bg-slate-900 rounded-full mt-2 overflow-hidden border border-slate-800">
              <div 
                className={`h-full transition-all duration-300 ${
                  isDistressTilt ? 'bg-red-500' : tiltAngle > 45 ? 'bg-amber-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${Math.min(100, (tiltAngle / 60) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>0° (Vertical)</span>
              <span className="text-red-400 font-bold">60° SAS&amp;R CUTOFF</span>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs space-y-1 text-slate-400">
            <div className="flex justify-between">
              <span>Heave Accel:</span>
              <span className="text-slate-200 font-semibold">{heaveAcceleration} m/s²</span>
            </div>
            <div className="flex justify-between">
              <span>Angular Velocity:</span>
              <span className="text-slate-200 font-semibold">{angularVelocity} deg/s</span>
            </div>
            <div className="flex justify-between">
              <span>Spar Compass Heading:</span>
              <span className="text-cyan-300 font-semibold">{yaw}°</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
