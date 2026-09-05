import React, { useState } from 'react';
import { useMissionStore } from '../../store/useMissionStore';
import { DecodedFieldByteRange } from '../../types/telemetry';
import { soundFx } from '../../services/audioSynthesizer';
import { 
  Terminal, 
  Cpu, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  FileCode, 
  Copy, 
  Sparkles 
} from 'lucide-react';

export const HexDecoderStudio: React.FC = () => {
  const { 
    currentPacket, 
    packetHistory, 
    customHexInput, 
    setCustomHexInput, 
    injectCustomHex 
  } = useMissionStore();

  const [selectedField, setSelectedField] = useState<DecodedFieldByteRange | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [injectError, setInjectError] = useState<string | null>(null);

  const rawBytes = currentPacket.rawHex.split(' ');

  const handleByteClick = (byteIndex: number) => {
    soundFx.playTactileClick();
    const match = currentPacket.decodedFieldsMap.find(
      f => byteIndex >= f.startByte && byteIndex <= f.endByte
    );
    if (match) setSelectedField(match);
  };

  const isByteHighlighted = (byteIndex: number) => {
    if (!selectedField) return false;
    return byteIndex >= selectedField.startByte && byteIndex <= selectedField.endByte;
  };

  const handleCopyHex = () => {
    navigator.clipboard.writeText(currentPacket.rawHex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInject = () => {
    if (!customHexInput.trim()) {
      setInjectError('Please enter a valid 32-byte hex string');
      return;
    }
    const success = injectCustomHex(customHexInput.trim());
    if (success) {
      setInjectError(null);
    } else {
      setInjectError('Invalid packet format: Requires 32 hex bytes');
    }
  };

  // Preset quick payloads
  const loadPreset = (type: 'nominal' | 'distress' | 'argos') => {
    soundFx.playTactileClick();
    if (type === 'nominal') {
      setCustomHexInput('54 41 4D 01 66 DA 4A 1F FF 67 92 B0 00 68 5A C8 0E 3A 0E 1F 06 FB 26 5E FC 28 35 8E FC 0E 01 A2 9F');
    } else if (type === 'distress') {
      setCustomHexInput('54 41 4D 7F 66 DA 4A 24 FF 67 92 B0 00 68 5A C8 0E 1A 0E 00 44 E4 26 40 FC 18 42 8E FC 0E 01 CF 12');
    } else {
      setCustomHexInput('54 41 4D 01 66 DA 4A 2F FF 65 3C 10 00 68 62 F0 0E 38 0E 1D 08 02 26 58 FC 20 2E 90 FC 0E 01 88 B4');
    }
    setInjectError(null);
  };

  return (
    <div className="p-4 rounded-xl hud-glass border border-cyan-500/25 font-mono space-y-4">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-cyber-cyan animate-pulse" />
          <span className="text-sm font-bold text-slate-200 tracking-wider">
            ISRO INSAT DRT 4.8 KBPS TELEMETRY PACKET INGESTION &amp; HEX DECODER
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={handleCopyHex}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors"
          >
            <Copy className="w-3 h-3" />
            <span>{copied ? 'COPIED HEX' : 'COPY RAW HEX'}</span>
          </button>
          <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            FRAME LOCKED (32 BYTES)
          </span>
        </div>
      </div>

      {/* Interactive 32-Byte Raw Hex Matrix */}
      <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center space-x-1.5">
            <FileCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>LIVE 32-BYTE PAYLOAD MATRIX (CLICK BYTES TO INSPECT DECODING)</span>
          </span>
          <span className="text-[10px] text-slate-500">PACKET #{currentPacket.packetSequence}</span>
        </div>

        {/* Byte Grid */}
        <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 pt-1">
          {rawBytes.map((byte, idx) => {
            const highlighted = isByteHighlighted(idx);
            return (
              <button
                key={idx}
                onClick={() => handleByteClick(idx)}
                className={`p-2 rounded text-center transition-all border ${
                  highlighted
                    ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-cyan-glow scale-105 font-bold'
                    : 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="text-[9px] text-slate-500 mb-0.5">{idx.toString().padStart(2, '0')}</div>
                <div className="text-xs">{byte}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Field High-Tech Breakdown */}
      {selectedField && (
        <div className={`p-4 rounded-xl border transition-all ${selectedField.colorClass}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/20 pb-2 mb-2">
            <div className="flex items-center space-x-2 text-xs font-bold">
              <span>FIELD: {selectedField.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-current/30">
                BYTES {selectedField.bytes}
              </span>
            </div>
            <div className="text-xs">
              RAW HEX: <span className="font-bold tracking-widest">{selectedField.hexValue}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="text-sm font-bold tracking-wide">
              DECODED VALUE: {selectedField.interpretedValue}
            </div>
            {selectedField.unit && (
              <div className="text-xs opacity-75">
                ENGINEERING UNIT: {selectedField.unit}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Decoded Fields Table (Hex-to-JSON Inspector) */}
      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
        <div className="text-xs text-slate-400 font-semibold mb-1">
          DECODED FIELD REGISTRY:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
          {currentPacket.decodedFieldsMap.map((field, idx) => {
            const isSelected = selectedField?.name === field.name;
            return (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playTactileClick();
                  setSelectedField(field);
                }}
                className={`p-2.5 rounded-lg text-left border transition-all ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-400 shadow-cyan-glow'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span className="font-bold text-slate-300">{field.name}</span>
                  <span className="text-slate-500 font-mono">[{field.bytes}]</span>
                </div>
                <div className="text-xs font-semibold text-cyan-300 truncate">
                  {field.interpretedValue}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inject Custom Hex Burst Sandbox */}
      <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-slate-300 font-bold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>INJECT CUSTOM HEX BURST SANDBOX</span>
          </span>

          {/* Quick Presets */}
          <div className="flex items-center space-x-1.5 text-[11px]">
            <span className="text-slate-500">Presets:</span>
            <button
              onClick={() => loadPreset('nominal')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700"
            >
              Nominal
            </button>
            <button
              onClick={() => loadPreset('distress')}
              className="px-2 py-0.5 rounded bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-500/40"
            >
              Distress &gt;60°
            </button>
            <button
              onClick={() => loadPreset('argos')}
              className="px-2 py-0.5 rounded bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border border-blue-500/40"
            >
              South 60°S
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={customHexInput}
            onChange={(e) => setCustomHexInput(e.target.value)}
            placeholder="Paste 32-byte hex (e.g. 54 41 4D 01 66 DA 4A 1F ...)"
            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-cyan-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={handleInject}
            className="flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-cyan-glow"
          >
            <Send className="w-3.5 h-3.5" />
            <span>INJECT &amp; PARSE</span>
          </button>
        </div>

        {injectError && (
          <div className="text-xs text-red-400 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{injectError}</span>
          </div>
        )}
      </div>

    </div>
  );
};
