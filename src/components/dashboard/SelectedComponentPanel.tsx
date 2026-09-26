import React, { useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { BatteryCharging, Shield, Zap, Sparkles } from 'lucide-react';

export interface SelectedComponentData {
  id: string;
  name: string;
  category: string;
  batteryLevel: number;
  voltage: string;
  temperature: string;
  status: string;
  health: string;
  description: string;
}

export const SelectedComponentPanel: React.FC = () => {
  const { currentPacket, selectedHotspotId, setSelectedHotspotId } = useMissionStore();

  const [activeComponentId, setActiveComponentId] = useState<string>('battery');

  // Component catalog
  const components: Record<string, SelectedComponentData> = {
    battery: {
      id: 'battery',
      name: 'Power Reservoir',
      category: 'Primary Energy Storage System',
      batteryLevel: Math.round(currentPacket.power.hlcChargePercentage || 82),
      voltage: `${currentPacket.power.lisocl2CellVoltage} V`,
      temperature: '29.1 °C',
      status: 'READY',
      health: '98.2%',
      description: 'Dual LiSOCl2 primary battery matrix backed by Hybrid Layer Capacitor (HLC 1550) for 4.8 kbps bursts.'
    },
    radome: {
      id: 'radome',
      name: 'Apex Radome & Antenna',
      category: 'Telemetry & Surface Fairing',
      batteryLevel: 94,
      voltage: '3.60 V',
      temperature: `${currentPacket.sensors.ambientSupercooledTempC}°C`,
      status: 'ACTIVE',
      health: '99.1%',
      description: '60° PTFE-coated fiberglass cone protecting INSAT, NavIC, and ARGOS polar RF transceivers.'
    },
    anemometer: {
      id: 'anemometer',
      name: 'Ultrasonic Anemometer',
      category: 'Atmospheric Sensor Array',
      batteryLevel: 88,
      voltage: '3.58 V',
      temperature: `${currentPacket.sensors.ambientSupercooledTempC}°C`,
      status: 'MEASURING',
      health: '97.9%',
      description: '4-axis acoustic resonance wind velocity and ambient MEMS barometric pressure measurement.'
    },
    collar: {
      id: 'collar',
      name: 'Buoyancy Collar',
      category: 'Hydrodynamic Stabilization',
      batteryLevel: 100,
      voltage: 'N/A',
      temperature: `${currentPacket.sensors.waterTempC}°C`,
      status: 'STABLE',
      health: '100%',
      description: 'Polyurea-armored closed-cell marine foam providing 120 kg net positive reserve buoyancy.'
    },
    sonde: {
      id: 'sonde',
      name: 'Benthic CTD Sonde',
      category: 'Subsurface Oceanographic Sonde',
      batteryLevel: 91,
      voltage: '3.61 V',
      temperature: `${currentPacket.sensors.waterTempC} °C`,
      status: 'PROFILING',
      health: '99.4%',
      description: 'Titanium-encased inductive conductivity, depth transducer, and precision thermistor.'
    }
  };

  const comp = components[activeComponentId] || components.battery;

  // SVG Circular Ring Gauge Calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (comp.batteryLevel / 100) * circumference;

  return (
    <div className="tamas-card p-4 sm:p-5 select-none">
      
      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-cyan shadow-sm shadow-cyan-500/50" />
          <span className="text-[11px] font-bold text-tamas-textMuted tracking-wider uppercase font-mono">
            SELECTED COMPONENT
          </span>
          <span className="text-sm font-bold text-tamas-text">
            — {comp.name}
          </span>
        </div>

        {/* Component Selector Pills */}
        <div className="flex items-center space-x-1 bg-tamas-cardInner p-0.5 rounded-lg border border-tamas-borderSubtle text-[11px] font-mono">
          {[
            { id: 'battery', label: 'Power' },
            { id: 'radome', label: 'Radome' },
            { id: 'anemometer', label: 'Wind Mast' },
            { id: 'collar', label: 'Collar' },
            { id: 'sonde', label: 'CTD Sonde' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveComponentId(item.id);
                if (item.id === 'battery' && setSelectedHotspotId) setSelectedHotspotId('power_reservoir');
                if (item.id === 'radome' && setSelectedHotspotId) setSelectedHotspotId('core_avionics');
                if (item.id === 'sonde' && setSelectedHotspotId) setSelectedHotspotId('sensor_suite');
              }}
              className={`px-2 py-0.5 rounded-md transition-all ${
                activeComponentId === item.id
                  ? 'bg-tamas-cardLight text-tamas-cyan font-semibold border border-tamas-cyan/40 shadow-sm'
                  : 'text-tamas-textMuted hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout: Compact Circular Ring Gauge + 5 Telemetry Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Compact Visual Ring / Battery Indicator (4 cols) */}
        <div className="md:col-span-4 flex items-center space-x-3.5 p-3 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
          
          {/* Circular SVG Ring Indicator */}
          <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
              {/* Background Track */}
              <circle
                cx="45"
                cy="45"
                r={radius}
                stroke="#122A3D"
                strokeWidth="6"
                fill="transparent"
              />
              {/* Active Progress Ring */}
              <circle
                cx="45"
                cy="45"
                r={radius}
                stroke="#00E5FF"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                style={{ transition: 'stroke-dashoffset 0.6s ease' }}
              />
            </svg>
            
            {/* Center Readout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-base font-extrabold text-tamas-text font-mono tracking-tight leading-none">
                {comp.batteryLevel}%
              </span>
              <span className="text-[9px] font-mono text-tamas-textMuted uppercase mt-0.5">
                CHARGE
              </span>
            </div>
          </div>

          {/* Quick Ring Metadata */}
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5 text-tamas-cyan text-xs font-semibold">
              <BatteryCharging className="w-3.5 h-3.5" />
              <span>Charge Reservoir</span>
            </div>
            <p className="text-[10px] text-tamas-textMuted mt-1 leading-snug truncate">
              {comp.category}
            </p>
            <div className="flex items-center space-x-1.5 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-tamas-operational">
                CELLS BALANCED
              </span>
            </div>
          </div>

        </div>

        {/* 5 Telemetry Metrics (8 cols) */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
          
          {/* Battery Level */}
          <div className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
            <span className="text-[10px] font-mono text-tamas-textMuted block uppercase">
              Battery Level
            </span>
            <span className="text-base font-extrabold text-tamas-text font-mono block mt-0.5">
              {comp.batteryLevel}%
            </span>
            <div className="w-full h-1 bg-[#091824] rounded-full mt-2 overflow-hidden border border-tamas-borderSubtle">
              <div 
                className="h-full bg-tamas-cyan rounded-full transition-all duration-500" 
                style={{ width: `${comp.batteryLevel}%` }} 
              />
            </div>
          </div>

          {/* Voltage */}
          <div className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
            <span className="text-[10px] font-mono text-tamas-textMuted block uppercase">
              Voltage
            </span>
            <span className="text-base font-extrabold text-tamas-cyan font-mono block mt-0.5">
              {comp.voltage}
            </span>
            <span className="text-[10px] font-mono text-tamas-textMuted block mt-1.5">
              Bus Nominal
            </span>
          </div>

          {/* Temperature */}
          <div className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
            <span className="text-[10px] font-mono text-tamas-textMuted block uppercase">
              Temperature
            </span>
            <span className="text-base font-extrabold text-tamas-text font-mono block mt-0.5">
              {comp.temperature}
            </span>
            <span className="text-[10px] font-mono text-tamas-operational block mt-1.5">
              Optimal
            </span>
          </div>

          {/* Status */}
          <div className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
            <span className="text-[10px] font-mono text-tamas-textMuted block uppercase">
              Status
            </span>
            <span className="text-base font-extrabold text-tamas-operational block mt-0.5 font-mono">
              {comp.status}
            </span>
            <span className="text-[10px] font-mono text-tamas-textMuted block mt-1.5">
              Live Lock
            </span>
          </div>

          {/* Health */}
          <div className="p-2.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
            <span className="text-[10px] font-mono text-tamas-textMuted block uppercase">
              Health
            </span>
            <span className="text-base font-extrabold text-tamas-turquoise font-mono block mt-0.5">
              {comp.health}
            </span>
            <span className="text-[10px] font-mono text-tamas-textMuted block mt-1.5">
              Cycle Stable
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
