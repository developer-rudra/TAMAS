import React from 'react';
import { useMissionStore, AnalyticsTab } from '../../store/useMissionStore';
import { Activity, TrendingUp, BarChart2 } from 'lucide-react';

export const SensorAnalyticsPanel: React.FC = () => {
  const { 
    packetHistory, 
    currentPacket, 
    activeAnalyticsTab, 
    setActiveAnalyticsTab 
  } = useMissionStore();

  const history = packetHistory.slice(-48);

  const tabs: { id: AnalyticsTab; label: string }[] = [
    { id: 'temp', label: 'Temperature' },
    { id: 'depth', label: 'Depth' },
    { id: 'pressure', label: 'Pressure' },
    { id: 'battery', label: 'Battery' },
    { id: 'wave', label: 'Wave Activity' },
  ];

  // Series selection
  let values: number[] = [];
  let unit = '°C';
  let legendLabel = 'Water Temperature';
  let currentVal = '26.4 °C';
  let yAxisLabels = ['28', '26', '24', '22', '20'];
  let minRange = 20;
  let maxRange = 28;

  switch (activeAnalyticsTab) {
    case 'temp':
      values = history.length > 0 
        ? history.map(p => 25.8 + (p.sensors.waterTempC + 1.14) * 0.4 + Math.sin(p.packetSequence * 0.3) * 0.7) 
        : [26.4];
      unit = '°C';
      legendLabel = 'Water Temperature';
      currentVal = '26.4 °C';
      yAxisLabels = ['28.0', '26.0', '24.0', '22.0', '20.0'];
      minRange = 20;
      maxRange = 28;
      break;
    case 'depth':
      values = history.length > 0 
        ? history.map(p => 18.0 + Math.sin(p.packetSequence * 0.2) * 1.2) 
        : [18.6];
      unit = 'm';
      legendLabel = 'Submerged Depth';
      currentVal = '18.6 m';
      yAxisLabels = ['22.0', '20.0', '18.0', '16.0', '14.0'];
      minRange = 14;
      maxRange = 22;
      break;
    case 'pressure':
      values = history.length > 0 
        ? history.map(p => 2.0 + Math.sin(p.packetSequence * 0.25) * 0.18) 
        : [2.1];
      unit = 'bar';
      legendLabel = 'Hydrostatic Pressure';
      currentVal = '2.1 bar';
      yAxisLabels = ['2.4', '2.2', '2.0', '1.8', '1.6'];
      minRange = 1.6;
      maxRange = 2.4;
      break;
    case 'battery':
      values = history.length > 0 
        ? history.map(p => p.power.lisocl2CellVoltage) 
        : [3.62];
      unit = 'V';
      legendLabel = 'LiSOCl2 Bus Voltage';
      currentVal = `${currentPacket.power.lisocl2CellVoltage} V`;
      yAxisLabels = ['3.80', '3.70', '3.60', '3.50', '3.40'];
      minRange = 3.4;
      maxRange = 3.8;
      break;
    case 'wave':
      values = history.length > 0 
        ? history.map(p => 1.0 + Math.abs(p.gyro.pitch) * 0.035) 
        : [1.2];
      unit = 'm';
      legendLabel = 'Significant Wave Height';
      currentVal = '1.2 m';
      yAxisLabels = ['2.0', '1.6', '1.2', '0.8', '0.4'];
      minRange = 0.4;
      maxRange = 2.0;
      break;
  }

  // Generate SVG Path
  const width = 840;
  const height = 160;
  const pad = { top: 18, right: 28, bottom: 26, left: 44 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  // Synthetic smooth points if history is short
  const displayPoints = values.length >= 24 ? values : Array.from({ length: 24 }, (_, i) => 
    minRange + (maxRange - minRange) * (0.48 + 0.22 * Math.sin(i * 0.4) + 0.12 * Math.cos(i * 0.75))
  );

  const getX = (i: number) => pad.left + (i / Math.max(1, displayPoints.length - 1)) * innerW;
  const getY = (val: number) => pad.top + innerH - Math.max(0, Math.min(1, (val - minRange) / (maxRange - minRange))) * innerH;

  const pathD = displayPoints.map((v, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getY(v).toFixed(1)}`).join(' ');
  const areaD = `${pathD} L ${getX(displayPoints.length - 1).toFixed(1)} ${(pad.top + innerH).toFixed(1)} L ${getX(0).toFixed(1)} ${(pad.top + innerH).toFixed(1)} Z`;

  const timeLabels = ['21:45', '21:55', '22:05', '22:15', '22:25', '22:35', '22:45 UTC'];

  const minVal = Math.min(...displayPoints).toFixed(1);
  const maxVal = Math.max(...displayPoints).toFixed(1);
  const avgVal = (displayPoints.reduce((a, b) => a + b, 0) / displayPoints.length).toFixed(1);

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none">
      
      {/* Header & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-tamas-border/60 pb-3 mb-2">
        
        {/* Title & Scientific Tabs */}
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-tamas-cyan shadow-sm shadow-cyan-500/50" />
            <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
              SENSOR ANALYTICS
            </h2>
          </div>

          <div className="flex items-center bg-tamas-cardInner p-0.5 rounded-xl border border-tamas-borderSubtle space-x-1 text-xs">
            {tabs.map((tab) => {
              const isActive = activeAnalyticsTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveAnalyticsTab(tab.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-tamas-cardLight text-tamas-cyan border border-tamas-cyan/40 font-bold shadow-sm'
                      : 'text-tamas-textMuted hover:text-tamas-text'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Metrics Header */}
        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-0.5 bg-tamas-cyan rounded-full" />
            <span className="text-tamas-textMuted">{legendLabel}:</span>
            <span className="font-extrabold text-tamas-cyan">{currentVal}</span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[11px] text-tamas-textMuted border-l border-tamas-border/60 pl-3">
            <span>MIN: <strong className="text-tamas-text">{minVal}{unit}</strong></span>
            <span>AVG: <strong className="text-tamas-turquoise">{avgVal}{unit}</strong></span>
            <span>MAX: <strong className="text-tamas-text">{maxVal}{unit}</strong></span>
          </div>
        </div>

      </div>

      {/* SVG Scientific Line Graph */}
      <div className="w-full pt-1">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
          
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#00E5FF" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Y-Axis Unit */}
          <text x={pad.left - 24} y={pad.top - 6} fill="#7E99AC" fontSize="10" fontFamily="JetBrains Mono">
            {unit}
          </text>

          {/* Horizontal Grid lines and Y values */}
          {yAxisLabels.map((label, idx) => {
            const yPos = pad.top + (idx / (yAxisLabels.length - 1)) * innerH;
            return (
              <g key={idx}>
                <line
                  x1={pad.left}
                  y1={yPos}
                  x2={pad.left + innerW}
                  y2={yPos}
                  stroke="#16354D"
                  strokeDasharray="3,4"
                  strokeWidth="1"
                />
                <text
                  x={pad.left - 10}
                  y={yPos + 3.5}
                  textAnchor="end"
                  fill="#7E99AC"
                  fontSize="10"
                  fontFamily="JetBrains Mono"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path
            d={areaD}
            fill="url(#areaGradient)"
          />

          {/* Main Curve Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Latest Point Marker & Pulse Aura */}
          {displayPoints.length > 0 && (
            <g>
              <circle
                cx={getX(displayPoints.length - 1)}
                cy={getY(displayPoints[displayPoints.length - 1])}
                r="6"
                fill="#00E5FF"
                fillOpacity="0.25"
              />
              <circle
                cx={getX(displayPoints.length - 1)}
                cy={getY(displayPoints[displayPoints.length - 1])}
                r="3.5"
                fill="#00E5FF"
                stroke="#06121C"
                strokeWidth="1.5"
              />
            </g>
          )}

          {/* Time Axis at bottom */}
          {timeLabels.map((time, idx) => {
            const xPos = pad.left + (idx / (timeLabels.length - 1)) * innerW;
            return (
              <text
                key={idx}
                x={xPos}
                y={pad.top + innerH + 18}
                textAnchor="middle"
                fill="#7E99AC"
                fontSize="9"
                fontFamily="JetBrains Mono"
              >
                {time}
              </text>
            );
          })}

        </svg>
      </div>

    </div>
  );
};
