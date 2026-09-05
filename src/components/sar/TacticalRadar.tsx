import React, { useEffect, useRef, useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { soundFx } from '../../services/audioSynthesizer';
import { 
  Compass, 
  Crosshair, 
  Navigation, 
  Radio, 
  Ship, 
  Target, 
  Clock, 
  Maximize2 
} from 'lucide-react';

export const TacticalRadar: React.FC = () => {
  const { currentPacket, radarContact, vessel } = useMissionStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [motionMode, setMotionMode] = useState<'relative' | 'north_up'>('relative');
  const [rangeScaleNm, setRangeScaleNm] = useState<number>(10);

  // Animate radar sweep and blip
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let sweepAngle = 0;

    const renderRadar = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) / 2 - 25;

      ctx.clearRect(0, 0, w, h);

      // Background void circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#070f1a';
      ctx.fill();

      // Range rings (4 concentric circles)
      [0.25, 0.5, 0.75, 1.0].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Label ring range
        const ringRange = (rangeScaleNm * ratio).toFixed(1);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(`${ringRange} NM`, cx + 4, cy - radius * ratio + 12);
      });

      // Crosshair Axes (N-S, E-W)
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Degree tick marks around compass outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let deg = 0; deg < 360; deg += 10) {
        const rad = (deg * Math.PI) / 180;
        const tickLength = deg % 30 === 0 ? 10 : 5;
        const x1 = cx + (radius - tickLength) * Math.cos(rad);
        const y1 = cy + (radius - tickLength) * Math.sin(rad);
        const x2 = cx + radius * Math.cos(rad);
        const y2 = cy + radius * Math.sin(rad);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = deg % 30 === 0 ? 'rgba(0, 240, 255, 0.6)' : 'rgba(0, 240, 255, 0.3)';
        ctx.lineWidth = deg % 30 === 0 ? 1.5 : 1;
        ctx.stroke();
      }

      // Compass Cardinal Labels (N, E, S, W or Ship-Centric 000, 090, 180, 270)
      ctx.fillStyle = '#00f0ff';
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (motionMode === 'relative') {
        ctx.fillText('000° (BOW)', cx, cy - radius - 12);
        ctx.fillText('090° (STBD)', cx + radius + 14, cy);
        ctx.fillText('180° (STERN)', cx, cy + radius + 12);
        ctx.fillText('270° (PORT)', cx - radius - 14, cy);
      } else {
        ctx.fillText('000° N', cx, cy - radius - 12);
        ctx.fillText('090° E', cx + radius + 14, cy);
        ctx.fillText('180° S', cx, cy + radius + 12);
        ctx.fillText('270° W', cx - radius - 14, cy);
      }

      // Center Vessel Marker (Own Ship)
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.fill();

      // Heading line from own ship
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, cy - 35);
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // ROTATING RADAR SWEEP LINE & PHOSPHOR CONE
      sweepAngle = (sweepAngle + 0.02) % (Math.PI * 2);
      
      const sweepGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGradient.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
      sweepGradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sweepAngle - 0.35, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();
      ctx.restore();

      // Leading sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(sweepAngle), cy + radius * Math.sin(sweepAngle));
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // TARGET BUOY BLIP COMPUTATION
      // Angle: relative bearing (converted from 12 o'clock CW) or true bearing
      const targetAngleDeg = motionMode === 'relative' ? radarContact.relativeBearingDeg : radarContact.trueBearingDeg;
      // Convert polar angle: 0° is up (-Y), 90° is right (+X)
      const targetRad = ((targetAngleDeg - 90) * Math.PI) / 180;
      const targetDistancePixels = Math.min(radius, (radarContact.rangeNm / rangeScaleNm) * radius);

      const targetX = cx + targetDistancePixels * Math.cos(targetRad);
      const targetY = cy + targetDistancePixels * Math.sin(targetRad);

      // Check if sweep line just swept past the target to play audio ping
      const sweepNorm = (sweepAngle + Math.PI * 2) % (Math.PI * 2);
      const targetNorm = (targetRad + Math.PI * 2) % (Math.PI * 2);
      if (Math.abs(sweepNorm - targetNorm) < 0.03) {
        soundFx.playRadarPing();
      }

      // Draw Target Blip with Persistence Glow
      ctx.beginPath();
      ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
      ctx.fillStyle = currentPacket.distress.sasrActive ? '#ff2e54' : '#00f0ff';
      ctx.shadowColor = currentPacket.distress.sasrActive ? '#ff2e54' : '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Target Crosshair / Strobe ring
      ctx.beginPath();
      ctx.arc(targetX, targetY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = currentPacket.distress.sasrActive ? 'rgba(255, 46, 84, 0.7)' : 'rgba(0, 240, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Target Label
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`T.A.M.A.S. [${radarContact.rangeNm} NM]`, targetX + 15, targetY - 4);
      ctx.fillStyle = currentPacket.distress.sasrActive ? '#ff2e54' : '#00f0ff';
      ctx.fillText(`BRG: ${radarContact.trueBearingDeg}°T`, targetX + 15, targetY + 8);

      animId = requestAnimationFrame(renderRadar);
    };

    renderRadar();

    return () => cancelAnimationFrame(animId);
  }, [radarContact, motionMode, rangeScaleNm, currentPacket.distress.sasrActive]);

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      {/* Top Header & Range Scale Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <Crosshair className="w-5 h-5 text-cyber-cyan animate-pulse" />
          <span className="text-sm font-bold text-slate-200 tracking-wider">
            TACTICAL RECOVERY RADAR (PPI)
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            {vessel.name} ({vessel.callsign})
          </span>
        </div>

        {/* Mode Toggles */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setMotionMode('relative')}
              className={`px-2.5 py-1 rounded transition-colors ${
                motionMode === 'relative' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              SHIP-CENTRIC
            </button>
            <button
              onClick={() => setMotionMode('north_up')}
              className={`px-2.5 py-1 rounded transition-colors ${
                motionMode === 'north_up' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              NORTH-UP
            </button>
          </div>

          <select
            value={rangeScaleNm}
            onChange={(e) => setRangeScaleNm(Number(e.target.value))}
            className="bg-slate-950 border border-slate-800 text-cyan-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
          >
            <option value={4}>4 NM SCALE</option>
            <option value={8}>8 NM SCALE</option>
            <option value={12}>12 NM SCALE</option>
            <option value={20}>20 NM SCALE</option>
          </select>
        </div>
      </div>

      {/* Dynamic Heading Tape */}
      <div className="relative overflow-hidden bg-slate-950/90 rounded-lg border border-slate-800 p-2 text-center text-xs">
        <div className="text-[10px] text-slate-400 mb-1 flex items-center justify-between px-3">
          <span>VESSEL COURSE: {vessel.heading}°</span>
          <span className="text-cyan-400 font-bold">TARGET BEARING: {radarContact.trueBearingDeg}° TRUE</span>
          <span>SPEED: {vessel.speedKnots} KTS</span>
        </div>
        
        {/* Visual Heading Tape */}
        <div className="relative h-6 bg-slate-900 rounded flex items-center justify-center font-bold text-cyan-200 border border-slate-800">
          <div className="absolute inset-y-0 w-1 bg-cyan-400 left-1/2 -translate-x-1/2 shadow-cyan-glow" />
          <div className="flex items-center space-x-8 text-[11px] text-slate-400">
            <span>{((vessel.heading - 20 + 360) % 360).toString().padStart(3, '0')}</span>
            <span>{((vessel.heading - 10 + 360) % 360).toString().padStart(3, '0')}</span>
            <span className="text-cyan-300 font-bold text-sm bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/40">
              {vessel.heading.toString().padStart(3, '0')}°
            </span>
            <span>{((vessel.heading + 10) % 360).toString().padStart(3, '0')}</span>
            <span>{((vessel.heading + 20) % 360).toString().padStart(3, '0')}</span>
          </div>
        </div>
      </div>

      {/* Radar Canvas & Live Intercept Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        
        {/* Radar Canvas (2 cols) */}
        <div className="lg:col-span-2 flex justify-center bg-slate-950/60 rounded-xl p-3 border border-slate-800">
          <canvas
            ref={canvasRef}
            width={440}
            height={440}
            className="w-full max-w-[440px] aspect-square rounded-full border border-cyan-500/30 shadow-cyan-glow"
          />
        </div>

        {/* Intercept Data Readouts (1 col) */}
        <div className="space-y-3">
          
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-cyan-500/30">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">RANGE TO BUOY</div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-bold text-cyan-300">{radarContact.rangeNm}</span>
              <span className="text-xs text-slate-400">NM ({radarContact.rangeKm} km)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">RELATIVE BEARING</div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-xl font-bold text-slate-200">{radarContact.relativeBearingDeg}°</span>
              <span className="text-xs text-slate-400">
                {radarContact.relativeBearingDeg > 180 ? 'PORT SIDE' : 'STARBOARD'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-[10px] text-slate-400">CPA (MIN DIST)</div>
              <div className="text-sm font-bold text-emerald-300 mt-0.5">{radarContact.cpaNm} NM</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-[10px] text-slate-400">ETI (INTERCEPT)</div>
              <div className="text-sm font-bold text-amber-300 mt-0.5">{radarContact.etiMinutes} MINS</div>
            </div>
          </div>

          {/* Coordinates Summary */}
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] space-y-1">
            <div className="text-slate-400 font-semibold mb-1">TARGET NavIC FIX:</div>
            <div className="flex justify-between">
              <span className="text-slate-500">Lat:</span>
              <span className="text-cyan-300 font-mono">{Math.abs(currentPacket.navic.latitude)}° S</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Lon:</span>
              <span className="text-cyan-300 font-mono">{Math.abs(currentPacket.navic.longitude)}° E</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
