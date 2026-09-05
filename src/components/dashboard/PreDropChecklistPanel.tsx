import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { CheckSquare, Shield, Lock, Unlock, CheckCircle2 } from 'lucide-react';

export const PreDropChecklistPanel: React.FC = () => {
  const {
    dropSafetyCoverOpen,
    dropAuthorized,
    dropTimestamp,
    toggleSafetyCover,
    authorizeDrop
  } = useMissionStore();

  const checklist = [
    { label: 'Core Avionics', status: 'OK' },
    { label: 'Sensor Suite', status: 'OK' },
    { label: 'Power Reservoir', status: 'OK' },
    { label: 'Telemetry Connection', status: 'OK' },
  ];

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-2">
        <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
          PRE-DROP CHECKLIST
        </h2>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full tamas-tag-green font-semibold font-mono">
          4/4 PASSED
        </span>
      </div>

      {/* Main Content: 2-Column split between Checklist and Authorize Drop button */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
        
        {/* Left Column: 4 Checklist Rows (7 cols) */}
        <div className="sm:col-span-7 space-y-1.5 text-xs">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-1.5 px-2.5 rounded bg-[#1A2733] border border-tamas-border/40"
            >
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-3.5 h-3.5 text-tamas-operational" />
                <span className="text-tamas-text font-medium">{item.label}</span>
              </div>
              <span className="text-tamas-operational font-bold font-mono text-[11px]">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Authorize Drop Card & Button (5 cols) */}
        <div className="sm:col-span-5 flex flex-col justify-center space-y-2 border-l border-tamas-border/40 pl-0 sm:pl-4">
          
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-tamas-info" />
            <div>
              <span className="text-xs font-bold text-tamas-text block">
                AUTHORIZE DROP
              </span>
              <p className="text-[10px] text-tamas-textMuted">
                All systems ready for deployment.
              </p>
            </div>
          </div>

          {/* Prominent Marine Orange Button (#E87522) */}
          <button
            onClick={() => {
              if (!dropSafetyCoverOpen && !dropAuthorized) {
                toggleSafetyCover();
              }
              authorizeDrop();
            }}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 uppercase tracking-wider transition-all shadow-sm ${
              dropAuthorized
                ? 'bg-tamas-operational text-white cursor-default'
                : 'bg-tamas-orange hover:bg-orange-600 text-white cursor-pointer active:scale-95'
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
              Sealed: {dropTimestamp?.split('T')[1].slice(0, 8)} UTC
            </span>
          )}

        </div>

      </div>

    </div>
  );
};
