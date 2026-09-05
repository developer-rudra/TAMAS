import React, { useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { CTDProfilePoint } from '../../types/telemetry';
import { Waves, Thermometer, Droplets, ArrowDown, Activity, Info } from 'lucide-react';

export const CTDDepthProfiler: React.FC = () => {
  const { currentPacket, ctdProfile } = useMissionStore();
  const [hoveredPoint, setHoveredPoint] = useState<CTDProfilePoint | null>(null);

  // Inverted Depth Chart dimensions:
  // Depth goes from 0m at top down to 500m at bottom.
  // Dual X axes:
  // Temp: -2.0°C to +3.0°C (span: 5.0°C)
  // Salinity: 33.8 to 34.8 PSU (span: 1.0 PSU)

  const chartHeight = 360;
  const chartWidth = 480;
  const padding = { top: 40, right: 30, bottom: 40, left: 60 };

  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxDepth = 500;
  const minTemp = -2.0;
  const maxTemp = 3.0;
  const minSal = 33.8;
  const maxSal = 34.8;

  // Scale functions
  const depthToY = (depth: number) => {
    return padding.top + (depth / maxDepth) * innerHeight;
  };

  const tempToX = (temp: number) => {
    return padding.left + ((temp - minTemp) / (maxTemp - minTemp)) * innerWidth;
  };

  const salToX = (sal: number) => {
    return padding.left + ((sal - minSal) / (maxSal - minSal)) * innerWidth;
  };

  // Generate SVG path strings
  const tempPath = ctdProfile.map((pt, idx) => {
    const x = tempToX(pt.temp);
    const y = depthToY(pt.depth);
    return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  const salPath = ctdProfile.map((pt, idx) => {
    const x = salToX(pt.salinity);
    const y = depthToY(pt.depth);
    return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <Waves className="w-5 h-5 text-cyber-cyan animate-pulse" />
          <span className="text-sm font-bold text-slate-200 tracking-wider">
            SCIENTIFIC INVERTED CTD PROFILER (0 - 500M)
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 bg-cyan-400" />
            <span className="text-cyan-300 font-semibold">Temperature (°C) [Top Axis]</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 bg-emerald-400" />
            <span className="text-emerald-300 font-semibold">Salinity (PSU) [Bottom Axis]</span>
          </div>
        </div>
      </div>

      {/* Main Content: Inverted Depth Chart & Live Sonde Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        
        {/* SVG Inverted Chart (2 cols) */}
        <div className="lg:col-span-2 bg-slate-950/80 rounded-xl p-3 border border-slate-800 relative">
          
          <svg 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
            className="w-full h-auto overflow-visible select-none"
          >
            {/* Strata Background Tints */}
            {/* AASW: 0 - 80m */}
            <rect 
              x={padding.left} 
              y={depthToY(0)} 
              width={innerWidth} 
              height={depthToY(80) - depthToY(0)} 
              fill="rgba(0, 240, 255, 0.03)" 
            />
            {/* Winter Water: 80 - 200m */}
            <rect 
              x={padding.left} 
              y={depthToY(80)} 
              width={innerWidth} 
              height={depthToY(200) - depthToY(80)} 
              fill="rgba(0, 163, 255, 0.05)" 
            />
            {/* Circumpolar Deep Water: 200 - 500m */}
            <rect 
              x={padding.left} 
              y={depthToY(200)} 
              width={innerWidth} 
              height={depthToY(500) - depthToY(200)} 
              fill="rgba(255, 176, 32, 0.03)" 
            />

            {/* Depth Horizontal Grid Lines (every 100m) */}
            {[0, 100, 200, 300, 400, 500].map((d) => (
              <g key={d}>
                <line
                  x1={padding.left}
                  y1={depthToY(d)}
                  x2={padding.left + innerWidth}
                  y2={depthToY(d)}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeDasharray="2,3"
                />
                {/* Y-Axis Label (Depth Inverted) */}
                <text
                  x={padding.left - 10}
                  y={depthToY(d) + 4}
                  textAnchor="end"
                  fill="#94a3b8"
                  fontSize="10"
                  fontFamily="JetBrains Mono"
                >
                  {d}m
                </text>
              </g>
            ))}

            {/* Vertical Grid Lines (Temperature / Salinity markers) */}
            {[-2, -1, 0, 1, 2, 3].map((t) => (
              <line
                key={t}
                x1={tempToX(t)}
                y1={padding.top}
                x2={tempToX(t)}
                y2={padding.top + innerHeight}
                stroke="rgba(0, 240, 255, 0.08)"
                strokeDasharray="2,3"
              />
            ))}

            {/* Water Mass Strata Labels */}
            <text x={padding.left + innerWidth - 6} y={depthToY(40)} textAnchor="end" fill="rgba(0, 240, 255, 0.4)" fontSize="9">
              AASW (Surface Water)
            </text>
            <text x={padding.left + innerWidth - 6} y={depthToY(140)} textAnchor="end" fill="rgba(0, 163, 255, 0.4)" fontSize="9">
              WW (Winter Water Temp Min -1.8°C)
            </text>
            <text x={padding.left + innerWidth - 6} y={depthToY(350)} textAnchor="end" fill="rgba(255, 176, 32, 0.4)" fontSize="9">
              CDW (Circumpolar Deep Water)
            </text>

            {/* Top X-Axis: Temperature (°C) */}
            {[-2, -1, 0, 1, 2, 3].map((t) => (
              <text
                key={t}
                x={tempToX(t)}
                y={padding.top - 12}
                textAnchor="middle"
                fill="#22d3ee"
                fontSize="10"
                fontWeight="bold"
                fontFamily="JetBrains Mono"
              >
                {t > 0 ? `+${t}` : t}°
              </text>
            ))}
            <text x={padding.left + innerWidth / 2} y={padding.top - 26} textAnchor="middle" fill="#00f0ff" fontSize="10" fontWeight="bold">
              ← TEMPERATURE (°C) →
            </text>

            {/* Bottom X-Axis: Salinity (PSU) */}
            {[33.8, 34.0, 34.2, 34.4, 34.6, 34.8].map((s) => (
              <text
                key={s}
                x={salToX(s)}
                y={padding.top + innerHeight + 18}
                textAnchor="middle"
                fill="#34d399"
                fontSize="10"
                fontFamily="JetBrains Mono"
              >
                {s.toFixed(1)}
              </text>
            ))}
            <text x={padding.left + innerWidth / 2} y={padding.top + innerHeight + 32} textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">
              ← PRACTICAL SALINITY (PSU) →
            </text>

            {/* Inverted Temperature Profile Curve */}
            <path
              d={tempPath}
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inverted Salinity Profile Curve */}
            <path
              d={salPath}
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="5,3"
            />

            {/* Interactive Data Points on Temperature curve */}
            {ctdProfile.map((pt, idx) => (
              <circle
                key={idx}
                cx={tempToX(pt.temp)}
                cy={depthToY(pt.depth)}
                r={hoveredPoint?.depth === pt.depth ? 6 : 3.5}
                fill="#00f0ff"
                stroke="#04070b"
                strokeWidth="1.5"
                className="cursor-pointer transition-all hover:scale-150"
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Spar-Buoy Sonde Depth Indicator (7.1m) */}
            <line
              x1={padding.left}
              y1={depthToY(7.1)}
              x2={padding.left + innerWidth}
              y2={depthToY(7.1)}
              stroke="#ffb020"
              strokeWidth="1.5"
              strokeDasharray="4,2"
            />
            <text
              x={padding.left + 8}
              y={depthToY(7.1) - 4}
              fill="#ffb020"
              fontSize="9"
              fontWeight="bold"
            >
              ▲ SPAR BASE SONDE (7.1m)
            </text>
          </svg>

          {/* Hover Tooltip Overlay */}
          {hoveredPoint && (
            <div className="absolute top-4 right-4 bg-void-950/90 border border-cyan-400 p-2.5 rounded-lg text-xs space-y-1 shadow-cyan-glow">
              <div className="text-cyan-300 font-bold">DEPTH: {hoveredPoint.depth}m</div>
              <div className="text-slate-200">Temp: {hoveredPoint.temp}°C</div>
              <div className="text-slate-200">Salinity: {hoveredPoint.salinity} PSU</div>
              <div className="text-slate-400 text-[10px]">Sound Vel: {(1445 + hoveredPoint.depth * 0.016).toFixed(1)} m/s</div>
            </div>
          )}
        </div>

        {/* Live Sonde Readouts (1 col) */}
        <div className="space-y-3 text-xs">
          
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
              <span>SUPERCOOLED WATER TEMP (7.1M)</span>
            </div>
            <div className="text-2xl font-bold text-cyan-300">
              {currentPacket.sensors.waterTempC}°C
            </div>
            <div className="text-[10px] text-slate-500">Antarctic Surface Water (AASW)</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-emerald-500/30 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-400" />
              <span>PRACTICAL SALINITY</span>
            </div>
            <div className="text-2xl font-bold text-emerald-300">
              {currentPacket.sensors.salinityPsu} PSU
            </div>
            <div className="text-[10px] text-slate-500">Conductivity: {currentPacket.sensors.conductivityMsm} mS/cm</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">ACOUSTIC SOUND VELOCITY</div>
            <div className="text-lg font-bold text-slate-200">{currentPacket.sensors.soundVelocityMs} m/s</div>
            <div className="text-[10px] text-slate-500">Del Grosso / Chen-Millero equation</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] space-y-1 text-slate-400">
            <div className="font-semibold text-slate-300">CTD SENSOR INTEGRITY</div>
            <div>Calibration Date: Valid 2026-02</div>
            <div>Electrode State: Zero Bio-fouling</div>
            <div>Sampling Frequency: 1.0 Hz continuous</div>
          </div>

        </div>

      </div>

    </div>
  );
};
