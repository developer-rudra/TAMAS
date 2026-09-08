import React, { useState, useMemo } from 'react';
import { 
  Waves, 
  Wind, 
  Compass, 
  Thermometer, 
  Droplets, 
  Activity, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { getOceanAnalyticsHistory } from '../../services/marineMapData';
import { OceanAnalyticsPoint } from '../../types/telemetry';

export const OceanAnalyticsPanel: React.FC = () => {
  const history = useMemo(() => getOceanAnalyticsHistory(), []);
  const [hoveredPoint, setHoveredPoint] = useState<OceanAnalyticsPoint | null>(null);

  // Current values
  const currentPt = history[history.length - 1] || {
    currentMs: 0.62,
    windKnots: 24.3,
    waveHeightM: 1.2
  };

  // SVG Chart Geometry
  const width = 1000;
  const height = 150;
  const paddingX = 45;
  const paddingY = 22;
  const chartW = width - paddingX * 2;
  const chartH = height - paddingY * 2;

  // Normalized curves calculations
  // Current range: 0.4 to 0.8 m/s
  // Wind range: 15 to 30 kts
  // Waves range: 0.8 to 1.8 m
  const getCoordinates = (points: OceanAnalyticsPoint[]) => {
    const step = chartW / (points.length - 1);

    const currentCoords = points.map((p, i) => {
      const x = paddingX + i * step;
      const normY = (p.currentMs - 0.4) / (0.8 - 0.4);
      const y = height - paddingY - normY * chartH;
      return { x, y };
    });

    const windCoords = points.map((p, i) => {
      const x = paddingX + i * step;
      const normY = (p.windKnots - 15) / (30 - 15);
      const y = height - paddingY - normY * chartH;
      return { x, y };
    });

    const waveCoords = points.map((p, i) => {
      const x = paddingX + i * step;
      const normY = (p.waveHeightM - 0.8) / (1.8 - 0.8);
      const y = height - paddingY - normY * chartH;
      return { x, y };
    });

    const toPathString = (coords: { x: number; y: number }[]) => {
      return coords.reduce((acc, pt, idx) => {
        return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
      }, '');
    };

    return {
      currentPath: toPathString(currentCoords),
      windPath: toPathString(windCoords),
      wavePath: toPathString(waveCoords),
      currentCoords,
      windCoords,
      waveCoords
    };
  };

  const { currentPath, windPath, wavePath, currentCoords, windCoords, waveCoords } = useMemo(
    () => getCoordinates(history),
    [history]
  );

  return (
    <div className="space-y-3.5 select-none">
      
      {/* TOP ROW: 5 COMPACT OCEAN METRIC CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
        
        {/* Card 1: Ocean Current */}
        <div className="tamas-card p-3 space-y-1.5 border border-tamas-border/60">
          <div className="flex items-center justify-between text-[#9AA9B5]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Ocean Current</span>
            <Activity className="w-3.5 h-3.5 text-tamas-info" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-extrabold text-tamas-text font-mono">
              0.62 <span className="text-xs font-normal text-tamas-textMuted font-sans">m/s</span>
            </span>
            <span className="text-xs text-tamas-info font-mono font-semibold">(1.2 kts)</span>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-tamas-border/40 text-tamas-textMuted">
            <span>Vector: 045° NE</span>
            <span className="text-tamas-info font-medium">Moderate</span>
          </div>
        </div>

        {/* Card 2: Wind Speed */}
        <div className="tamas-card p-3 space-y-1.5 border border-tamas-border/60">
          <div className="flex items-center justify-between text-[#9AA9B5]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Wind Speed</span>
            <Wind className="w-3.5 h-3.5 text-tamas-warning" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-extrabold text-tamas-text font-mono">
              24.3 <span className="text-xs font-normal text-tamas-textMuted font-sans">kts</span>
            </span>
            <span className="text-xs text-tamas-warning font-mono font-semibold">(12.5 m/s)</span>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-tamas-border/40 text-tamas-textMuted">
            <span>Heading: 042° NE</span>
            <span className="text-tamas-warning font-medium">Beaufort 6</span>
          </div>
        </div>

        {/* Card 3: Wave Height */}
        <div className="tamas-card p-3 space-y-1.5 border border-tamas-border/60">
          <div className="flex items-center justify-between text-[#9AA9B5]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Wave Height</span>
            <Waves className="w-3.5 h-3.5 text-tamas-operational" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-extrabold text-tamas-text font-mono">
              1.2 <span className="text-xs font-normal text-tamas-textMuted font-sans">m</span>
            </span>
            <span className="text-xs text-tamas-operational font-mono font-semibold">T: 6.4s</span>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-tamas-border/40 text-tamas-textMuted">
            <span>Swell: South-West</span>
            <span className="text-tamas-operational font-medium">Slight Swell</span>
          </div>
        </div>

        {/* Card 4: Water Temperature */}
        <div className="tamas-card p-3 space-y-1.5 border border-tamas-border/60">
          <div className="flex items-center justify-between text-[#9AA9B5]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Water Temp</span>
            <Thermometer className="w-3.5 h-3.5 text-tamas-info" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-extrabold text-tamas-text font-mono">
              26.4 <span className="text-xs font-normal text-tamas-textMuted font-sans">°C</span>
            </span>
            <span className="text-xs text-tamas-textMuted font-mono">(79.5 °F)</span>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-tamas-border/40 text-tamas-textMuted">
            <span>Depth: 18.6m</span>
            <span className="text-tamas-info font-medium">Nominal</span>
          </div>
        </div>

        {/* Card 5: Salinity */}
        <div className="tamas-card p-3 space-y-1.5 border border-tamas-border/60 col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-[#9AA9B5]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Salinity</span>
            <Droplets className="w-3.5 h-3.5 text-[#52B788]" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-xl font-extrabold text-tamas-text font-mono">
              35.2 <span className="text-xs font-normal text-tamas-textMuted font-sans">PSU</span>
            </span>
            <span className="text-xs text-[#52B788] font-mono">53.2 mS/cm</span>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-tamas-border/40 text-tamas-textMuted">
            <span>Arabian Sea Basin</span>
            <span className="text-tamas-operational font-medium">Standard</span>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: 24-HOUR OCEANOGRAPHIC MULTI-SERIES CHART */}
      <div className="tamas-card p-4 space-y-2 border border-tamas-border/60">
        
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-tamas-border/60 pb-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-tamas-info" />
            <h3 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
              24-HOUR HYDRODYNAMIC &amp; METEOROLOGICAL TRENDS
            </h3>
            <span className="text-[10px] text-tamas-textMuted font-mono">
              (Arabian Sea Deep Mooring Sector)
            </span>
          </div>

          {/* Tactical Legend with Real-Time Values */}
          <div className="flex items-center space-x-4 text-xs font-mono">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-tamas-info" />
              <span className="text-tamas-textMuted text-[11px]">Current:</span>
              <strong className="text-tamas-info font-bold">
                {hoveredPoint ? hoveredPoint.currentMs : currentPt.currentMs} m/s
              </strong>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-tamas-warning" />
              <span className="text-tamas-textMuted text-[11px]">Wind:</span>
              <strong className="text-tamas-warning font-bold">
                {hoveredPoint ? hoveredPoint.windKnots : currentPt.windKnots} kts
              </strong>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-tamas-operational" />
              <span className="text-tamas-textMuted text-[11px]">Waves:</span>
              <strong className="text-tamas-operational font-bold">
                {hoveredPoint ? hoveredPoint.waveHeightM : currentPt.waveHeightM} m
              </strong>
            </div>

            {hoveredPoint && (
              <span className="text-[10px] text-white px-2 py-0.5 rounded bg-[#1A2834] border border-tamas-border">
                {hoveredPoint.hourLabel}
              </span>
            )}
          </div>
        </div>

        {/* Responsive SVG Chart Viewport */}
        <div className="w-full overflow-hidden relative">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-32 md:h-36 overflow-visible"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="currentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4FA3B8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4FA3B8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Gridlines */}
            {[0.25, 0.5, 0.75].map((ratio, idx) => {
              const y = paddingY + chartH * ratio;
              return (
                <line
                  key={`grid-${idx}`}
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="rgba(61, 90, 104, 0.25)"
                  strokeDasharray="4, 4"
                  strokeWidth="1"
                />
              );
            })}

            {/* Area Fill for Ocean Current */}
            <path
              d={`${currentPath} L ${width - paddingX} ${height - paddingY} L ${paddingX} ${height - paddingY} Z`}
              fill="url(#currentGrad)"
            />

            {/* Line 1: Ocean Current (m/s) - Cyan */}
            <path
              d={currentPath}
              fill="none"
              stroke="#4FA3B8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Line 2: Wind Speed (kts) - Amber */}
            <path
              d={windPath}
              fill="none"
              stroke="#F1A340"
              strokeWidth="2"
              strokeDasharray="6, 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Line 3: Wave Height (m) - Emerald */}
            <path
              d={wavePath}
              fill="none"
              stroke="#52B788"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Interactive Hover Vertical Cursor */}
            {hoveredPoint && (
              <line
                x1={paddingX + (history.findIndex(p => p.timestamp === hoveredPoint.timestamp) / (history.length - 1)) * chartW}
                y1={paddingY}
                x2={paddingX + (history.findIndex(p => p.timestamp === hoveredPoint.timestamp) / (history.length - 1)) * chartW}
                y2={height - paddingY}
                stroke="#E8EDF0"
                strokeWidth="1.5"
                strokeDasharray="2, 2"
              />
            )}

            {/* Time Axis Labels */}
            {[-24, -18, -12, -6, 0].map((hourOffset) => {
              const fraction = (hourOffset + 24) / 24;
              const x = paddingX + fraction * chartW;
              const label = hourOffset === 0 ? 'Now' : `${hourOffset}h`;
              return (
                <text
                  key={`time-${hourOffset}`}
                  x={x}
                  y={height - 4}
                  fill="#9AA9B5"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor={hourOffset === 0 ? 'end' : hourOffset === -24 ? 'start' : 'middle'}
                >
                  {label}
                </text>
              );
            })}

            {/* Invisible Hover Rectangles for Smooth Pointer Events */}
            {history.map((pt, idx) => {
              const step = chartW / (history.length - 1);
              const x = paddingX + idx * step - step / 2;
              return (
                <rect
                  key={`hover-zone-${idx}`}
                  x={x}
                  y={paddingY}
                  width={step}
                  height={chartH}
                  fill="transparent"
                  className="cursor-crosshair"
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              );
            })}
          </svg>
        </div>

      </div>

    </div>
  );
};
