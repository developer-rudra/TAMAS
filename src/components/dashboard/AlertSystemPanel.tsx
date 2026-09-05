import React, { useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  AlertTriangle, 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  Radio, 
  CheckCircle2, 
  Clock, 
  FileText,
  RotateCcw,
  AlertOctagon
} from 'lucide-react';

export const AlertSystemPanel: React.FC = () => {
  const {
    currentPacket,
    dropSafetyCoverOpen,
    dropAuthorized,
    dropTimestamp,
    toggleSafetyCover,
    authorizeDrop,
    disarmDistressAnomaly,
    openDistressModal,
    triggerIcebergAnomaly
  } = useMissionStore();

  const isDistress = currentPacket.distress.sasrActive;
  const isWarning = currentPacket.gyro.tiltAngle > 40 && !isDistress;

  return (
    <div className="space-y-6 font-sans">
      
      {/* SECTION 1: SYSTEM ANOMALY / ALERT MANAGER */}
      <div className="ocean-card rounded-xl p-5 space-y-4">
        
        <div className="flex items-center justify-between border-b border-ocean-700/80 pb-3">
          <div className="flex items-center space-x-2.5">
            <AlertTriangle className={`w-5 h-5 ${isDistress ? 'text-marine-red' : isWarning ? 'text-marine-amber' : 'text-marine-teal'}`} />
            <div>
              <h2 className="text-sm font-bold tracking-wider text-slate-100 uppercase">
                ACTIVE ALERTS &amp; ANOMALY MANAGER
              </h2>
              <p className="text-xs text-slate-400">
                Continuous automated threshold analysis and safety telemetry
              </p>
            </div>
          </div>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold border ${
            isDistress 
              ? 'bg-marine-red/15 text-marine-red border-marine-red/30'
              : isWarning
                ? 'bg-marine-amber/15 text-marine-amber border-marine-amber/30'
                : 'bg-marine-emerald/15 text-marine-emerald border-marine-emerald/30'
          }`}>
            {isDistress ? '1 CRITICAL' : isWarning ? '1 WARNING' : '0 ACTIVE ALERTS'}
          </span>
        </div>

        {/* Alert Cards */}
        {isDistress ? (
          <div className="p-4 rounded-xl bg-marine-red/10 border border-marine-red/40 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <AlertOctagon className="w-5 h-5 text-marine-red" />
                <span className="font-bold text-sm text-slate-100">
                  CRITICAL STRUCTURAL OVERRIDE: TILT &gt; 60° (ICE SUBDUCTION)
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-marine-red text-white font-bold font-mono">
                SEVERITY: CRITICAL
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Structural tilt exceeded the vertical limit for sustained duration ({currentPacket.gyro.sustainedTiltSeconds}s). Autonomous SAS&amp;R 406.05 MHz emergency beacon transmitting to INMCC Bangalore.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-marine-red/20 text-xs">
              <span className="text-slate-400 flex items-center space-x-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>Detected: Just now</span>
              </span>

              <div className="flex items-center space-x-2">
                <button
                  onClick={openDistressModal}
                  className="px-3 py-1.5 rounded-lg bg-marine-red hover:bg-red-600 text-white font-semibold transition-colors shadow-sm"
                >
                  VIEW FORENSIC DETAILS
                </button>
                <button
                  onClick={disarmDistressAnomaly}
                  className="px-3 py-1.5 rounded-lg bg-ocean-800 hover:bg-ocean-700 text-slate-200 border border-ocean-600 transition-colors"
                >
                  RESET SYSTEM
                </button>
              </div>
            </div>
          </div>
        ) : isWarning ? (
          <div className="p-4 rounded-xl bg-marine-amber/10 border border-marine-amber/40 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-marine-amber" />
                <span className="font-bold text-sm text-slate-100">
                  SWELL INDUCED TILT WARNING: PITCH/ROLL &gt; 40°
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-marine-amber text-slate-950 font-bold font-mono">
                SEVERITY: MEDIUM
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Wave surge from Antarctic swell has pushed buoy attitude to {currentPacket.gyro.tiltAngle}°. Structural damping active. Approaching 60° critical override margin.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-marine-amber/20 text-xs">
              <span className="text-slate-400 font-mono">Active monitoring in progress</span>
              <button
                onClick={() => triggerIcebergAnomaly(false)}
                className="px-3 py-1.5 rounded-lg bg-ocean-800 hover:bg-ocean-700 text-slate-200 border border-ocean-600 transition-colors"
              >
                STABILIZE
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-ocean-900/60 border border-ocean-700/60 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-marine-emerald mx-auto" />
            <p className="text-sm font-semibold text-slate-200">
              No Active Anomalies Detected
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              All sensors, power reservoirs, PTE bellows, and communication uplinks are operating within nominal Antarctic parameters.
            </p>
          </div>
        )}

      </div>

      {/* SECTION 2: MAIN ACTION — PRE-DROP CHECKLIST & DROP AUTHORIZATION */}
      <div className={`ocean-card rounded-xl p-5 border transition-all ${
        dropAuthorized ? 'border-marine-emerald/60 bg-marine-emerald/5' : ''
      }`}>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-ocean-700/80 pb-3 mb-4">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-marine-teal" />
            <div>
              <h2 className="text-sm font-bold tracking-wider text-slate-100 uppercase">
                PRE-DROP CHECKLIST &amp; CRANE DEPLOYMENT INTERLOCK
              </h2>
              <p className="text-xs text-slate-400">
                Hardware interlock authorization for shipboard crane deployment
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs px-3 py-1 rounded-full bg-marine-emerald/15 text-marine-emerald border border-marine-emerald/30 font-bold font-mono">
              4/4 SYSTEM CHECKS PASSED
            </span>
          </div>
        </div>

        {/* 4 Checklist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {[
            { label: 'Core Avionics', sub: 'THEJAS32 RISC-V SoC & CRC Valid' },
            { label: 'Sensor Suite', sub: 'Anemometer, MEMS, CTD Sonde Online' },
            { label: 'Power Reservoir', sub: 'LiSOCl2 3.64V & HLC Buffer Ready' },
            { label: 'Telemetry Connection', sub: 'INSAT DRT Link Margin +14.6 dB' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-ocean-900/70 border border-ocean-700/60 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-marine-emerald mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-200">{item.label}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-ocean-950/70 border border-ocean-700/80">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                DEPLOYMENT STATUS:
              </span>
              {dropAuthorized ? (
                <span className="text-xs px-2.5 py-0.5 rounded bg-marine-emerald/20 text-marine-emerald font-bold font-mono">
                  DROP AUTHORIZED ({dropTimestamp?.split('T')[1].slice(0, 8)} UTC)
                </span>
              ) : (
                <span className="text-xs px-2.5 py-0.5 rounded bg-ocean-800 text-slate-300 font-mono">
                  INTERLOCK SECURED
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {dropAuthorized
                ? 'Winch release interlock disengaged. Ready for ocean surface placement.'
                : 'Unlock safety cover to enable the tactile drop authorization control.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {!dropAuthorized && (
              <button
                onClick={toggleSafetyCover}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                  dropSafetyCoverOpen
                    ? 'bg-marine-amber/15 text-marine-amber border-marine-amber/40'
                    : 'bg-ocean-800 hover:bg-ocean-750 text-slate-300 border-ocean-700'
                }`}
              >
                {dropSafetyCoverOpen ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                <span>{dropSafetyCoverOpen ? 'COVER OPEN' : 'FLIP SAFETY COVER'}</span>
              </button>
            )}

            <button
              onClick={authorizeDrop}
              disabled={!dropSafetyCoverOpen || dropAuthorized}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                dropAuthorized
                  ? 'bg-marine-emerald/20 border-marine-emerald/40 text-marine-emerald cursor-default'
                  : dropSafetyCoverOpen
                    ? 'bg-marine-teal hover:bg-cyan-400 text-ocean-950 border-cyan-300 shadow-sm cursor-pointer active:scale-95'
                    : 'bg-ocean-800/60 border-ocean-700/60 text-slate-500 cursor-not-allowed'
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
          </div>
        </div>

      </div>

    </div>
  );
};
