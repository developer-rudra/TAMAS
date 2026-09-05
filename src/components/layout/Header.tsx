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
            {/* Custom Tactical Buoy Hub Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-tamas-card border border-tamas-border text-tamas-info shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" fill="#4FA3B8" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="font-extrabold text-lg tracking-widest text-tamas-text font-sans">
                  T.A.M.A.S.
                </h1>
                
                {/* System Status Pill */}
                <div className={`flex items-center space-x-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  isDistress 
                    ? 'bg-tamas-critical/15 text-tamas-critical border border-tamas-critical/40 animate-pulse'
                    : 'tamas-tag-green'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isDistress ? 'bg-tamas-critical' : 'bg-tamas-operational'}`} />
                  <span className="font-semibold text-[11px] tracking-wide">
                    {isDistress ? 'EMERGENCY TAKEOVER' : 'SYSTEM ONLINE'}
                  </span>
                </div>
              </div>
              
              <p className="text-[11px] text-tamas-textMuted tracking-normal">
                Tactical Autonomous Marine Analysis System
              </p>
            </div>
          </div>

          {/* Right: Mission Metadata */}
          <div className="flex items-center space-x-6 text-xs text-tamas-textMuted">
            
            {/* Mission Status */}
            <div className="hidden sm:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block">
                MISSION STATUS
              </span>
              <span className="text-xs font-semibold text-tamas-text">
                Monitoring Mission
              </span>
            </div>

            {/* Last Updated */}
            <div className="hidden md:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block">
                LAST UPDATED
              </span>
              <span className="text-xs font-mono font-medium text-tamas-text">
                {utcTime}
              </span>
              <span className="text-[10px] text-tamas-textMuted block font-mono">
                {currentDate}
              </span>
            </div>

            {/* Connection */}
            <div className="hidden lg:block text-right">
              <span className="text-[10px] tracking-wider uppercase text-tamas-textMuted/70 block">
                CONNECTION
              </span>
              <div className="flex items-center justify-end space-x-1.5 text-xs font-medium text-tamas-operational">
                <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational" />
                <span>Connected</span>
                <Signal className="w-3.5 h-3.5 text-tamas-operational inline ml-0.5" />
              </div>
            </div>

            {/* Simulation Speed & Mute Tray */}
            <div className="flex items-center bg-tamas-card px-2 py-1 rounded-lg border border-tamas-border space-x-1 text-xs">
              <button
                onClick={togglePause}
                title={isPaused ? "Resume Simulation" : "Pause Simulation"}
                className={`p-1 rounded hover:bg-tamas-bg ${isPaused ? 'text-tamas-warning' : 'text-tamas-textMuted hover:text-white'}`}
              >
                {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              </button>

              <button
                onClick={() => setSimulationSpeed(1.0)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                  simulationSpeed === 1.0 && !isPaused ? 'bg-tamas-bg text-tamas-info font-bold' : 'text-tamas-textMuted'
                }`}
              >
                1x
              </button>

              <button
                onClick={() => setSimulationSpeed(5.0)}
                className={`flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono ${
                  simulationSpeed === 5.0 && !isPaused ? 'bg-tamas-bg text-tamas-info font-bold' : 'text-tamas-textMuted'
                }`}
              >
                <FastForward className="w-2.5 h-2.5 mr-0.5" />
                <span>5x</span>
              </button>

              <button
                onClick={toggleAudioMute}
                title={audioMuted ? "Unmute Audio" : "Mute Audio"}
                className="p-1 rounded text-tamas-textMuted hover:text-white"
              >
                {audioMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-tamas-info" />}
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 text-tamas-textMuted">
              <button className="p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-md hover:bg-tamas-card hover:text-white transition-colors">
                <Menu className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: NAVIGATION TABS */}
        <nav className="flex items-center space-x-7 pt-1 text-xs">
          {[
            { id: 'monitoring', label: 'Live Monitoring' },
            { id: 'device', label: 'Device Overview' },
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
