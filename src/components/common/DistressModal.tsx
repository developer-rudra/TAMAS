import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  AlertOctagon, 
  X, 
  Radio, 
  MapPin, 
  RotateCw, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const DistressModal: React.FC = () => {
  const { 
    emergencyModalOpen, 
    dismissDistressModal, 
    disarmDistressAnomaly, 
    currentPacket,
    packetHistory 
  } = useMissionStore();

  if (!emergencyModalOpen) return null;

  const tilt = currentPacket.gyro.tiltAngle;
  const lastFix = currentPacket.distress.lastValidFix || currentPacket.navic;

  // Last 6 telemetry frames before override
  const recentFrames = packetHistory.slice(-6).reverse();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-void-950 border-2 border-red-600 rounded-xl shadow-crimson-glow overflow-hidden font-mono">
        
        {/* Top Header */}
        <div className="bg-red-950/90 border-b border-red-600/60 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-600/30 border border-red-500 animate-pulse">
              <AlertOctagon className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-red-100 tracking-wider">
                AUTONOMOUS SAS&amp;R EMERGENCY TAKEOVER ACTIVE
              </h2>
              <p className="text-xs text-red-300">
                INMCC (Indian National Mission Control Centre) COSPAS-SARSAT BEACON TRIGGERED
              </p>
            </div>
          </div>
          <button
            onClick={dismissDistressModal}
            className="p-1.5 rounded-lg bg-red-900/40 text-red-300 hover:text-white hover:bg-red-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Status Alert Banner */}
          <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/50 flex items-start space-x-3">
            <Radio className="w-5 h-5 text-red-400 mt-0.5 animate-pulse" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-red-200">
                CRITICAL THRESHOLD VIOLATION: STRUCTURAL TILT EXCEEDED 60° OFF VERTICAL AXIS
              </p>
              <p className="text-red-300/80">
                T.A.M.A.S. THEJAS32 RISC-V SoC automated override has tripped the 406.05 MHz UHF distress beacon. Emergency packet burst transmitting at 5W ERP with NavIC geolocational coordinates.
              </p>
            </div>
          </div>

          {/* Grid: 6-DoF Tilt Breakdown & Last Valid Fix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 6-DoF Vector Monitor */}
            <div className="p-4 rounded-lg bg-slate-900/60 border border-red-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs text-slate-400 font-medium flex items-center space-x-1.5">
                  <RotateCw className="w-3.5 h-3.5 text-red-400" />
                  <span>6-DoF GYRO TILT STATUS</span>
                </span>
                <span className="text-xs text-red-400 font-bold">CRITICAL CUTOFF: &gt;60°</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">PITCH</div>
                  <div className="text-base font-bold text-red-300">{currentPacket.gyro.pitch}°</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">ROLL</div>
                  <div className="text-base font-bold text-red-300">{currentPacket.gyro.roll}°</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950/80 border border-red-500/40 bg-red-950/30">
                  <div className="text-[10px] text-red-400 font-semibold">TOTAL TILT</div>
                  <div className="text-lg font-bold text-red-200">{tilt}°</div>
                </div>
              </div>

              <div className="text-xs space-y-1 text-slate-400 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Angular Velocity:</span>
                  <span className="text-slate-200">{currentPacket.gyro.angularVelocity} deg/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Heave Acceleration:</span>
                  <span className="text-slate-200">{currentPacket.gyro.heaveAcceleration} m/s²</span>
                </div>
                <div className="flex justify-between">
                  <span>Sustained Duration:</span>
                  <span className="text-red-300 font-bold">{currentPacket.gyro.sustainedTiltSeconds} seconds</span>
                </div>
              </div>
            </div>

            {/* Last Valid NavIC Fix & INMCC Status */}
            <div className="p-4 rounded-lg bg-slate-900/60 border border-red-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs text-slate-400 font-medium flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LAST VALID NavIC GNSS FIX</span>
                </span>
                <span className="text-xs text-emerald-400 font-bold">LOCKED FIX</span>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Latitude:</span>
                  <span className="font-bold text-cyan-300">{Math.abs(lastFix.latitude)}° S</span>
                </div>
                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Longitude:</span>
                  <span className="font-bold text-cyan-300">{Math.abs(lastFix.longitude)}° E</span>
                </div>
                <div className="flex justify-between text-slate-400 px-1">
                  <span>Satellites Tracked:</span>
                  <span className="text-slate-200">{lastFix.satellitesTracked} (NavIC Constellation)</span>
                </div>
                <div className="flex justify-between text-slate-400 px-1">
                  <span>INMCC Beacon Channel:</span>
                  <span className="text-red-300 font-semibold">406.05 MHz Channel B</span>
                </div>
              </div>
            </div>

          </div>

          {/* Live Forensic Telemetry Black-Box Log */}
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>FORENSIC TELEMETRY TIMELINE (PRE-OVERRIDE BUFFER)</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">100Hz RING BUFFER CAPTURE</span>
            </div>

            <div className="space-y-1.5 overflow-x-auto">
              <table className="w-full text-[11px] text-left">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-800">
                    <th className="pb-1.5">TIME</th>
                    <th className="pb-1.5">PITCH</th>
                    <th className="pb-1.5">ROLL</th>
                    <th className="pb-1.5">TOTAL TILT</th>
                    <th className="pb-1.5">PRESSURE</th>
                    <th className="pb-1.5">BATTERY</th>
                    <th className="pb-1.5">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {recentFrames.map((frame, idx) => (
                    <tr key={idx} className={frame.gyro.isDistressTilt ? 'text-red-300 bg-red-950/20' : ''}>
                      <td className="py-1 font-mono text-slate-400">{frame.timestamp.split('T')[1].slice(0, 8)}</td>
                      <td className="py-1">{frame.gyro.pitch}°</td>
                      <td className="py-1">{frame.gyro.roll}°</td>
                      <td className={`py-1 font-bold ${frame.gyro.isDistressTilt ? 'text-red-400' : 'text-slate-200'}`}>
                        {frame.gyro.tiltAngle}°
                      </td>
                      <td className="py-1">{frame.sensors.barometricPressureHpa} hPa</td>
                      <td className="py-1">{frame.power.lisocl2CellVoltage}V</td>
                      <td className="py-1">
                        {frame.gyro.isDistressTilt ? (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-600/30 text-red-300 border border-red-500/40 font-bold">
                            OVERRIDE
                          </span>
                        ) : (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600/20 text-emerald-300">
                            NOMINAL
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            SAR Recovery Frequency: <span className="text-slate-300">121.5 MHz VHF Homing + 406.05 MHz INMCC</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={disarmDistressAnomaly}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide border border-slate-700 transition-colors"
            >
              DISARM TEST ANOMALY (RESET NOMINAL)
            </button>
            <button
              onClick={dismissDistressModal}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide shadow-lg transition-colors"
            >
              ACKNOWLEDGE &amp; MONITOR
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
