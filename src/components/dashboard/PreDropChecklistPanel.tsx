import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { CheckSquare, Shield, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';

export const PreDropChecklistPanel: React.FC = () => {
  const {
    dropSafetyCoverOpen,
    dropAuthorized,
    dropTimestamp,
    toggleSafetyCover,
    authorizeDrop
  } = useMissionStore();

  const checklist = [
    { label: 'Power System Check', status: 'PASSED', desc: '3.62V Bus Nominal • HLC Armed' },
    { label: 'Navigation Systems', status: 'PASSED', desc: 'NavIC / GPS Dual Lock • 14 SVs' },
    { label: 'Communication Link', status: 'PASSED', desc: '406.05 MHz & SBD Carrier OK' },
    { label: 'Sensor Calibration', status: 'PASSED', desc: '6/6 Oceanographic Transducers' },
  ];

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-operational shadow-sm shadow-emerald-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            PRE-DROP CHECKLIST
          </h2>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full tamas-tag-green font-bold font-mono tracking-wider">
          4/4 PASSED
        </span>
      </div>

      {/* Main Content: 2-Column split between Checklist and Authorize Drop button */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
        
        {/* Left Column: 4 Checklist Rows (7 cols) */}
        <div className="sm:col-span-7 space-y-2 text-xs">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 px-3 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle hover:border-tamas-borderLight transition-all"
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <CheckSquare className="w-4 h-4 text-tamas-operational flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-tamas-text font-semibold block text-xs truncate">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-tamas-textMuted block truncate">
                    {item.desc}
                  </span>
                </div>
              </div>
              
              <span className="text-tamas-operational font-bold font-mono text-[11px] px-2 py-0.5 rounded-md bg-tamas-operational/10 border border-tamas-operational/20 flex-shrink-0 ml-2">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Authorize Drop Card & Button (5 cols) */}
        <div className="sm:col-span-5 flex flex-col justify-center space-y-2.5 border-l border-tamas-border/60 pl-0 sm:pl-4">
          
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-tamas-cardInner border border-tamas-border/70 text-tamas-cyan">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-tamas-text block">
                MISSION DEPLOYMENT
              </span>
              <p className="text-[10px] text-tamas-textMuted">
                All pre-flight checks verified. Ready for ocean release.
              </p>
            </div>
          </div>

          {/* Prominent Marine Orange Button (#F97316) */}
          <button
            onClick={() => {
              if (!dropSafetyCoverOpen && !dropAuthorized) {
                toggleSafetyCover();
              }
              authorizeDrop();
            }}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 uppercase tracking-wider transition-all shadow-md ${
              dropAuthorized
                ? 'bg-tamas-operational text-white cursor-default shadow-emerald-950/40'
                : 'bg-tamas-orange hover:bg-orange-600 text-white cursor-pointer active:scale-95 shadow-orange-950/40'
            }`}
          >
            {dropAuthorized ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>DROP AUTHORIZED</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>AUTHORIZE DROP</span>
              </>
            )}
          </button>

          {dropAuthorized && (
            <span className="text-[10px] text-tamas-operational text-center font-mono block">
              Sealed: {dropTimestamp?.split('T')[1]?.slice(0, 8) || '22:54:31'} UTC
            </span>
          )}

        </div>

      </div>

    </div>
  );
};
