import React, { useEffect } from 'react';
import { useMissionStore } from './store/useMissionStore';
import { Header } from './components/layout/Header';
import { DistressModal } from './components/common/DistressModal';
import { SystemHealthPanel } from './components/dashboard/SystemHealthPanel';
import { DeviceOverviewPanel } from './components/dashboard/DeviceOverviewPanel';
import { LiveOceanDataPanel } from './components/dashboard/LiveOceanDataPanel';
import { SensorAnalyticsPanel } from './components/dashboard/SensorAnalyticsPanel';
import { PreDropChecklistPanel } from './components/dashboard/PreDropChecklistPanel';
import { AlertSystemPanel } from './components/dashboard/AlertSystemPanel';
import { PolarDriftMap } from './components/ocean/PolarDriftMap';
import { CTDDepthProfiler } from './components/ocean/CTDDepthProfiler';
import { HexDecoderStudio } from './components/ocean/HexDecoderStudio';
import { AtmosphericStripCharts } from './components/ocean/AtmosphericStripCharts';
import { MarineMap } from './components/map/MarineMap';

export const App: React.FC = () => {
  const { 
    activeNavTab, 
    tick, 
    currentPacket, 
    simulationSpeed, 
    isPaused 
  } = useMissionStore();

  // Master simulation clock tick (1.0 Hz base)
  useEffect(() => {
    if (isPaused) return;
    const intervalMs = Math.max(100, Math.round(1000 / simulationSpeed));
    const timer = setInterval(() => {
      tick();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [tick, simulationSpeed, isPaused]);

  return (
    <div className="min-h-screen flex flex-col bg-tamas-bg text-tamas-text font-sans selection:bg-tamas-info/30 selection:text-tamas-info">
      
      {/* Top Header Navigation (Matching Reference Image) */}
      <Header />

      {/* Emergency Takeover Banner (Active only during >60° tilt override) */}
      {currentPacket.distress.sasrActive && (
        <div className="bg-tamas-critical text-white px-4 py-2 border-b border-red-400 shadow-md">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span className="font-bold tracking-wider">
                SAS&amp;R 406.05 MHz ACTIVE — EMERGENCY BEACON TRANSMITTING TO INMCC BANGALORE
              </span>
            </div>
            <span>TILT OVERRIDE: {currentPacket.gyro.tiltAngle}° (&gt;60° CRITICAL CUTOFF)</span>
          </div>
        </div>
      )}

      {/* Main Mission Dashboard Content Area */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto p-4 sm:p-5 space-y-4">
        
        {/* TAB 1: LIVE MONITORING (The Master Dashboard matching media_1788629877774.jpg) */}
        {activeNavTab === 'monitoring' && (
          <div className="space-y-4">
            
            {/* Top 3-Column Core Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* LEFT COLUMN: SYSTEM HEALTH & SYSTEM SUMMARY (3 cols) */}
              <div className="lg:col-span-3">
                <SystemHealthPanel />
              </div>

              {/* CENTER COLUMN: DEVICE OVERVIEW WITH 3D OCEAN WATERLINE SCENE (6 cols) */}
              <div className="lg:col-span-6">
                <DeviceOverviewPanel />
              </div>

              {/* RIGHT COLUMN: LIVE OCEAN DATA + RADAR + ALERTS (3 cols) */}
              <div className="lg:col-span-3">
                <LiveOceanDataPanel />
              </div>

            </div>

            {/* Bottom Row: SENSOR ANALYTICS + PRE-DROP CHECKLIST & AUTHORIZE DROP */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* SENSOR ANALYTICS LINE GRAPH (7 cols) */}
              <div className="lg:col-span-7">
                <SensorAnalyticsPanel />
              </div>

              {/* PRE-DROP CHECKLIST & AUTHORIZE DROP (5 cols) */}
              <div className="lg:col-span-5">
                <PreDropChecklistPanel />
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: DEVICE OVERVIEW (CAD & Engineering Showcase) */}
        {activeNavTab === 'device' && (
          <div className="space-y-4">
            <DeviceOverviewPanel />
            
            <div className="tamas-card p-5 space-y-3">
              <h3 className="text-xs font-bold text-tamas-text uppercase tracking-wider border-b border-tamas-border/60 pb-2">
                STRUCTURAL SPECIFICATIONS &amp; BUOYANCY MATRIX
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40">
                  <span className="font-bold text-tamas-info block">Apex Radome &amp; Mast</span>
                  <p className="text-tamas-textMuted mt-1">60°+ PTFE-coated fiberglass cone designed for zero ice accretion and aerodynamic wind shedding.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40">
                  <span className="font-bold text-tamas-orange block">Buoyancy Collar &amp; Spar</span>
                  <p className="text-tamas-textMuted mt-1">Polyurea-armored closed-cell marine foam collar providing 120 kg net buoyancy with 13.7:1 slender draft spar column.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#1A2733] border border-tamas-border/40">
                  <span className="font-bold text-tamas-operational block">PTE Chamber &amp; Benthic Sonde</span>
                  <p className="text-tamas-textMuted mt-1">Flooded with 20 cSt PDMS dielectric fluid, backed by dynamic FVMQ bellows and 1000m-rated titanium CTD cage.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MARINE MAP (Interactive GIS, Buoy Telemetry, Drift Trail, Geofence, Recovery Intercept) */}
        {activeNavTab === 'map' && (
          <MarineMap />
        )}

        {/* TAB 4: OCEAN DATA (Polar Drift, CTD Profiler, Atmospheric Strip Charts, Hex Decoder) */}
        {activeNavTab === 'ocean' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <PolarDriftMap />
              <CTDDepthProfiler />
            </div>
            <AtmosphericStripCharts />
            <HexDecoderStudio />
          </div>
        )}

        {/* TAB 4: ALERTS (Anomaly Manager & Drop Authorization) */}
        {activeNavTab === 'alerts' && (
          <div className="space-y-4">
            <AlertSystemPanel />
          </div>
        )}

      </main>

      {/* Autonomous Distress Forensic Modal */}
      <DistressModal />

      {/* Mission Control Footer */}
      <footer className="bg-tamas-bg border-t border-tamas-border/60 px-5 py-2.5 text-xs text-tamas-textMuted select-none">
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-tamas-operational font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational" />
              <span>TELEMETRY STREAM: 4.8 KBPS LOCKED</span>
            </span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-text">T.A.M.A.S. SPAR-04</span>
            <span className="text-tamas-border hidden md:inline">|</span>
            <span className="hidden md:inline text-tamas-textMuted">
              CO-OPERATIONAL: INCOIS / NCPOR / INMCC
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span>FRAME #{currentPacket.packetSequence}</span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-info">BUS: {currentPacket.power.lisocl2CellVoltage}V</span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-operational">PTE: {currentPacket.pte.pdmsFluidPressureBar} BAR</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
