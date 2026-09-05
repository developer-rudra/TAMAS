import React, { useEffect, useRef, useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { TelemetryPacket } from '../../types/telemetry';
import { 
  Globe, 
  Satellite, 
  Navigation, 
  MapPin, 
  Compass, 
  Layers, 
  Radio, 
  Wind,
  Info
} from 'lucide-react';

export const PolarDriftMap: React.FC = () => {
  const { currentPacket, packetHistory } = useMissionStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState<TelemetryPacket | null>(null);

  const isSouthOf60S = currentPacket.navic.latitude <= -60.0;

  // Render South Polar Stereographic Canvas Map
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Deep Void Ocean Background
      const oceanGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, cx);
      oceanGrad.addColorStop(0, '#0a1628');
      oceanGrad.addColorStop(1, '#04070b');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, w, h);

      // Polar Latitude Rings (50°S, 60°S GEOFENCE, 70°S, 80°S, South Pole 90°S)
      // South Pole is at cx, cy.
      // Scale: 90°S is center (r=0), 50°S is outer ring (r = maxR)
      const maxR = Math.min(cx, cy) - 30;

      const latToRadius = (lat: number) => {
        // lat is negative: -90 to -50
        const absLat = Math.abs(lat);
        const norm = (90 - absLat) / 40; // 0 at -90°S, 1.0 at -50°S
        return Math.max(10, norm * maxR);
      };

      const lonToAngleRad = (lon: number) => {
        // lon in degrees: 0° is Prime Meridian (Top), 90°E is Right, 180° is Bottom, -90° (270°E) is Left
        return ((lon - 90) * Math.PI) / 180;
      };

      const coordsToXY = (lat: number, lon: number) => {
        const r = latToRadius(lat);
        const a = lonToAngleRad(lon);
        return {
          x: cx + r * Math.cos(a),
          y: cy + r * Math.sin(a)
        };
      };

      // Draw Latitude Graticules
      [-80, -70, -60, -50].forEach((lat) => {
        const r = latToRadius(lat);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);

        if (lat === -60) {
          // CRITICAL 60°S AUTO-GEOFENCING BOUNDARY LINE
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 2.0;
          ctx.setLineDash([8, 6]);
          ctx.stroke();
          ctx.setLineDash([]);

          // 60°S Geofence Label
          ctx.fillStyle = '#00f0ff';
          ctx.font = 'bold 11px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('60°00\'00"S AUTO-GEOFENCING BOUNDARY', cx, cy - r - 8);
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1.0;
          ctx.setLineDash([3, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`${Math.abs(lat)}°S`, cx, cy - r + 11);
        }
      });

      // Longitude Meridians (every 45 degrees)
      [0, 45, 90, 135, 180, 225, 270, 315].forEach((deg) => {
        const a = ((deg - 90) * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxR * Math.cos(a), cy + maxR * Math.sin(a));
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText(`${deg}°E`, cx + (maxR + 15) * Math.cos(a), cy + (maxR + 15) * Math.sin(a));
      });

      // Procedural Stylized Antarctic Landmass (Stylized Polar Ice Cap)
      ctx.beginPath();
      const antarcticPoints = [
        { lat: -70, lon: 0 },
        { lat: -72, lon: 20 },
        { lat: -68, lon: 40 },
        { lat: -66, lon: 65 }, // Enderby Land / Amery Ice Shelf
        { lat: -67, lon: 90 },
        { lat: -66, lon: 120 },
        { lat: -67, lon: 140 },
        { lat: -71, lon: 170 }, // Ross Sea
        { lat: -78, lon: 180 }, // Ross Ice Shelf
        { lat: -74, lon: -150 },
        { lat: -72, lon: -110 },
        { lat: -65, lon: -65 },  // Antarctic Peninsula
        { lat: -74, lon: -50 },  // Weddell Sea / Ronne Ice Shelf
        { lat: -76, lon: -30 }
      ];

      antarcticPoints.forEach((p, idx) => {
        const pt = coordsToXY(p.lat, p.lon);
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();

      ctx.fillStyle = 'rgba(20, 35, 55, 0.75)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // South Pole Center Marker
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.fillText('SOUTH POLE (90°S)', cx, cy + 14);

      // Antarctic Circumpolar Current (ACC) West Wind Drift flow arrows
      const accR = latToRadius(-56);
      ctx.beginPath();
      ctx.arc(cx, cy, accR, 0.2, 1.8);
      ctx.strokeStyle = 'rgba(0, 163, 255, 0.25)';
      ctx.lineWidth = 12;
      ctx.stroke();

      // DRAW HISTORICAL BREADCRUMB TRAIL
      if (packetHistory.length > 1) {
        ctx.beginPath();
        packetHistory.forEach((pkt, idx) => {
          const pt = coordsToXY(pkt.navic.latitude, pkt.navic.longitude);
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw individual ping markers
        packetHistory.forEach((pkt, idx) => {
          const pt = coordsToXY(pkt.navic.latitude, pkt.navic.longitude);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, idx === packetHistory.length - 1 ? 5 : 2.5, 0, Math.PI * 2);
          ctx.fillStyle = pkt.distress.sasrActive ? '#ff2e54' : '#00f0ff';
          ctx.fill();
        });
      }

      // CURRENT SPAR-BUOY POSITION
      const buoyPt = coordsToXY(currentPacket.navic.latitude, currentPacket.navic.longitude);

      // Animated Pulse Ring around buoy
      const time = Date.now() / 1000;
      const pulseSize = 8 + 8 * (time % 2);
      ctx.beginPath();
      ctx.arc(buoyPt.x, buoyPt.y, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = currentPacket.distress.sasrActive 
        ? `rgba(255, 46, 84, ${1 - (time % 2) / 2})`
        : `rgba(0, 240, 255, ${1 - (time % 2) / 2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Core Buoy Marker
      ctx.beginPath();
      ctx.arc(buoyPt.x, buoyPt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = currentPacket.distress.sasrActive ? '#ff2e54' : '#00f0ff';
      ctx.shadowColor = currentPacket.distress.sasrActive ? '#ff2e54' : '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Drift Vector Arrow
      const driftAngleRad = lonToAngleRad(currentPacket.navic.longitude) + Math.PI / 2;
      const vectorLen = 28;
      ctx.beginPath();
      ctx.moveTo(buoyPt.x, buoyPt.y);
      ctx.lineTo(buoyPt.x + vectorLen * Math.cos(driftAngleRad), buoyPt.y + vectorLen * Math.sin(driftAngleRad));
      ctx.strokeStyle = '#ffb020';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label at Buoy
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`T.A.M.A.S. SPAR-04`, buoyPt.x + 12, buoyPt.y - 6);
      ctx.fillStyle = isSouthOf60S ? '#60a5fa' : '#22d3ee';
      ctx.fillText(`${Math.abs(currentPacket.navic.latitude)}°S, ${Math.abs(currentPacket.navic.longitude)}°E`, buoyPt.x + 12, buoyPt.y + 7);

      // SATELLITE UPLINK VECTOR
      if (isSouthOf60S) {
        // LEO Polar Satellite Pass Footprint Cone (ARGOS/EOS-06)
        ctx.beginPath();
        ctx.arc(buoyPt.x, buoyPt.y, 45, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.4)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // Line-of-sight ray towards INSAT-3D at Geostationary 74°E / 82°E
        const insatPt = coordsToXY(-45, 74); // Equator-ward vector
        ctx.beginPath();
        ctx.moveTo(buoyPt.x, buoyPt.y);
        ctx.lineTo(insatPt.x, insatPt.y);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [currentPacket, packetHistory, isSouthOf60S]);

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      {/* Header & Geofence Mode Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <Globe className="w-5 h-5 text-cyber-cyan animate-pulse" />
          <span className="text-sm font-bold text-slate-200 tracking-wider">
            SOUTHERN OCEAN 2D/3D DRIFT TRAJECTORY &amp; GEOFENCE
          </span>
        </div>

        {/* 60°S Geofencing Status Card */}
        <div className="flex items-center space-x-2">
          {isSouthOf60S ? (
            <div className="flex items-center space-x-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/50 text-blue-300 text-xs">
              <Satellite className="w-4 h-4 text-blue-400" />
              <div>
                <span className="font-bold">SOUTH OF 60°S: </span>
                <span>ARGOS / EOS-06 LEO POLAR PASS (401.65 MHz)</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs">
              <Radio className="w-4 h-4 text-cyber-cyan" />
              <div>
                <span className="font-bold">NORTH OF 60°S: </span>
                <span>ISRO INSAT DRT GEO UPLINK (402.75 MHz)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Map Canvas & Sidebar Readouts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
        
        {/* Canvas (3 cols) */}
        <div className="lg:col-span-3 flex justify-center bg-slate-950/80 rounded-xl p-3 border border-slate-800 overflow-hidden relative">
          <canvas
            ref={canvasRef}
            width={640}
            height={520}
            className="w-full max-w-[640px] aspect-[4/3] rounded-lg cursor-crosshair"
          />

          {/* Map Legend Floating Tag */}
          <div className="absolute bottom-5 left-5 bg-void-950/85 backdrop-blur-sm border border-slate-800 p-2.5 rounded-lg text-[10px] text-slate-400 space-y-1">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-0.5 bg-cyan-400 border-t border-dashed" />
              <span className="text-cyan-300 font-semibold">60°S Auto-Geofence Limit</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Breadcrumb Telemetry Ping</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-0.5 bg-amber-400" />
              <span>Drift Vector Projection</span>
            </div>
          </div>
        </div>

        {/* Drift & Orbit Metrics (1 col) */}
        <div className="space-y-3 text-xs">
          
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">DRIFT LATITUDE</div>
            <div className="text-xl font-bold text-cyan-300">
              {Math.abs(currentPacket.navic.latitude)}° S
            </div>
            <div className="text-[10px] text-slate-500">
              Delta to 60°S: {(60.0 - Math.abs(currentPacket.navic.latitude)).toFixed(4)}°
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">DRIFT LONGITUDE</div>
            <div className="text-xl font-bold text-cyan-300">
              {Math.abs(currentPacket.navic.longitude)}° E
            </div>
            <div className="text-[10px] text-slate-500">
              Kerguelen / Enderby Basin Sector
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">UPLINK TELEMETRY LINK BUDGET</div>
            <div className="flex justify-between">
              <span className="text-slate-400">Carrier SNR:</span>
              <span className="text-cyan-300 font-bold">+{currentPacket.uplink.signalSnrDb} dB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Receiver RSSI:</span>
              <span className="text-slate-200">{currentPacket.uplink.rssiDbm} dBm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Fade Margin:</span>
              <span className="text-emerald-400 font-bold">+{currentPacket.uplink.linkMarginDb} dB</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] space-y-1 text-slate-400">
            <div className="font-semibold text-slate-300">ANTARCTIC CIRCUMPOLAR CURRENT</div>
            <div>Velocity: ~1.1 knots (0.57 m/s)</div>
            <div>Direction: 082° True (Eastward)</div>
            <div>Bathymetry: 3,840m Abyss</div>
          </div>

        </div>

      </div>

    </div>
  );
};
