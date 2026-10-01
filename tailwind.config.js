/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070A',
          card: '#0B1018',
          cardHover: '#111827',
          cyan: '#00E5FF',
          blue: '#4D7CFF',
          violet: '#8B5CF6',
          white: '#F8FAFC',
          muted: '#94A3B8',
          darkBorder: 'rgba(0, 229, 255, 0.15)',
          glowCyan: 'rgba(0, 229, 255, 0.4)',
          glowViolet: 'rgba(139, 92, 246, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'hud-glitch': 'glitch 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        'glitch': {
          '0%, 90%, 100%': { transform: 'translate(0, 0)', opacity: '1' },
          '92%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '94%': { transform: 'translate(2px, -1px)', opacity: '0.9' },
          '96%': { transform: 'translate(-1px, 2px)', opacity: '0.85' },
          '98%': { transform: 'translate(1px, -1px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
