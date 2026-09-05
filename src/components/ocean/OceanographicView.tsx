import React from 'react';
import { PolarDriftMap } from './PolarDriftMap';
import { CTDDepthProfiler } from './CTDDepthProfiler';
import { AtmosphericStripCharts } from './AtmosphericStripCharts';
import { HexDecoderStudio } from './HexDecoderStudio';

export const OceanographicView: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Top Row: Polar Stereographic Drift Map with 60°S Geofence */}
      <div>
        <PolarDriftMap />
      </div>

      {/* Middle Row: Scientific Inverted CTD Profiler */}
      <div>
        <CTDDepthProfiler />
      </div>

      {/* Meteorological & Atmospheric Real-Time Strip Charts */}
      <div>
        <AtmosphericStripCharts />
      </div>

      {/* Hex Decoder Studio */}
      <div>
        <HexDecoderStudio />
      </div>

    </div>
  );
};
