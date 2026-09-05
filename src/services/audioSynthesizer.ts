// Web Audio API Synthesizer for aerospace tactile sound effects

class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private distressOscillator: OscillatorNode | null = null;
  private distressGain: GainNode | null = null;
  private distressInterval: any = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopDistressAlarm();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Tactical radar ping
  public playRadarPing() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1480, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.18);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Ignore audio failure
    }
  }

  // Rapid hex packet burst chirp
  public playHexBurst() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.setValueAtTime(3100, now + 0.02);
      osc.frequency.setValueAtTime(1800, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // Ignore audio failure
    }
  }

  // Tactile mechanical switch click
  public playTactileClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.03);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Ignore audio failure
    }
  }

  // Heavy hydraulic drop authorization arm sound
  public playAuthorizeDrop() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      // Dual tone: Low thud + high confirmation harmonic
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.exponentialRampToValueAtTime(320, now + 0.2);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.15);
      osc2.frequency.setValueAtTime(1320, now + 0.35);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.5);
      osc2.start(now + 0.15);
      osc2.stop(now + 0.5);
    } catch {
      // Ignore audio failure
    }
  }

  // Emergency SAS&R 406.05 MHz Klaxon alarm
  public startDistressAlarm() {
    if (this.isMuted || this.distressInterval) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      let highTone = true;
      const playTone = () => {
        if (!this.ctx || this.isMuted) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(highTone ? 960 : 720, now);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.28);
        highTone = !highTone;
      };

      playTone();
      this.distressInterval = setInterval(playTone, 350);
    } catch {
      // Ignore
    }
  }

  public stopDistressAlarm() {
    if (this.distressInterval) {
      clearInterval(this.distressInterval);
      this.distressInterval = null;
    }
  }
}

export const soundFx = new AudioSynthesizer();
