import React from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { Wind, Gauge, ThermometerSnowflake, Activity } from 'lucide-react';

export const AtmosphericStripCharts: React.FC = () => {
  const { currentPacket, packetHistory } = useMissionStore();

  const history = packetHistory.slice(-40); // Last 40 points

  // Generate SVG timeseries sparklines
  const chartWidth = 360;
  const chartHeight = 85;
  const padding = 8;

  // Wind Speed Sparkline
  const windSpeeds = history.map(p => p.sensors.windSpeedKnots);
  const minWind = Math.min(...windSpeeds, 15);
  const maxWind = Math.max(...windSpeeds, 40);
  const windPath = history.map((p, i) => {
    const x = padding + (i / (Math.max(1, history.length - 1))) * (chartWidth - padding * 2);
    const y = chartHeight - padding - ((p.sensors.windSpeedKnots - minWind) / (Math.max(1, maxWind - minWind))) * (chartHeight - padding * 2);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  // Barometric Pressure Sparkline
  const pressures = history.map(p => p.sensors.barometricPressureHpa);
  const minPress = Math.min(...pressures, 975);
  const maxPress = Math.max(...pressures, 995);
  const pressPath = history.map((p, i) => {
    const x = padding + (i / (Math.max(1, history.length - 1))) * (chartWidth - padding * 2);
    const y = chartHeight - padding - ((p.sensors.barometricPressureHpa - minPress) / (Math.max(1, maxPress - minPress))) * (chartHeight - padding * 2);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  // Supercooled Temp Sparkline
  const temps = history.map(p => p.sensors.ambientSupercooledTempC);
  const minTemp = Math.min(...temps, -20);
  const maxTemp = Math.max(...temps, -5);
  const tempPath = history.map((p, i) => {
    const x = padding + (i / (Math.max(1, history.length - 1))) * (chartWidth - padding * 2);
    const y = chartHeight - padding - ((p.sensors.ambientSupercooledTempC - minTemp) / (Math.max(1, maxTemp - minTemp))) * (chartHeight - padding * 2);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyber-cyan" />
          <span className="text-xs font-bold text-slate-200 tracking-wider">
            POLAR ATMOSPHERIC &amp; METEOROLOGICAL REAL-TIME STRIP CHARTS
          </span>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          ACOUSTIC RESONANCE + MEMS DIES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Strip Chart 1: Ultrasonic Anemometer */}
        <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center space-x-1.5">
              <Wind className="w-3.5 h-3.5 text-sky-400" />
              <span>ULTRASONIC ANEMOMETER</span>
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
              4/4 TRANSDUCERS
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-sky-300">
              {currentPacket.sensors.windSpeedKnots}
            </span>
            <span className="text-xs text-slate-400">kts ({currentPacket.sensors.windSpeedMs} m/s)</span>
            <span className="text-xs text-slate-500 ml-auto">DIR: {currentPacket.sensors.windDirectionDeg}°</span>
          </div>

          {/* Sparkline Canvas */}
          <div className="h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
              <path d={windPath} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Strip Chart 2: Surface Barometric Pressure */}
        <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center space-x-1.5">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>SURFACE BAROMETER</span>
            </span>
            <span className="text-[10px] text-slate-400">
              MS5837 DUAL DIE
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-amber-300">
              {currentPacket.sensors.barometricPressureHpa}
            </span>
            <span className="text-xs text-slate-400">hPa</span>
            <span className="text-xs text-slate-500 ml-auto">
              {currentPacket.sensors.barometricPressureHpa < 980 ? 'LOW PRESSURE' : 'NORMAL'}
            </span>
          </div>

          {/* Sparkline Canvas */}
          <div className="h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
              <path d={pressPath} fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Strip Chart 3: Ambient Supercooled Temperature */}
        <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center space-x-1.5">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400" />
              <span>SUPERCOOLED AIR TEMP</span>
            </span>
            <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">
              ICE SHEDDING ON
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-cyan-300">
              {currentPacket.sensors.ambientSupercooledTempC}°C
            </span>
            <span className="text-xs text-slate-400">RH: {currentPacket.sensors.relativeHumidityPct}%</span>
            <span className="text-xs text-slate-500 ml-auto">FREEZING</span>
          </div>

          {/* Sparkline Canvas */}
          <div className="h-16 w-full bg-slate-900/40 rounded border border-slate-800/60 p-1">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
              <path d={tempPath} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>

    </div>
  );
};
