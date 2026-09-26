import React, { useEffect } from 'react';
import { useMissionStore } from './store/useMissionStore';
import { Header } from './components/layout/Header';
import { DistressModal } from './components/common/DistressModal';

// 9 Core Dashboard Sections
import { SystemHealthPanel } from './components/dashboard/SystemHealthPanel';       // Section 1
import { ComponentStatusPanel } from './components/dashboard/ComponentStatusPanel';   // Section 8
import { DeviceOverviewPanel } from './components/dashboard/DeviceOverviewPanel';     // Section 2
import { SelectedComponentPanel } from './components/dashboard/SelectedComponentPanel'; // Section 6
import { LiveOceanDataPanel } from './components/dashboard/LiveOceanDataPanel';       // Section 3
import { RecoveryRadarPanel } from './components/dashboard/RecoveryRadarPanel';       // Section 4
import { AlertCenterPanel } from './components/dashboard/AlertCenterPanel';           // Section 5
import { SensorAnalyticsPanel } from './components/dashboard/SensorAnalyticsPanel';   // Section 7
import { PreDropChecklistPanel } from './components/dashboard/PreDropChecklistPanel'; // Section 9

// Other Dedicated Nav Tabs
import { PolarDriftMap } from './components/ocean/PolarDriftMap';
import { CTDDepthProfiler } from './components/ocean/CTDDepthProfiler';
import { HexDecoderStudio } from './components/ocean/HexDecoderStudio';
import { AtmosphericStripCharts } from './components/ocean/AtmosphericStripCharts';
import { MarineMap } from './components/map/MarineMap';
import { AlertSystemPanel } from './components/dashboard/AlertSystemPanel';

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
    <div className="min-h-screen flex flex-col bg-tamas-bg text-tamas-text font-sans selection:bg-tamas-cyan/30 selection:text-tamas-cyan">
      
      {/* Top Header Navigation (T.A.M.A.S. - Telemetry Array for Marine and Atmospheric Sensing) */}
      <Header />

      {/* Emergency Takeover Banner (Active during >60° tilt override or emergency trigger) */}
      {currentPacket.distress.sasrActive && (
        <div className="bg-tamas-critical text-white px-5 py-2.5 border-b border-red-500/80 shadow-lg animate-pulse">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span className="font-bold tracking-wider">
                SAS&amp;R 406.05 MHz ACTIVE — EMERGENCY BEACON TRANSMITTING TO INMCC BANGALORE / COSPAS-SARSAT
              </span>
            </div>
            <span className="font-bold">
              TILT OVERRIDE: {currentPacket.gyro.tiltAngle}° (&gt;60° CRITICAL CUTOFF)
            </span>
          </div>
        </div>
      )}

      {/* Main Mission Dashboard Content Area */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto p-4 sm:p-5 space-y-4">
        
        {/* ========================================================================= */}
        {/* TAB 1: LIVE MONITORING (Comprehensive 9-Section Mission Control Dashboard) */}
        {/* ========================================================================= */}
        {activeNavTab === 'monitoring' && (
          <div className="space-y-4">
            
            {/* Top 3-Column Core Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* LEFT COLUMN: Section 1 (SYSTEM HEALTH) & Section 8 (COMPONENT STATUS) (3 cols) */}
              <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
                <SystemHealthPanel />
                <ComponentStatusPanel />
              </div>

              {/* CENTER COLUMN: Section 2 (DEVICE OVERVIEW - Visual Centerpiece) & Section 6 (SELECTED COMPONENT) (6 cols) */}
              <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
                <div className="flex-1 min-h-[460px] sm:min-h-[500px]">
                  <DeviceOverviewPanel />
                </div>
                <SelectedComponentPanel />
              </div>

              {/* RIGHT COLUMN: Section 3 (LIVE OCEAN DATA), Section 4 (RECOVERY RADAR), Section 5 (ALERT CENTER) (3 cols) */}
              <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
                <LiveOceanDataPanel />
                <RecoveryRadarPanel />
                <AlertCenterPanel />
              </div>

            </div>

            {/* Bottom Row: Section 7 (SENSOR ANALYTICS) & Section 9 (PRE-DROP CHECKLIST) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* SENSOR ANALYTICS (7 cols) */}
              <div className="lg:col-span-7">
                <SensorAnalyticsPanel />
              </div>

              {/* PRE-DROP CHECKLIST (5 cols) */}
              <div className="lg:col-span-5">
                <PreDropChecklistPanel />
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DEVICE OVERVIEW (CAD & Engineering Showcase)                       */}
        {/* ========================================================================= */}
        {activeNavTab === 'device' && (
          <div className="space-y-4">
            <div className="min-h-[560px]">
              <DeviceOverviewPanel />
            </div>

            <SelectedComponentPanel />
            
            <div className="tamas-card p-5 space-y-3">
              <h3 className="text-xs font-bold text-tamas-text uppercase tracking-wider border-b border-tamas-border/60 pb-2 font-sans flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-tamas-cyan" />
                <span>STRUCTURAL SPECIFICATIONS &amp; BUOYANCY MATRIX</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
                  <span className="font-bold text-tamas-cyan block text-xs">Apex Radome &amp; Mast</span>
                  <p className="text-tamas-textMuted mt-1 text-[11px] leading-relaxed">
                    60°+ PTFE-coated fiberglass cone designed for zero ice accretion and aerodynamic wind shedding.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
                  <span className="font-bold text-tamas-orange block text-xs">Buoyancy Collar &amp; Spar</span>
                  <p className="text-tamas-textMuted mt-1 text-[11px] leading-relaxed">
                    Polyurea-armored closed-cell marine foam collar providing 120 kg net buoyancy with 13.7:1 slender draft spar column.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-tamas-cardInner border border-tamas-borderSubtle">
                  <span className="font-bold text-tamas-turquoise block text-xs">PTE Chamber &amp; Benthic Sonde</span>
                  <p className="text-tamas-textMuted mt-1 text-[11px] leading-relaxed">
                    Flooded with 20 cSt PDMS dielectric fluid, backed by dynamic FVMQ bellows and 1000m-rated titanium CTD cage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: MARINE MAP (Interactive GIS, Buoy Telemetry, Drift Trail, Intercept)*/}
        {/* ========================================================================= */}
        {activeNavTab === 'map' && (
          <MarineMap />
        )}

        {/* ========================================================================= */}
        {/* TAB 4: OCEAN DATA (Polar Drift, CTD Profiler, Strip Charts, Hex Studio)   */}
        {/* ========================================================================= */}
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

        {/* ========================================================================= */}
        {/* TAB 5: ALERTS (Dedicated Anomaly Forensic & Diagnostic Studio)            */}
        {/* ========================================================================= */}
        {activeNavTab === 'alerts' && (
          <div className="space-y-4">
            <AlertSystemPanel />
          </div>
        )}

      </main>

      {/* Autonomous Distress Forensic Modal */}
      <DistressModal />

      {/* Mission Control Footer */}
      <footer className="bg-tamas-bg border-t border-tamas-border/60 px-5 py-2.5 text-xs text-tamas-textMuted select-none mt-auto">
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 text-tamas-operational font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-tamas-operational animate-pulse" />
              <span>TELEMETRY STREAM: 4.8 KBPS LOCKED</span>
            </span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-text font-bold">T.A.M.A.S. SPAR-04</span>
            <span className="text-tamas-border hidden md:inline">|</span>
            <span className="hidden md:inline text-tamas-textMuted">
              CO-OPERATIONAL: INCOIS / NCPOR / INMCC
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span>FRAME #{currentPacket.packetSequence}</span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-cyan font-bold">BUS: {currentPacket.power.lisocl2CellVoltage}V</span>
            <span className="text-tamas-border">|</span>
            <span className="text-tamas-turquoise">PTE: {currentPacket.pte.pdmsFluidPressureBar} BAR</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
