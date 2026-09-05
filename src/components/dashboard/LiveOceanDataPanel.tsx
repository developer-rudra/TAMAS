import React, { useEffect, useRef } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { 
  Waves, 
  Thermometer, 
  ArrowDownCircle, 
  Wind, 
  Gauge, 
  Droplets, 
  Crosshair, 
  Maximize2,
  AlertTriangle
} from 'lucide-react';

export const LiveOceanDataPanel: React.FC = () => {
  const { 
    currentPacket, 
    radarContact, 
    vessel,
    openDistressModal,
    triggerIcebergAnomaly 
  } = useMissionStore();

  const sonarCanvasRef = useRef<HTMLCanvasElement>(null);

  // Render Oceanographic PPI Radar Display
  useEffect(() => {
    const canvas = sonarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) / 2 - 8;

      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#18242D';
      ctx.fill();
      ctx.strokeStyle = '#3D5A68';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Range Rings (3 subtle concentric circles)
      [0.33, 0.66, 1.0].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(61, 90, 104, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Crosshair Axes
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.strokeStyle = 'rgba(61, 90, 104, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating Radar Sweep Line & Phosphor Glow
      angle = (angle + 0.02) % (Math.PI * 2);

      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGrad.addColorStop(0, 'rgba(79, 163, 184, 0.2)');
      sweepGrad.addColorStop(1, 'rgba(79, 163, 184, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.45, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();

      // Leading beam
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = '#4FA3B8';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Target Blips (Matching reference image: two targets near NE)
      // Main Buoy target
      const t1X = cx + radius * 0.45 * Math.cos(-Math.PI / 4);
      const t1Y = cy + radius * 0.45 * Math.sin(-Math.PI / 4);

      ctx.beginPath();
      ctx.arc(t1X, t1Y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#52B788';
      ctx.shadowColor = '#52B788';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Secondary target
      const t2X = cx + radius * 0.70 * Math.cos(-Math.PI / 3.6);
      const t2Y = cy + radius * 0.70 * Math.sin(-Math.PI / 3.6);

      ctx.beginPath();
      ctx.arc(t2X, t2Y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#4FA3B8';
      ctx.fill();

      // Center ship dot
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#E8EDF0';
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="space-y-3.5 flex flex-col h-full select-none">
      
      {/* 1. LIVE OCEAN DATA (Matching Reference Image) */}
      <div className="tamas-card p-4 space-y-2.5">
        
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
            LIVE OCEAN DATA
          </h2>
          <span className="text-[11px] text-tamas-textMuted">
            Southern Ocean Sector
          </span>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          
          {/* Temperature */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <Thermometer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                TEMPERATURE
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                26.4 °C
              </span>
            </div>
          </div>

          {/* Depth */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <ArrowDownCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                DEPTH
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                18.6 m
              </span>
            </div>
          </div>

          {/* Wave Height */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <Waves className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                WAVE HEIGHT
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                1.2 m
              </span>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <Wind className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                WIND SPEED
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                24.3 kts
              </span>
            </div>
          </div>

          {/* Pressure */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <Gauge className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                PRESSURE
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                2.1 bar
              </span>
            </div>
          </div>

          {/* Conductivity */}
          <div className="p-2.5 rounded-lg bg-[#1A2733] border border-tamas-border/50 flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#202F3B] text-tamas-info">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-tamas-textMuted font-bold uppercase tracking-wider block">
                CONDUCTIVITY
              </span>
              <span className="text-base font-extrabold text-tamas-text font-mono block">
                Normal
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. TACTICAL RECOVERY RADAR (Matching Reference Image) */}
      <div className="tamas-card p-4 space-y-2.5">
        
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
            TACTICAL RECOVERY RADAR
          </h2>
          <span className="text-[10px] px-2 py-0.5 rounded-full tamas-tag-green font-semibold">
            Target Detected
          </span>
        </div>

        <div className="flex items-center space-x-3.5">
          
          {/* Radar Circle */}
          <div className="w-24 h-24 flex-shrink-0">
            <canvas
              ref={sonarCanvasRef}
              width={140}
              height={140}
              className="w-full h-full rounded-full border border-tamas-border/60"
            />
          </div>

          {/* Radar Readouts */}
          <div className="flex-1 space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-[11px] text-tamas-textMuted">Distance</span>
              <span className="text-xs font-bold text-tamas-text font-mono">5.2 km</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[11px] text-tamas-textMuted">Direction</span>
              <span className="text-xs font-bold text-tamas-text font-mono">NE (45°)</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[11px] text-tamas-textMuted">Vessel</span>
              <span className="text-xs font-semibold text-tamas-text">Unknown</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[11px] text-tamas-textMuted">Last Update</span>
              <span className="text-xs font-mono text-tamas-text">2 sec ago</span>
            </div>

            <button className="w-full mt-2 py-1 rounded bg-[#1A2733] hover:bg-[#243442] border border-tamas-border/50 text-[11px] font-medium text-tamas-text flex items-center justify-center space-x-1 transition-colors">
              <Maximize2 className="w-3 h-3 text-tamas-info" />
              <span>Expand Radar</span>
            </button>
          </div>

        </div>

      </div>

      {/* 3. ALERTS (Matching Reference Image) */}
      <div className="tamas-card p-4 space-y-2.5 flex-1">
        
        <div className="flex items-center justify-between border-b border-tamas-border/60 pb-2">
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase">
            ALERTS
          </h2>
          <button className="text-[11px] text-tamas-info hover:underline font-medium">
            View All
          </button>
        </div>

        {/* Anomaly Card */}
        <div className="p-3 rounded-lg bg-[#1A2733] border border-tamas-warning/40 space-y-2">
          
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-tamas-warning mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-tamas-warning block">
                Simulation Anomaly Detected
              </span>
              <p className="text-[11px] text-tamas-textMuted mt-0.5">
                Critical signal inconsistency detected.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-[10px] text-tamas-textMuted pt-0.5 font-mono">
            <span>Severity: <strong className="text-tamas-warning">High</strong></span>
            <span>•</span>
            <span>2 min ago</span>
          </div>

          {/* Two Action Buttons */}
          <div className="flex items-center space-x-2 pt-1">
            <button
              onClick={openDistressModal}
              className="flex-1 py-1.5 rounded-md bg-[#202F3B] hover:bg-[#263745] border border-tamas-border/60 text-xs font-semibold text-tamas-text transition-colors text-center"
            >
              View Details
            </button>
            <button
              onClick={() => triggerIcebergAnomaly(false)}
              className="flex-1 py-1.5 rounded-md bg-tamas-orange hover:bg-orange-600 text-white text-xs font-bold tracking-wide transition-colors text-center shadow-sm"
            >
              Run Diagnostic
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
