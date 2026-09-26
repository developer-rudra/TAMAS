import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  Waves, 
  Thermometer, 
  ArrowDownCircle, 
  Wind, 
  Gauge, 
  Droplets 
} from 'lucide-react';

export const LiveOceanDataPanel: React.FC = () => {
  const { currentPacket } = useMissionStore();

  const metrics = [
    {
      id: 'temp',
      label: 'TEMPERATURE',
      value: `${(25.8 + (currentPacket.sensors.waterTempC + 1.14) * 0.4).toFixed(1)}`,
      unit: '°C',
      trend: '±0.04° / hr',
      secondary: 'SST Nominal',
      icon: <Thermometer className="w-4 h-4 text-tamas-cyan" />
    },
    {
      id: 'depth',
      label: 'DEPTH',
      value: '18.6',
      unit: 'm',
      trend: 'Draft Stable',
      secondary: 'Spar Keel',
      icon: <ArrowDownCircle className="w-4 h-4 text-tamas-turquoise" />
    },
    {
      id: 'wave',
      label: 'WAVE HEIGHT',
      value: `${(1.1 + Math.abs(currentPacket.gyro.pitch) * 0.03).toFixed(1)}`,
      unit: 'm',
      trend: 'Ts 4.2s',
      secondary: 'Sea State 3',
      icon: <Waves className="w-4 h-4 text-tamas-cyan" />
    },
    {
      id: 'wind',
      label: 'WIND SPEED',
      value: `${currentPacket.sensors.windSpeedKnots.toFixed(1)}`,
      unit: 'kts',
      trend: 'Gust 28.1',
      secondary: 'Ultrasonic',
      icon: <Wind className="w-4 h-4 text-tamas-turquoise" />
    },
    {
      id: 'pressure',
      label: 'ATM PRESSURE',
      value: '2.1',
      unit: 'bar',
      trend: '1014.2 hPa',
      secondary: 'Hydrostatic',
      icon: <Gauge className="w-4 h-4 text-tamas-cyan" />
    },
    {
      id: 'cond',
      label: 'CONDUCTIVITY',
      value: '53.2',
      unit: 'mS/cm',
      trend: '35.4 PSU',
      secondary: 'Normal',
      icon: <Droplets className="w-4 h-4 text-tamas-turquoise" />
    }
  ];

  return (
    <div className="tamas-card p-4 sm:p-5 select-none flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-cyan shadow-sm shadow-cyan-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            LIVE OCEAN DATA
          </h2>
        </div>
        <span className="text-[10px] font-mono text-tamas-textMuted uppercase tracking-wider">
          SOUTHERN OCEAN SECTOR
        </span>
      </div>

      {/* 2x3 Grid with Visually Dominant Values */}
      <div className="grid grid-cols-2 gap-2.5">
        {metrics.map((m) => (
          <div
            key={m.id}
            className="p-3 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle hover:border-tamas-borderLight transition-all group"
          >
            {/* Top row: Label & Icon */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono text-tamas-textMuted font-bold uppercase tracking-wider block">
                {m.label}
              </span>
              <div className="p-1 rounded-md bg-[#0F283C] border border-tamas-border/50 group-hover:border-tamas-cyan/40 transition-colors">
                {m.icon}
              </div>
            </div>

            {/* Dominant Numerical Readout */}
            <div className="flex items-baseline space-x-1">
              <span className="text-xl sm:text-2xl font-extrabold text-tamas-text font-mono tracking-tight">
                {m.value}
              </span>
              <span className="text-xs font-mono font-bold text-tamas-cyan">
                {m.unit}
              </span>
            </div>

            {/* Subtext info */}
            <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-tamas-textMuted">
              <span>{m.trend}</span>
              <span className="text-tamas-turquoise">{m.secondary}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
