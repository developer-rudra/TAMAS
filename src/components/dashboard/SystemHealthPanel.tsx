import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { SubsystemStatus } from '../../types/telemetry';
import { 
  Cpu, 
  BatteryCharging, 
  Wifi, 
  Share2, 
  UploadCloud, 
  Activity,
  Layers
} from 'lucide-react';

export const SystemHealthPanel: React.FC = () => {
  const { 
    selectedHotspotId, 
    setSelectedHotspotId,
    currentPacket 
  } = useMissionStore();

  const isDistress = currentPacket.distress.sasrActive;

  const healthItems = [
    {
      id: 'core_avionics',
      title: 'Core Avionics',
      state: isDistress ? 'Emergency Override' : 'Operational',
      subtext: 'ARM-Cortex M7 • Dual Redundant',
      icon: <Cpu className="w-4 h-4 text-tamas-cyan" />,
      isOk: !isDistress,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    },
    {
      id: 'sensor_suite',
      title: 'Sensor Array',
      state: 'All Sensors Connected',
      subtext: '6/6 Oceanographic Dies Active',
      icon: <Activity className="w-4 h-4 text-tamas-turquoise" />,
      isOk: true,
      hotspotId: 'sensor_suite' as SubsystemStatus['id']
    },
    {
      id: 'power_reservoir',
      title: 'Power System',
      state: `${Math.round(currentPacket.power.hlcChargePercentage)}% Available`,
      subtext: `${currentPacket.power.lisocl2CellVoltage}V Bus • HLC Buffered`,
      icon: <BatteryCharging className="w-4 h-4 text-tamas-cyan" />,
      isOk: true,
      hotspotId: 'power_reservoir' as SubsystemStatus['id']
    },
    {
      id: 'telemetry',
      title: 'Telemetry',
      state: 'Connected',
      subtext: 'INSAT-DRT Carrier Locked',
      icon: <Wifi className="w-4 h-4 text-tamas-turquoise" />,
      isOk: true,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    },
    {
      id: 'pte_suspension',
      title: 'PTE Suspension & Hub',
      state: 'Stable',
      subtext: `${currentPacket.pte.pdmsFluidPressureBar} Bar • Bellows Zero-Void`,
      icon: <Share2 className="w-4 h-4 text-tamas-cyan" />,
      isOk: true,
      hotspotId: 'pte_suspension' as SubsystemStatus['id']
    },
    {
      id: 'uplink',
      title: 'Telemetry Uplink',
      state: 'Data Flowing',
      subtext: '4.8 kbps Burst Mode SBD',
      icon: <UploadCloud className="w-4 h-4 text-tamas-turquoise" />,
      isOk: true,
      hotspotId: 'core_avionics' as SubsystemStatus['id']
    }
  ];

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between select-none">
      
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-cyan shadow-sm shadow-cyan-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            SYSTEM HEALTH
          </h2>
        </div>
        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono ${
          isDistress ? 'tamas-tag-red animate-pulse' : 'tamas-tag-green'
        }`}>
          {isDistress ? 'ANOMALY DETECTED' : 'ALL SYSTEMS NOMINAL'}
        </span>
      </div>

      {/* 6 Subsystem Rows */}
      <div className="space-y-2">
        {healthItems.map((item) => {
          const isSelected = selectedHotspotId === item.hotspotId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedHotspotId(item.hotspotId)}
              className={`w-full p-2.5 rounded-xl flex items-center justify-between text-left transition-all border group ${
                isSelected
                  ? 'bg-tamas-cardLight border-tamas-cyan/60 shadow-md shadow-cyan-950/40'
                  : 'bg-tamas-cardInner border-tamas-borderSubtle hover:border-tamas-borderLight hover:bg-[#0E2333]'
              }`}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0F283C] border border-tamas-border/70 group-hover:border-tamas-cyan/50 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-tamas-text block truncate group-hover:text-tamas-cyan transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono font-medium block truncate ${
                    item.isOk ? 'text-tamas-operational' : 'text-tamas-critical'
                  }`}>
                    {item.state}
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-1.5 flex-shrink-0 pl-2">
                <span className={`w-2 h-2 rounded-full ${
                  item.isOk 
                    ? 'bg-tamas-operational shadow-sm shadow-emerald-500/50' 
                    : 'bg-tamas-critical animate-ping'
                }`} />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
