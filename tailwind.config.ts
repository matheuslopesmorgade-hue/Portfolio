import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Cores premium para o Command Center / Portfolio
        deep: {
          900: "#050505", // Preto quase absoluto
          800: "#0A0A0A", // Preto suave
          700: "#121212", // Grafite muito escuro
          600: "#1A1A1A", // Grafite base
          500: "#242424", // Charcoal
        },
        accent: {
          gold: "#D4AF37", // Dourado metálico
          rose: "#E5C0A1", // Nude / Dourado Rosé
          silver: "#E0E0E0", // Prata sofisticado
        },
        tech: {
          blue: "#0052FF", // Azul estilo Coinbase/Fintech
          purple: "#7C3AED", // Roxo IA/Dados
          emerald: "#10B981", // Verde para métricas/KPIs positivos
        },
        glass: {
          light: "rgba(255, 255, 255, 0.03)",
          base: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-rose': 'linear-gradient(135deg, #E5C0A1 0%, #BFA18F 100%)',
        'cyber-grid': 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        'premium-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-rose': '0 0 20px rgba(229, 192, 161, 0.15)',
        'glow-tech': '0 0 20px rgba(0, 82, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
