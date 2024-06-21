import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--ctp-macchiato-surface2)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--ctp-macchiato-mantle)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        card: {
          DEFAULT: "var(--ctp-macchiato-base)",
          foreground: "hsl(var(--card-foreground))",
        },
        "rosewater": "var(--ctp-macchiato-rosewater)",
        "flamingo": "var(--ctp-macchiato-flamingo)",
        "pink": "var(--ctp-macchiato-pink)",
        "mauve": "var(--ctp-macchiato-mauve)",
        "red": "var(--ctp-macchiato-red)",
        "maroon": "var(--ctp-macchiato-maroon)",
        "peach": "var(--ctp-macchiato-peach)",
        "yellow": "var(--ctp-macchiato-yellow)",
        "green": "var(--ctp-macchiato-green)",
        "teal": "var(--ctp-macchiato-teal)",
        "sky": "var(--ctp-macchiato-sky)",
        "sapphire": "var(--ctp-macchiato-sapphire)",
        "blue": "var(--ctp-macchiato-blue)",
        "lavender": "var(--ctp-macchiato-lavender)",
        "text": "var(--ctp-macchiato-text)",
        "subtext1": "var(--ctp-macchiato-subtext1)",
        "subtext0": "var(--ctp-macchiato-subtext0)",
        "overlay2": "var(--ctp-macchiato-overlay2)",
        "overlay1": "var(--ctp-macchiato-overlay1)",
        "overlay0": "var(--ctp-macchiato-overlay0)",
        "surface2": "var(--ctp-macchiato-surface2)",
        "surface1": "var(--ctp-macchiato-surface1)",
        "surface0": "var(--ctp-macchiato-surface0)",
        "base": "var(--ctp-macchiato-base)",
        "mantle": "var(--ctp-macchiato-mantle)",
        "crust": "var(--ctp-macchiato-crust)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config