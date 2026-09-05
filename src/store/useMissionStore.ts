import { create } from 'zustand';
import { 
  ActiveRole, 
  ActiveNavTab,
  TelemetryPacket, 
  SubsystemStatus, 
  RadarContact, 
  VesselState, 
  CTDProfilePoint 
} from '../types/telemetry';
import { simEngine } from '../services/simulationEngine';
import { soundFx } from '../services/audioSynthesizer';

export type AnalyticsTab = 'temp' | 'depth' | 'pressure' | 'battery' | 'wave';

interface MissionStore {
  // Navigation & Role
  activeRole: ActiveRole;
  setActiveRole: (role: ActiveRole) => void;
  activeNavTab: ActiveNavTab;
  setActiveNavTab: (tab: ActiveNavTab) => void;
  activeAnalyticsTab: AnalyticsTab;
  setActiveAnalyticsTab: (tab: AnalyticsTab) => void;

  // Real-time Telemetry
  currentPacket: TelemetryPacket;
  packetHistory: TelemetryPacket[];
  radarContact: RadarContact;
  vessel: VesselState;
  ctdProfile: CTDProfilePoint[];

  // Subsystems & 3D Hotspot Inspection
  subsystems: SubsystemStatus[];
  selectedHotspotId: SubsystemStatus['id'] | null;
  setSelectedHotspotId: (id: SubsystemStatus['id'] | null) => void;

  // Drop Authorization
  dropSafetyCoverOpen: boolean;
  dropAuthorized: boolean;
  dropTimestamp: string | null;
  toggleSafetyCover: () => void;
  authorizeDrop: () => void;

  // Emergency / Distress
  emergencyModalOpen: boolean;
  dismissDistressModal: () => void;
  openDistressModal: () => void;
  disarmDistressAnomaly: () => void;

  // Simulation Controls
  simulationSpeed: number;
  isPaused: boolean;
  setSimulationSpeed: (speed: number) => void;
  togglePause: () => void;
  triggerIcebergAnomaly: (active: boolean) => void;
  toggleGeofencePosition: () => void;

  // Hex Decoder Studio
  customHexInput: string;
  setCustomHexInput: (hex: string) => void;
  injectCustomHex: (hex: string) => boolean;

  // Audio settings
  audioMuted: boolean;
  toggleAudioMute: () => void;

  // Engine clock tick
  tick: () => void;
}

const INITIAL_SUBSYSTEMS: SubsystemStatus[] = [
  {
    id: 'core_avionics',
    name: 'Core Avionics Architecture',
    category: 'Avionics & Relays',
    state: 'PASS',
    details: 'THEJAS32 32-bit RISC-V SoC (RV32IM @ 100MHz), Dual NavIC GNSS receiver, ISRO INSAT DRT 402.75 MHz transmitter, ARGOS polar LEO transceiver.',
    metrics: {
      'CPU Core': 'THEJAS32 RISC-V (100 MHz)',
      'CRC Flash Integrity': 'PASS (0x9A4F)',
      'NavIC TCXO Drift': '0.18 ppm',
      'INSAT DRT RF Power': '4.8 W (+36.8 dBm)',
      'Argos LEO Uplink': 'STANDBY / PASS READY'
    }
  },
  {
    id: 'power_reservoir',
    name: 'Power Reservoir & Passivation',
    category: 'Primary Energy Storage',
    state: 'PASS',
    details: 'Dual 3.6V Primary LiSOCl2 bobbin cells with Hybrid Layer Capacitor (HLC 1550) pulse discharge buffer. Zero internal shorts detected.',
    metrics: {
      'LiSOCl2 Bus': '3.642 V',
      'HLC 1550 TMV': '3.615 V',
      'Capacitor Charge': '98.6%',
      'ESR Impedance': '118 mΩ',
      'Passivation State': 'NOMINAL (DE-PASSIVATED)'
    }
  },
  {
    id: 'pte_suspension',
    name: 'PTE Suspension & Silicone Bellows',
    category: 'Pressure-Tolerant Enclosure',
    state: 'PASS',
    details: 'Pressure-Tolerant Electronics (PTE) immersed in dielectric PDMS silicone oil. Dynamic FVMQ fluorosilicone "lung" bellows compensates for ocean pressure.',
    metrics: {
      'PDMS Oil Pressure': '1.042 bar',
      'Zero-Void Saturation': '100.0%',
      'Bellows Displacement': '12.8 mm',
      'FVMQ Elasticity': '96.5% NOMINAL',
      'Hermetic Seal': 'HERMETIC PASS'
    }
  },
  {
    id: 'sensor_suite',
    name: 'Polar Marine & Atmospheric Suite',
    category: 'Sensor Arrays',
    state: 'PASS',
    details: 'Acoustic resonance ultrasonic anemometer (wind velocity/heading), atmospheric dual-die barometric MEMS, RS485 benthic micro-CTD sonde at 7m spar base.',
    metrics: {
      'Anemometer Transducers': '4 / 4 ACTIVE',
      'Barometric Transducer': 'MS5837 DUAL (0.01 hPa)',
      'Micro-CTD RS485 Sonde': 'ONLINE (7.1m base)',
      'Conductivity Cell Cal': 'CALIBRATED VALID',
      'Acoustic Range Pinger': 'STANDBY'
    }
  }
];

export const useMissionStore = create<MissionStore>((set, get) => {
  const initialPacket = simEngine.tick();
  const initialRadar = simEngine.calculateRadarContact();
  const initialVessel = simEngine.getVessel();
  const initialCtd = simEngine.getCTDProfile();

  return {
    activeRole: 'sar',
    setActiveRole: (role) => {
      soundFx.playTactileClick();
      set({ activeRole: role });
    },
    activeNavTab: 'monitoring',
    setActiveNavTab: (tab) => {
      soundFx.playTactileClick();
      set({ activeNavTab: tab });
    },
    activeAnalyticsTab: 'temp',
    setActiveAnalyticsTab: (tab) => {
      soundFx.playTactileClick();
      set({ activeAnalyticsTab: tab });
    },

    currentPacket: initialPacket,
    packetHistory: [initialPacket],
    radarContact: initialRadar,
    vessel: initialVessel,
    ctdProfile: initialCtd,

    subsystems: INITIAL_SUBSYSTEMS,
    selectedHotspotId: null,
    setSelectedHotspotId: (id) => {
      soundFx.playTactileClick();
      set({ selectedHotspotId: id });
    },

    dropSafetyCoverOpen: false,
    dropAuthorized: false,
    dropTimestamp: null,
    toggleSafetyCover: () => {
      soundFx.playTactileClick();
      set((state) => ({ dropSafetyCoverOpen: !state.dropSafetyCoverOpen }));
    },
    authorizeDrop: () => {
      const { dropSafetyCoverOpen, dropAuthorized } = get();
      if (!dropSafetyCoverOpen || dropAuthorized) return;
      soundFx.playAuthorizeDrop();
      set({
        dropAuthorized: true,
        dropTimestamp: new Date().toISOString()
      });
    },

    emergencyModalOpen: false,
    dismissDistressModal: () => {
      soundFx.playTactileClick();
      set({ emergencyModalOpen: false });
    },
    openDistressModal: () => {
      set({ emergencyModalOpen: true });
    },
    disarmDistressAnomaly: () => {
      simEngine.setForcedTiltAnomaly(false);
      soundFx.stopDistressAlarm();
      soundFx.playTactileClick();
      set({ emergencyModalOpen: false });
    },

    simulationSpeed: 1.0,
    isPaused: false,
    setSimulationSpeed: (speed) => {
      simEngine.setSpeed(speed);
      soundFx.playTactileClick();
      set({ simulationSpeed: speed, isPaused: speed === 0 });
    },
    togglePause: () => {
      const paused = simEngine.togglePause();
      soundFx.playTactileClick();
      set({ isPaused: paused });
    },
    triggerIcebergAnomaly: (active) => {
      simEngine.setForcedTiltAnomaly(active);
      soundFx.playTactileClick();
      if (active) {
        soundFx.startDistressAlarm();
        set({ emergencyModalOpen: true });
      } else {
        soundFx.stopDistressAlarm();
      }
    },
    toggleGeofencePosition: () => {
      simEngine.toggleGeofencePosition();
      soundFx.playTactileClick();
    },

    customHexInput: '',
    setCustomHexInput: (hex) => set({ customHexInput: hex }),
    injectCustomHex: (hex) => {
      try {
        const decoded = simEngine.decodeHexFields(hex);
        if (decoded.length >= 8) {
          soundFx.playHexBurst();
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },

    audioMuted: false,
    toggleAudioMute: () => {
      const next = !get().audioMuted;
      soundFx.setMuted(next);
      set({ audioMuted: next });
    },

    tick: () => {
      const packet = simEngine.tick();
      const radar = simEngine.calculateRadarContact();
      const vessel = simEngine.getVessel();

      // Sound notifications for events
      if (packet.distress.sasrActive && !get().audioMuted) {
        soundFx.startDistressAlarm();
      } else if (!packet.distress.sasrActive) {
        soundFx.stopDistressAlarm();
      }

      // Auto open modal on new emergency trigger
      if (packet.distress.sasrActive && !get().emergencyModalOpen && packet.gyro.sustainedTiltSeconds >= 2.0) {
        set({ emergencyModalOpen: true });
      }

      set((state) => {
        const newHistory = [...state.packetHistory, packet];
        if (newHistory.length > 80) newHistory.shift();
        return {
          currentPacket: packet,
          packetHistory: newHistory,
          radarContact: radar,
          vessel: vessel
        };
      });
    }
  };
});
