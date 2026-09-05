import React from 'react';
import { SparBuoy3DViewer } from './SparBuoy3DViewer';
import { PreDropChecklist } from './PreDropChecklist';
import { TacticalRadar } from './TacticalRadar';
import { GyroVectorDisplay } from './GyroVectorDisplay';

export const SarConsoleView: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Top Row: Interactive 3D Spar-Buoy Inspection + Diagnostic Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 3D WebGL Javelin Profile (7 cols) */}
        <div className="lg:col-span-7">
          <SparBuoy3DViewer />
        </div>

        {/* Pre-Drop Checklist & Interlock Latch (5 cols) */}
        <div className="lg:col-span-5">
          <PreDropChecklist />
        </div>
      </div>

      {/* Bottom Row: Tactical Recovery Radar + 6-DoF Inertial Gyro Horizon */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tactical Radar PPI (7 cols) */}
        <div className="lg:col-span-7">
          <TacticalRadar />
        </div>

        {/* 6-DoF Gyro Vector Attitude (5 cols) */}
        <div className="lg:col-span-5">
          <GyroVectorDisplay />
        </div>
      </div>

    </div>
  );
};
