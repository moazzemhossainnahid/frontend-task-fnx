import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        satoshi: ["var(--font-satoshi)"],
        'satoshi-var': ["var(--font-satoshi-variable)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* 🚀 BRAND COLORS */
        brand: {
          primary: "hsl(var(--brand-primary))",
          accent: "hsl(var(--brand-accent))",
          success: "hsl(var(--brand-success))",
          danger: "hsl(var(--brand-danger))",
          warning: "hsl(var(--brand-warning))",
        },

        /* 🧩 UI COLORS */
        ui: {
          background: "hsl(var(--ui-background))",
          card: "hsl(var(--ui-card))",
          header: "hsl(var(--ui-header))",
          footer: "hsl(var(--ui-footer))",
          divider: "hsl(var(--ui-divider))",
        },

        /* 📝 TEXT COLORS */
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
          light: "hsl(var(--text-light))",
        },

        /* 🏷️ TAG COLORS */
        tag: {
          blue: "hsl(var(--tag-blue))",
          "blue-text": "hsl(var(--tag-blue-text))",
          green: "hsl(var(--tag-green))",
          "green-text": "hsl(var(--tag-green-text))",
          purple: "hsl(var(--tag-purple))",
          "purple-text": "hsl(var(--tag-purple-text))",
          yellow: "hsl(var(--tag-yellow))",
          "yellow-text": "hsl(var(--tag-yellow-text))",
        },

        /* ⚡ STATUS COLORS */
        status: {
          active: "hsl(var(--status-active))",
          "active-text": "hsl(var(--status-active-text))",
          info: "hsl(var(--status-info))",
          "info-text": "hsl(var(--status-info-text))",
          pending: "hsl(var(--status-pending))",
          "pending-text": "hsl(var(--status-pending-text))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
