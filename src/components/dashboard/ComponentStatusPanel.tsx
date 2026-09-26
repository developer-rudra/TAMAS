import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  Navigation2, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  ThermometerSnowflake 
} from 'lucide-react';

type StatusType = 'Online' | 'Warning' | 'Offline';

interface ComponentItem {
  id: string;
  name: string;
  spec: string;
  status: StatusType;
  health: string;
  icon: React.ReactNode;
}

export const ComponentStatusPanel: React.FC = () => {
  const { currentPacket } = useMissionStore();
  const isDistress = currentPacket.distress.sasrActive;

  const components: ComponentItem[] = [
    {
      id: 'nav',
      name: 'Navigation Module',
      spec: 'NavIC / GPS Dual Lock • 14 SVs',
      status: 'Online' as const,
      health: '99.4%',
      icon: <Navigation2 className="w-3.5 h-3.5 text-tamas-cyan" />
    },
    {
      id: 'comm',
      name: 'Communication Module',
      spec: isDistress ? '406.05 MHz Distress Burst' : 'INSAT-DRT / ARGOS Polar Link',
      status: isDistress ? ('Warning' as const) : ('Online' as const),
      health: '98.8%',
      icon: <Radio className="w-3.5 h-3.5 text-tamas-turquoise" />
    },
    {
      id: 'sensors',
      name: 'Sensor Suite',
      spec: 'CTD Sonde + Ultrasonic Vector',
      status: 'Online' as const,
      health: '100%',
      icon: <Cpu className="w-3.5 h-3.5 text-tamas-cyan" />
    },
    {
      id: 'bms',
      name: 'Battery Management',
      spec: 'LiSOCl2 Matrix + HLC Buffer',
      status: 'Online' as const,
      health: '98.2%',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-tamas-turquoise" />
    },
    {
      id: 'cooling',
      name: 'Cooling System',
      spec: 'Passive Ocean Thermal Dissipation',
      status: 'Online' as const,
      health: '99.9%',
      icon: <ThermometerSnowflake className="w-3.5 h-3.5 text-tamas-cyan" />
    }
  ];

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-turquoise shadow-sm shadow-emerald-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            COMPONENT STATUS
          </h2>
        </div>
        <span className="text-[10px] font-mono text-tamas-textMuted uppercase tracking-wider">
          5 / 5 OPERATIONAL
        </span>
      </div>

      {/* Component List */}
      <div className="space-y-2 text-xs">
        {components.map((comp) => {
          const isWarning = comp.status === 'Warning';
          const isOffline = comp.status === 'Offline';

          return (
            <div
              key={comp.id}
              className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle hover:border-tamas-borderLight transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#0F283C] border border-tamas-border/70 flex-shrink-0">
                  {comp.icon}
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-tamas-text block text-xs truncate">
                    {comp.name}
                  </span>
                  <span className="text-[10px] font-mono text-tamas-textMuted block truncate">
                    {comp.spec}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-2 flex-shrink-0 pl-2">
                <span className="text-[10px] font-mono text-tamas-textMuted hidden sm:inline">
                  {comp.health}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center space-x-1 ${
                    isWarning
                      ? 'tamas-tag-amber'
                      : isOffline
                      ? 'tamas-tag-red'
                      : 'tamas-tag-green'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isWarning
                        ? 'bg-tamas-warning animate-pulse'
                        : isOffline
                        ? 'bg-tamas-critical'
                        : 'bg-tamas-operational'
                    }`}
                  />
                  <span>{comp.status}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
