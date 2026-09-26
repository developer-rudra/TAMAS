import React, { useEffect, useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { ActiveNavTab } from '../../types/telemetry';
import { 
  Radio, 
  Satellite, 
  Bell, 
  Settings, 
  Menu, 
  Signal, 
  CheckCircle2, 
  Layers, 
  Waves, 
  AlertTriangle,
  Activity,
  Play,
  Pause,
  FastForward,
  Volume2,
  VolumeX
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    activeNavTab,
    setActiveNavTab,
    currentPacket,
    isPaused,
    simulationSpeed,
    togglePause,
    setSimulationSpeed,
    audioMuted,
    toggleAudioMute
  } = useMissionStore();

  const [utcTime, setUtcTime] = useState<string>('22:54:31 UTC');
  const [currentDate, setCurrentDate] = useState<string>('25 Apr 2026');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toISOString().slice(11, 19) + ' UTC';
      const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      setUtcTime(timeStr);
      setCurrentDate(dateStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDistress = currentPacket.distress.sasrActive;

  return (
    <header className="bg-tamas-bg border-b border-tamas-border/70 px-5 pt-3 pb-0 select-none">
      <div className="max-w-[1920px] mx-auto space-y-2.5">
        
        {/* TOP ROW: BRANDING, STATUS, METADATA & QUICK CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: T.A.M.A.S. Logo + Title + Status Pill */}
          <div className="flex items-center space-x-3.5">
            {/* Custom High-Tech Oceanic Buoy Hub Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-tamas-card border border-tamas-border text-tamas-cyan shadow-lg shadow-cyan-950/40">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" fill="#00E5FF" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tamas-operational border-2 border-[#06121C] animate-pulse" />
            </div>

            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="font-extrabold text-xl tracking-widest text-tamas-text font-sans">
                  T.A.M.A.S.
                </h1>
                
                {/* System Online / Emergency Pill */}
                <div className={`flex items-center space-x-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  isDistress 
                    ? 'bg-tamas-critical/15 text-tamas-critical border border-tamas-critical/40 animate-pulse'
                    : 'tamas-tag-green'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isDistress ? 'bg-tamas-critical' : 'bg-tamas-operational'}`} />
                  <span className="font-semibold text-[11px] tracking-wider uppercase">
                    {isDistress ? 'EMERGENCY TAKEOVER' : 'SYSTEM ONLINE'}
                  </span>
                </div>
              </div>
              
              <p className="text-[11px] font-medium text-tamas-textMuted tracking-tight">
                Telemetry Array for Marine and Atmospheric Sensing
              </p>
            </div>
          </div>

          {/* Right: Mission Metadata & Controls */}
          <div className="flex items-center space-x-5 text-xs text-tamas-textMuted">
            
            {/* Mission Status */}
            <div className="hidden sm:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block font-mono">
                MISSION STATUS
              </span>
              <span className="text-xs font-semibold text-tamas-cyan flex items-center justify-end space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tamas-cyan animate-ping inline-block" />
                <span>SURFACE DRIFT ACTIVE</span>
              </span>
            </div>

            {/* Last Updated */}
            <div className="hidden md:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block font-mono">
                LAST UPDATED
              </span>
              <span className="text-xs font-mono font-bold text-tamas-text">
                {utcTime}
              </span>
              <span className="text-[10px] text-tamas-textMuted block font-mono">
                {currentDate}
              </span>
            </div>

            {/* Connection Status */}
            <div className="hidden lg:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block font-mono">
                CONNECTION STATUS
              </span>
              <div className="flex items-center justify-end space-x-1.5 text-xs font-medium text-tamas-operational font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational" />
                <span>4.8 KBPS LOCKED</span>
                <Signal className="w-3.5 h-3.5 text-tamas-operational inline ml-0.5" />
              </div>
            </div>

            {/* Simulation Speed & Controls */}
            <div className="flex items-center bg-tamas-card px-2.5 py-1.5 rounded-xl border border-tamas-border space-x-1.5 text-xs shadow-inner">
              <button
                onClick={togglePause}
                title={isPaused ? "Resume Simulation" : "Pause Simulation"}
                className={`p-1 rounded-lg transition-colors ${isPaused ? 'bg-tamas-warning/20 text-tamas-warning' : 'text-tamas-textMuted hover:text-tamas-cyan'}`}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setSimulationSpeed(1.0)}
                className={`px-2 py-0.5 rounded-lg text-[11px] font-mono transition-colors ${
                  simulationSpeed === 1.0 && !isPaused ? 'bg-tamas-bg text-tamas-cyan font-bold border border-tamas-cyan/30' : 'text-tamas-textMuted hover:text-white'
                }`}
              >
                1x
              </button>

              <button
                onClick={() => setSimulationSpeed(5.0)}
                className={`flex items-center px-2 py-0.5 rounded-lg text-[11px] font-mono transition-colors ${
                  simulationSpeed === 5.0 && !isPaused ? 'bg-tamas-bg text-tamas-cyan font-bold border border-tamas-cyan/30' : 'text-tamas-textMuted hover:text-white'
                }`}
              >
                <FastForward className="w-3 h-3 mr-0.5" />
                <span>5x</span>
              </button>

              <button
                onClick={toggleAudioMute}
                title={audioMuted ? "Unmute Audio" : "Mute Audio"}
                className="p-1 rounded-lg text-tamas-textMuted hover:text-tamas-cyan transition-colors"
              >
                {audioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-tamas-cyan" />}
              </button>
            </div>

            {/* User Controls */}
            <div className="flex items-center space-x-1.5 text-tamas-textMuted">
              <button 
                onClick={() => setActiveNavTab('alerts')}
                title="System Alerts"
                className="p-2 rounded-xl bg-tamas-card border border-tamas-border hover:border-tamas-cyan/40 hover:text-tamas-cyan transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-tamas-warning" />
              </button>
              <button 
                title="Settings"
                className="p-2 rounded-xl bg-tamas-card border border-tamas-border hover:border-tamas-cyan/40 hover:text-tamas-cyan transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: NAVIGATION TABS */}
        <nav className="flex items-center space-x-7 pt-1 text-xs">
          {[
            { id: 'monitoring', label: 'Live Monitoring' },
            { id: 'device', label: 'Device Overview' },
            { id: 'map', label: 'Marine Map' },
            { id: 'ocean', label: 'Ocean Data' },
            { id: 'alerts', label: 'Alerts' }
          ].map((tab) => {
            const isActive = activeNavTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveNavTab(tab.id as ActiveNavTab)}
                className={`pb-2.5 px-0.5 font-medium transition-all relative ${
                  isActive
                    ? 'text-tamas-info font-semibold'
                    : 'text-tamas-textMuted hover:text-tamas-text'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-tamas-info rounded-full shadow-sm" />
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};
