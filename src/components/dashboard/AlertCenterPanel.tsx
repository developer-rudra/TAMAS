import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { AlertTriangle, MapPin, Activity, ShieldAlert } from 'lucide-react';

export const AlertCenterPanel: React.FC = () => {
  const { 
    openDistressModal, 
    triggerIcebergAnomaly, 
    navigateToMarineMap,
    currentPacket
  } = useMissionStore();

  const isDistress = currentPacket.distress.sasrActive;

  return (
    <div className="tamas-card p-4 sm:p-5 select-none flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-warning shadow-sm shadow-amber-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            ALERT CENTER
          </h2>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full tamas-tag-amber font-bold uppercase tracking-wider">
          1 ACTIVE ANOMALY
        </span>
      </div>

      {/* Main Anomaly Card */}
      <div className="p-3.5 rounded-xl bg-tamas-cardInner border border-tamas-warning/40 space-y-2.5 shadow-sm">
        
        {/* Anomaly Title & Icon */}
        <div className="flex items-start space-x-2.5">
          <div className="p-1.5 rounded-lg bg-tamas-warning/10 border border-tamas-warning/30 text-tamas-warning flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-tamas-warning block leading-tight">
              {isDistress ? 'Critical Tilt Emergency (>60° Overturn)' : 'Simulation Anomaly Detected'}
            </span>
            <p className="text-[11px] text-tamas-textMuted mt-1 leading-snug">
              {isDistress 
                ? 'Automatic 406.05 MHz distress beacon triggered to INMCC.' 
                : 'Critical signal inconsistency detected across polar uplink frame.'}
            </p>
          </div>
        </div>

        {/* Severity & Timestamp */}
        <div className="flex items-center justify-between text-[10px] font-mono text-tamas-textMuted border-t border-tamas-borderSubtle pt-2">
          <div className="flex items-center space-x-1.5">
            <span>SEVERITY:</span>
            <span className="font-bold text-tamas-warning uppercase tracking-wider">
              {isDistress ? 'CRITICAL / ALARM' : 'HIGH WARNING'}
            </span>
          </div>
          <span>2 MIN AGO</span>
        </div>

        {/* Action Buttons: View Details & Run Diagnostic */}
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <button
            onClick={openDistressModal}
            className="py-1.5 px-2 rounded-xl bg-tamas-cardLight hover:bg-[#1C415E] border border-tamas-border text-xs font-semibold text-tamas-text transition-colors text-center"
          >
            View Details
          </button>
          
          <button
            onClick={() => triggerIcebergAnomaly(false)}
            className="py-1.5 px-2 rounded-xl bg-tamas-orange hover:bg-orange-600 text-white text-xs font-bold tracking-wide transition-colors text-center shadow-sm"
          >
            Run Diagnostic
          </button>
        </div>

        {/* View Location on Map */}
        <button
          onClick={() => navigateToMarineMap('buoy')}
          className="w-full py-1.5 rounded-xl bg-[#071520] hover:bg-tamas-cardLight border border-tamas-borderSubtle hover:border-tamas-cyan/40 text-[10px] font-bold text-tamas-cyan flex items-center justify-center space-x-1.5 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-tamas-cyan" />
          <span>VIEW LOCATION ON MAP</span>
        </button>

      </div>

    </div>
  );
};
