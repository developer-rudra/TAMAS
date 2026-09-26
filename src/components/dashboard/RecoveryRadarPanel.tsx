import React, { useEffect, useRef } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { Navigation, Radar as RadarIcon, Compass } from 'lucide-react';

export const RecoveryRadarPanel: React.FC = () => {
  const { navigateToMarineMap, radarContact, vessel } = useMissionStore();
  const sonarCanvasRef = useRef<HTMLCanvasElement>(null);

  // Render Oceanic PPI Radar Display
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

      // Deep ocean radar background
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#06121C';
      ctx.fill();
      ctx.strokeStyle = '#1A3B54';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Range Rings (3 concentric rings)
      [0.33, 0.66, 1.0].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(26, 59, 84, 0.55)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Crosshair Axes
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.strokeStyle = 'rgba(26, 59, 84, 0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating Radar Sweep Line & Phosphor Glow
      angle = (angle + 0.02) % (Math.PI * 2);

      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGrad.addColorStop(0, 'rgba(0, 229, 255, 0.25)');
      sweepGrad.addColorStop(1, 'rgba(0, 229, 255, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.5, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();

      // Leading beam
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Target Blips
      // 1. Primary Recovery Vessel Target (NE, 45°)
      const t1X = cx + radius * 0.52 * Math.cos(-Math.PI / 4);
      const t1Y = cy + radius * 0.52 * Math.sin(-Math.PI / 4);

      ctx.beginPath();
      ctx.arc(t1X, t1Y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#10B981';
      ctx.shadowColor = '#10B981';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 2. Secondary Drift Target
      const t2X = cx + radius * 0.74 * Math.cos(-Math.PI / 3.4);
      const t2Y = cy + radius * 0.74 * Math.sin(-Math.PI / 3.4);

      ctx.beginPath();
      ctx.arc(t2X, t2Y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00E5FF';
      ctx.fill();

      // Center Buoy beacon
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#F0F6FC';
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="tamas-card p-4 sm:p-5 select-none flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-tamas-border/60 pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-tamas-cyan shadow-sm shadow-cyan-500/50" />
          <h2 className="text-xs font-bold tracking-wider text-tamas-text uppercase font-sans">
            RECOVERY RADAR
          </h2>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full tamas-tag-green font-bold uppercase tracking-wider flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational animate-pulse" />
          <span>TARGET DETECTED</span>
        </span>
      </div>

      {/* Radar Graphic & Readouts */}
      <div className="flex items-center space-x-3.5">
        
        {/* Animated PPI Sweep Canvas */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 relative">
          <canvas
            ref={sonarCanvasRef}
            width={140}
            height={140}
            className="w-full h-full rounded-full border border-tamas-border shadow-inner"
          />
        </div>

        {/* Radar Metrics */}
        <div className="flex-1 space-y-1.5 text-xs font-mono">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-tamas-textMuted font-sans">Distance</span>
            <span className="text-xs font-bold text-tamas-cyan">5.2 km (2.8 NM)</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[11px] text-tamas-textMuted font-sans">Direction</span>
            <span className="text-xs font-bold text-tamas-text">NE (045°)</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[11px] text-tamas-textMuted font-sans">Vessel</span>
            <span className="text-xs font-semibold text-tamas-turquoise truncate max-w-[110px]">
              ORV Sagar Nidhi
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[11px] text-tamas-textMuted font-sans">Last Update</span>
            <span className="text-[11px] text-tamas-textMuted">2 sec ago</span>
          </div>

          <button 
            onClick={() => navigateToMarineMap('route')}
            className="w-full mt-2 py-1.5 rounded-xl bg-tamas-cardInner hover:bg-tamas-cardLight border border-tamas-border hover:border-tamas-cyan/50 text-[10px] font-bold text-tamas-cyan flex items-center justify-center space-x-1.5 transition-all shadow-sm"
          >
            <span>VIEW ON MARINE MAP →</span>
          </button>
        </div>

      </div>

    </div>
  );
};
