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
          bg: '#06121C',            // Near-black navy primary background
          bgSecondary: '#0B1D2A',   // Deep blue secondary surface
          card: '#102738',          // Elevated card background
          cardLight: '#16354D',     // Highlight / hover card surface
          cardInner: '#091824',     // Deep inset card surface
          border: '#1A3B54',        // Clean subtle border
          borderSubtle: '#122A3D',  // Inset subtle border
          borderLight: '#244F70',   // Active border highlight
          text: '#F0F6FC',          // Crisp high-contrast white text
          textMuted: '#7E99AC',     // Secondary data text
          cyan: '#00E5FF',          // Primary accent: Electric cyan
          ocean: '#00B4D8',         // Primary accent: Ocean blue
          info: '#00E5FF',          // Primary accent link
          turquoise: '#06D6A0',     // Secondary accent: Turquoise
          operational: '#10B981',   // Success: Emerald green
          warning: '#F59E0B',       // Warning: Amber
          critical: '#EF4444',      // Critical: Orange/Red
          orange: '#F97316',        // Safety orange (Buoy collar & Drop trigger)
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
