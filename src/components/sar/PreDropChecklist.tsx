import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { SubsystemStatus } from '../../types/telemetry';
import { 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  BatteryCharging, 
  Activity, 
  Gauge, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  Radio
} from 'lucide-react';

export const PreDropChecklist: React.FC = () => {
  const {
    subsystems,
    selectedHotspotId,
    setSelectedHotspotId,
    dropSafetyCoverOpen,
    dropAuthorized,
    dropTimestamp,
    toggleSafetyCover,
    authorizeDrop,
    currentPacket
  } = useMissionStore();

  const getSubsystemIcon = (id: SubsystemStatus['id']) => {
    switch (id) {
      case 'core_avionics':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'power_reservoir':
        return <BatteryCharging className="w-4 h-4 text-amber-400" />;
      case 'pte_suspension':
        return <Gauge className="w-4 h-4 text-emerald-400" />;
      case 'sensor_suite':
        return <Activity className="w-4 h-4 text-sky-400" />;
    }
  };

  const selectedSubsystem = subsystems.find(s => s.id === selectedHotspotId) || subsystems[0];

  return (
    <div className="space-y-4 font-mono">
      
      {/* Top Banner: Diagnostics & RF Readiness Score */}
      <div className="p-4 rounded-xl hud-glass border border-cyan-500/25">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-slate-200 tracking-wider">
              PRE-DROP DIAGNOSTIC SUITE &amp; HEALTH MATRIX
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
              ALL SYSTEMS PASS (4/4)
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              LINK MARGIN +14.6 dB
            </span>
          </div>
        </div>

        {/* 4 Interactive Subsystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {subsystems.map((sub) => {
            const isSelected = selectedHotspotId === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedHotspotId(sub.id)}
                className={`p-3 rounded-lg text-left transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-cyan-glow'
                    : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-2">
                    {getSubsystemIcon(sub.id)}
                    <span className="text-xs font-semibold text-slate-200">{sub.name}</span>
                  </div>
                  <span className="flex items-center space-x-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/40 font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{sub.state}</span>
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">{sub.details}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Subsystem Detail Inspector */}
      {selectedSubsystem && (
        <div className="p-4 rounded-xl hud-glass border border-cyan-500/20 bg-void-900/60">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-cyan-400 font-bold tracking-wider uppercase">INSPECTION DRAWER:</span>
              <span className="text-slate-200">{selectedSubsystem.name}</span>
            </div>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              {selectedSubsystem.category}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {Object.entries(selectedSubsystem.metrics).map(([key, val]) => (
              <div key={key} className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80">
                <div className="text-[10px] text-slate-400 truncate">{key}</div>
                <div className="text-xs font-bold text-cyan-300 mt-0.5">{val}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* "Authorize Drop" Tactile Lock-Toggle Switch */}
      <div className={`p-4 rounded-xl border transition-all ${
        dropAuthorized 
          ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(0,255,157,0.2)]'
          : 'bg-void-900/80 border-slate-800'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-slate-200 tracking-wider">
                TACTICAL DROP AUTHORIZATION LOCK
              </span>
              {dropAuthorized ? (
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold animate-pulse">
                  ARMED &amp; AUTHORIZED
                </span>
              ) : (
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  INTERLOCK SECURED
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              {dropAuthorized 
                ? `Authorized for deployment at ${dropTimestamp?.split('T')[1].slice(0, 8)} UTC. Pneumatic crane latch ready.`
                : 'Flip open safety cover and toggle latch to authorize crane winch launch into Southern Ocean.'}
            </p>
          </div>

          {/* Mechanical Safety Latch Controls */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            
            {/* Safety Cover Switch */}
            {!dropAuthorized && (
              <button
                onClick={toggleSafetyCover}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-all ${
                  dropSafetyCoverOpen
                    ? 'bg-amber-950/60 border-amber-500/60 text-amber-300 shadow-amber-glow'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {dropSafetyCoverOpen ? <Unlock className="w-4 h-4 text-amber-400" /> : <Lock className="w-4 h-4" />}
                <span>{dropSafetyCoverOpen ? 'COVER OPEN' : 'FLIP SAFETY COVER'}</span>
              </button>
            )}

            {/* Authorize Drop Arming Button */}
            <button
              onClick={authorizeDrop}
              disabled={!dropSafetyCoverOpen || dropAuthorized}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase border transition-all ${
                dropAuthorized
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200 cursor-default'
                  : dropSafetyCoverOpen
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-cyan-300 shadow-cyan-glow cursor-pointer active:scale-95'
                    : 'bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            >
              {dropAuthorized ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AUTHORIZATION SEALED</span>
                </>
              ) : (
                <>
                  <Radio className="w-4 h-4" />
                  <span>AUTHORIZE DROP</span>
                </>
              )}
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};
