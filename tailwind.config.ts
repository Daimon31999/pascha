import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export enum ScreenSizes {
  sm = 480,
  largeMobile = 576,
  md = 768,
  mdAlt = 860,
  smallDesktop = 1024,
  lg = 1100,
  xl = 1280,
  xxl = 1440,
  xxxl = 1920,
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        sm: `${ScreenSizes.sm}px`,
        largeMobile: `${ScreenSizes.largeMobile}px`,
        md: `${ScreenSizes.md}px`,
        mdAlt: `${ScreenSizes.mdAlt}px`,
        smallDesktop: `${ScreenSizes.smallDesktop}px`,
        lg: `${ScreenSizes.lg}px`,
        1184: "1184px",
        xl: `${ScreenSizes.xl}px`,
        xxl: `${ScreenSizes.xxl}px`,
        xxxl: `${ScreenSizes.xxxl}px`,
      },
    },
    extend: {
      fontSize: {
        xxs: ["0.625rem", "0.875rem"],
        10: [
          "0.625rem",
          {
            lineHeight: "0.875rem",
          },
        ],
        12: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.006rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.013rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.063rem",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.094rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.125rem",
          },
        ],
        64: [
          "4rem",
          {
            lineHeight: "4rem",
            letterSpacing: "-0.156rem",
          },
        ],
      },
      colors: {
        accentPallet1: "#FF6153",
        accentPallet2: "#ffa186",
        accentPallet3: "#ffa185",
        overlay: "rgba(4, 20, 77, 0.16)",
        overlayPallet1: "rgba(4, 20, 77, 0.08)",
        gray: "#dddde7",
        grayPallet1: "rgba(149, 155, 164, 0.32)",
        grayPallet2: "#D4D6DA",
        grayPallet3: "#475467",
        grayPallet4: "#e7e7e7",
        grayPallet5: "#95979b",
        grayPallet6: "#404350",
        grayPallet7: "#f1f1f1",
        grayPallet8: "#79818C",
        whitePallet1: "#F3F5FA",
        whitePallet2: "rgb(243, 245, 250)",
        whitePallet3: "#EEF0F7",
        whitePallet4: "#BCC3D2",
        primaryPallet1: "rgba(3,15,58,.65)",
        primaryPallet2: "rgb(68, 91, 120)",
        primaryPallet3: "rgb(3, 6, 11)",
        primaryPallet4: "#001450",
        primaryPallet5: "rgb(4, 20, 77)",
        primaryPallet6: "rgb(3, 15, 58)",
        blackPallet1: "#070f1a",
        bluePallet1: "rgb(96, 154, 244)",
        bluePallet2: "#0d6efd",
        darkGray: "#1f2631",
        darkGray2: "#818387",
        oxford: "#002147",
        light: "#f2f4f8",
        lightPallet1: "#F3F5F9",
        whiteOpacityHard: "rgba(255, 255, 255, 0.3)",
        salmon: "#c31c2c",
        neutrals: {
          50: "#FFFFFF",
          100: "#F4F6FA",
          200: "#E9EBF1",
          300: "#D8DBE4",
          400: "#BCC3D2",
          500: "#9EA7BD",
          600: "#767C98",
          700: "#6D7088",
          800: "#5D5E6F",
          900: "#343437",
          950: "#000000",
        },
        success: {
          100: "#F0F9F5",
          200: "#DAF1E4",
          300: "#B7E3CE",
          400: "#87CEB0",
          500: "#3AA981",
          600: "#23785B",
          700: "#1C604B",
          800: "#194C3D",
          900: "#153F33",
        },
        blue: {
          100: "#E5F1FF",
          200: "#D1E6FF",
          300: "#A8CEFF",
          400: "#75AFFF",
          500: "#3D7EFF",
          600: "#144FFF",
          700: "#0041E6",
          800: "#0030B3",
          900: "#001450",
        },
        orangeMoschino: "#EE672E",
        skyMoschino: "#5ECDD6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        default: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
        small: "0px 8px 16px 0px rgba(51, 51, 51, 0.20)",
        menu: "0px 0px 80px 0px rgba(51, 51, 51, 0.24)",
        header: "0px 0px 8px rgba(0,0,0,0.1)",
        space: "0 0 0 12px #001450",
        "light-sm": "0 2px 4px rgba(31, 38, 49, 0.25)",
        "light-md": "0 8px 24px rgba(31, 38, 49, 0.1)",
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
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }: any) {
      // here is your CSS selector - could be anything
      // in this case it is `.theme` element
      // with `.theme--red` class (both present)
      addVariant("theme-moschino", ".moschino &");
    }),
  ],
} satisfies Config;

export default config;
