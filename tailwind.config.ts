import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Theme Colors
        background: 'hsl(var(--cn-background))',
        foreground: 'hsl(var(--cn-text-primary))',
        hoverbtn: '#8875FF',
        primary: {
          DEFAULT: 'hsl(var(--cn-primary))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--cn-text-secondary))'
        },
        
        // Terminal Colors
        terminal: {
          red: 'hsl(var(--cn-red))',
          yellow: 'hsl(var(--cn-yellow))',
          green: 'hsl(var(--cn-green))'
        },

        // Compatability Layers
        card: {
          DEFAULT: 'hsl(var(--cn-background-dark))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        popover: {
          DEFAULT: 'hsl(var(--cn-background))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        accent: {
          DEFAULT: 'hsl(var(--cn-primary))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--cn-text-primary))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--cn-primary))',
        
        // Chart Colors (optional)
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Custom Blur Effects
      backdropBlur: {
        code: '12px',
        modal: '10px'
      },
      // Custom Shadows
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.18)',
        terminal: '0 0 40px hsl(var(--cn-primary)/0.1)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;