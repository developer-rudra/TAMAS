import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { SubsystemStatus } from '../../types/telemetry';
import { 
  Cpu, 
  Radio, 
  BatteryCharging, 
  Wifi, 
  Share2, 
  Upload, 
  ChevronRight 
} from 'lucide-react';

export const SystemHealthPanel: React.FC = () => {
  const { 
    subsystems, 
    selectedHotspotId, 
    setSelectedHotspotId,
    currentPacket 
  } = useMissionStore();

  const isDistress = currentPacket.distress.sasrActive;

  const healthItems = [
    {
      id: 'core_avionics',
      title: 'Core Avionics',
      statusText: isDistress ? 'Distress Override' : 'Operational',
      icon: <Cpu className="w-4 h-4 text-tamas-info" />,
      isOk: !isDistress,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    },
    {
      id: 'sensor_suite',
      title: 'Sensor Array',
      statusText: 'All Sensors Connected',
      icon: (
        <svg className="w-4 h-4 text-tamas-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 0 0-10 10c0 4.4 2.9 8.2 7 9.5M12 6a6 6 0 0 0-6 6c0 2.6 1.7 4.9 4.2 5.7M12 10a2 2 0 0 0-2 2" />
          <path d="M12 2a10 10 0 0 1 10 10c0 4.4-2.9 8.2-7 9.5M12 6a6 6 0 0 1 6 6c0 2.6-1.7 4.9-4.2 5.7M12 10a2 2 0 0 1 2 2" />
        </svg>
      ),
      isOk: true,
      hotspotId: 'sensor_suite' as SubsystemStatus['id']
    },
    {
      id: 'power_reservoir',
      title: 'Power System',
      statusText: '82% Available',
      icon: <BatteryCharging className="w-4 h-4 text-tamas-info" />,
      isOk: true,
      hotspotId: 'power_reservoir' as SubsystemStatus['id']
    },
    {
      id: 'telemetry',
      title: 'Telemetry',
      statusText: 'Connected',
      icon: <Wifi className="w-4 h-4 text-tamas-info" />,
      isOk: true,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    },
    {
      id: 'pte_suspension',
      title: 'PTE Suspension & Hub',
      statusText: 'Stable',
      icon: <Share2 className="w-4 h-4 text-tamas-info" />,
      isOk: true,
      hotspotId: 'pte_suspension' as SubsystemStatus['id']
    },
    {
      id: 'uplink',
      title: 'Telemetry Uplink',
      statusText: 'Data Flowing',
      icon: <Upload className="w-4 h-4 text-tamas-info" />,
      isOk: true,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    }
  ];

  return (
    <div className="space-y-3.5 flex flex-col h-full select-none">
      
      {/* TOP CARD: SYSTEM HEALTH (Matching Reference Image) */}
      <div className="tamas-card p-4 sm:p-5 flex-1 space-y-3">
        
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3">
          <h2 className="text-sm font-bold tracking-wider text-tamas-text uppercase">
            SYSTEM HEALTH
          </h2>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full tamas-tag-green font-semibold">
            ALL SYSTEMS NOMINAL
          </span>
        </div>

        {/* 6 Subsystem Rows */}
        <div className="space-y-1.5">
          {healthItems.map((item) => {
            const isSelected = selectedHotspotId === item.hotspotId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedHotspotId(item.hotspotId)}
                className={`w-full p-2.5 rounded-lg flex items-center justify-between text-left transition-all border ${
                  isSelected
                    ? 'bg-[#263847] border-tamas-info/50 shadow-sm'
                    : 'bg-[#1A2733] border-transparent hover:border-tamas-border/60 hover:bg-[#202E3C]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#202F3B] border border-tamas-border/60 text-tamas-info">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-tamas-text block">
                      {item.title}
                    </span>
                    <span className={`text-[11px] font-medium block ${item.isOk ? 'text-tamas-operational' : 'text-tamas-critical'}`}>
                      {item.statusText}
                    </span>
                  </div>
                </div>

                {/* Status Dot */}
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${item.isOk ? 'bg-tamas-operational' : 'bg-tamas-critical animate-pulse'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* View All Systems Button */}
        <button className="w-full py-2 rounded-lg bg-[#1A2733] hover:bg-[#243442] border border-tamas-border/50 text-xs font-semibold text-tamas-text transition-colors text-center mt-2 block">
          View All Systems
        </button>

      </div>

      {/* BOTTOM CARD: SYSTEM SUMMARY (Matching Reference Image) */}
      <div className="tamas-card p-4 space-y-2.5">
        <h3 className="text-xs font-bold text-tamas-text uppercase tracking-wider border-b border-tamas-border/60 pb-2">
          SYSTEM SUMMARY
        </h3>

        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between items-center text-tamas-textMuted">
            <span className="font-sans text-[11px]">Operational Uptime</span>
            <span className="font-bold text-tamas-text">34d 16h 22m</span>
          </div>

          <div className="flex justify-between items-center text-tamas-textMuted">
            <span className="font-sans text-[11px]">Primary Battery</span>
            <span className="font-bold text-tamas-text">3.63 V</span>
          </div>

          <div className="flex justify-between items-center text-tamas-textMuted">
            <span className="font-sans text-[11px]">Hull Seal</span>
            <span className="font-bold text-tamas-operational">Hermetic PASS</span>
          </div>

          <div className="flex justify-between items-center text-tamas-textMuted">
            <span className="font-sans text-[11px]">System Integrity</span>
            <span className="font-bold text-tamas-text">98.2%</span>
          </div>

          <div className="flex justify-between items-center text-tamas-textMuted pt-1 border-t border-tamas-border/30">
            <span className="font-sans text-[11px] text-tamas-warning">Active Alerts</span>
            <span className="font-bold text-tamas-warning">1</span>
          </div>
        </div>
      </div>

    </div>
  );
};
