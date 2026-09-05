import React, { useState } from 'react';
import { useMissionStore, AnalyticsTab } from '../../store/useMissionStore';

export const SensorAnalyticsPanel: React.FC = () => {
  const { 
    packetHistory, 
    currentPacket, 
    activeAnalyticsTab, 
    setActiveAnalyticsTab 
  } = useMissionStore();

  const history = packetHistory.slice(-48); // Last 48 points

  // Tabs matching reference image
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
  let legendLabel = 'Temperature (°C)';
  let currentVal = '26.4 °C';
  let yAxisLabels = ['28', '26', '24', '22', '20'];
  let minRange = 20;
  let maxRange = 28;

  switch (activeAnalyticsTab) {
    case 'temp':
      values = history.length > 0 ? history.map(p => 25.8 + (p.sensors.waterTempC + 1.14) * 0.4 + Math.sin(p.packetSequence * 0.3) * 0.8) : [26.4];
      unit = '°C';
      legendLabel = 'Temperature (°C)';
      currentVal = '26.4 °C';
      yAxisLabels = ['28', '26', '24', '22', '20'];
      minRange = 20;
      maxRange = 28;
      break;
    case 'depth':
      values = history.length > 0 ? history.map(p => 18.0 + Math.sin(p.packetSequence * 0.2) * 1.2) : [18.6];
      unit = 'm';
      legendLabel = 'Depth (m)';
      currentVal = '18.6 m';
      yAxisLabels = ['22', '20', '18', '16', '14'];
      minRange = 14;
      maxRange = 22;
      break;
    case 'pressure':
      values = history.length > 0 ? history.map(p => 2.0 + Math.sin(p.packetSequence * 0.25) * 0.2) : [2.1];
      unit = 'bar';
      legendLabel = 'Pressure (bar)';
      currentVal = '2.1 bar';
      yAxisLabels = ['2.4', '2.2', '2.0', '1.8', '1.6'];
      minRange = 1.6;
      maxRange = 2.4;
      break;
    case 'battery':
      values = history.length > 0 ? history.map(p => p.power.lisocl2CellVoltage) : [3.62];
      unit = 'V';
      legendLabel = 'Voltage (V)';
      currentVal = `${currentPacket.power.lisocl2CellVoltage} V`;
      yAxisLabels = ['3.8', '3.7', '3.6', '3.5', '3.4'];
      minRange = 3.4;
      maxRange = 3.8;
      break;
    case 'wave':
      values = history.length > 0 ? history.map(p => 1.0 + Math.abs(p.gyro.pitch) * 0.04) : [1.2];
      unit = 'm';
      legendLabel = 'Wave Height (m)';
      currentVal = '1.2 m';
      yAxisLabels = ['2.0', '1.6', '1.2', '0.8', '0.4'];
      minRange = 0.4;
      maxRange = 2.0;
      break;
  }

  // Generate SVG Path
  const width = 840;
  const height = 150;
  const pad = { top: 16, right: 24, bottom: 24, left: 36 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  // Fill in synthetic points if history has few points
  const displayPoints = values.length >= 24 ? values : Array.from({ length: 24 }, (_, i) => 
    minRange + (maxRange - minRange) * (0.45 + 0.25 * Math.sin(i * 0.4) + 0.15 * Math.cos(i * 0.8))
  );

  const getX = (i: number) => pad.left + (i / Math.max(1, displayPoints.length - 1)) * innerW;
  const getY = (val: number) => pad.top + innerH - Math.max(0, Math.min(1, (val - minRange) / (maxRange - minRange))) * innerH;

  const pathD = displayPoints.map((v, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getY(v).toFixed(1)}`).join(' ');

  // Time labels matching reference image
  const timeLabels = ['21:45', '21:50', '21:55', '22:00', '22:05', '22:10', '22:15', '22:20', '22:25', '22:30', '22:35', '22:40'];

  return (
    <div className="tamas-card p-4 sm:p-5 flex flex-col justify-between h-full select-none">
      
      {/* Header & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-tamas-border/60 pb-3">
        
        {/* Title & Tabs */}
        <div className="flex items-center flex-wrap gap-4">
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
            SENSOR ANALYTICS
          </h2>

          <div className="flex items-center bg-[#1A2834] p-0.5 rounded-lg border border-tamas-border/60 space-x-1 text-xs">
            {tabs.map((tab) => {
              const isActive = activeAnalyticsTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveAnalyticsTab(tab.id)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#263745] text-tamas-info border border-tamas-info/40 font-semibold'
                      : 'text-tamas-textMuted hover:text-tamas-text'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend Tag on Right */}
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="w-3 h-0.5 bg-tamas-info" />
          <span className="text-tamas-textMuted">{legendLabel}</span>
          <span className="font-bold text-tamas-info">{currentVal}</span>
        </div>

      </div>

      {/* SVG Line Graph */}
      <div className="w-full pt-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
          
          {/* Y-Axis Label */}
          <text x={pad.left - 18} y={pad.top - 4} fill="#9AA9B5" fontSize="10" fontFamily="Inter">
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
                  stroke="#283947"
                  strokeDasharray="3,3"
                />
                <text
                  x={pad.left - 10}
                  y={yPos + 3.5}
                  textAnchor="end"
                  fill="#9AA9B5"
                  fontSize="10"
                  fontFamily="JetBrains Mono"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Main Curve Line (#4FA3B8) */}
          <path
            d={pathD}
            fill="none"
            stroke="#4FA3B8"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Latest Point Marker */}
          {displayPoints.length > 0 && (
            <circle
              cx={getX(displayPoints.length - 1)}
              cy={getY(displayPoints[displayPoints.length - 1])}
              r="4"
              fill="#4FA3B8"
              stroke="#18242D"
              strokeWidth="2"
            />
          )}

          {/* Time Axis at bottom */}
          {timeLabels.map((time, idx) => {
            const xPos = pad.left + (idx / (timeLabels.length - 1)) * innerW;
            return (
              <text
                key={idx}
                x={xPos}
                y={pad.top + innerH + 16}
                textAnchor="middle"
                fill="#9AA9B5"
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
