/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tamas: {
          bg: '#18242D',         // Primary Background
          bgSecondary: '#222E3A',// Secondary Background
          card: '#202F3B',       // Card Background
          cardLight: '#263745',  // Elevated Card
          border: '#3D5A68',     // Border
          borderSubtle: '#2D414D', // Subtle inner border
          text: '#E8EDF0',       // Primary Text
          textMuted: '#9AA9B5',  // Secondary Text
          operational: '#52B788',// Green / Operational
          info: '#4FA3B8',       // Cyan / Blue / Information
          warning: '#F1A340',    // Amber / Warning
          critical: '#D9574B',   // Red / Critical
          orange: '#E87522',     // Marine Orange (Buoyancy collar & Authorize Drop)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'tamas-card': '0 4px 16px -2px rgba(10, 18, 24, 0.45)',
        'tamas-subtle': '0 2px 8px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
