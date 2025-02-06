import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nogicolor: "#CB9DF0",
        sakucolor: "#F0A8D0",
        hinatacolor: "#BFECFF",
      },
      fontFamily: {
        ltanaheim: "var(--font-ltanaheim)",
        jpshippori: "var(--font-jpShippori)",
        ltradio: "var(--font-ltradio)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#3e3d3c",
            foreground: "#F5F5F7",
            default: "#262525",
            primary: {
              100: "#FFF5E8",
              200: "#FFE9D1",
              300: "#FFDABB",
              400: "#FFCBAA",
              500: "#FFB38E",
              600: "#DB8667",
              700: "#B75D47",
              800: "#933A2D",
              900: "#7A211B",
              DEFAULT: "#FFB38E",
            },
            secondary: {
              200: "#D1F8FF",
              300: "#BBF1FF",
              400: "#AAE8FF",
              500: "#8EDAFF",
              600: "#67AEDB",
              700: "#4784B7",
              800: "#2D5E93",
              900: "#1B427A",
              DEFAULT: "#8EDAFF",
            },
            success: {
              100: "#FAFDF6",
              200: "#F5FCED",
              300: "#EBF8E1",
              400: "#E0F1D5",
              500: "#D0E8C5",
              600: "#9DC790",
              700: "#6FA763",
              800: "#47863E",
              900: "#296F25",
              DEFAULT: "#D0E8C5",
            },
            warning: {
              100: "#FFF9EB",
              200: "#FFF1D7",
              300: "#FFE8C3",
              400: "#FFDFB3",
              500: "#FFD09B",
              600: "#DBA471",
              700: "#B77C4E",
              800: "#935731",
              900: "#7A3D1D",
              DEFAULT: "#FFD09B",
            },
            danger: {
              100: "#FFEDE3",
              200: "#FFD7C9",
              300: "#FFBCAE",
              400: "#FFA299",
              500: "#FF7878",
              600: "#DB5763",
              700: "#B73C51",
              800: "#932642",
              900: "#7A1739",
              DEFAULT: "#FF7878",
            },
          },
        },
        light: {
          colors: {
            background: "#F5F5F7",
            foreground: "#3e3d3c",
            default: "#d9d9de",
            primary: {
              100: "#FFF5E8",
              200: "#FFE9D1",
              300: "#FFDABB",
              400: "#FFCBAA",
              500: "#FFB38E",
              600: "#DB8667",
              700: "#B75D47",
              800: "#933A2D",
              900: "#7A211B",
              DEFAULT: "#FFB38E",
            },
            secondary: {
              200: "#D1F8FF",
              300: "#BBF1FF",
              400: "#AAE8FF",
              500: "#8EDAFF",
              600: "#67AEDB",
              700: "#4784B7",
              800: "#2D5E93",
              900: "#1B427A",
              DEFAULT: "#8EDAFF",
            },
            success: {
              100: "#FAFDF6",
              200: "#F5FCED",
              300: "#EBF8E1",
              400: "#E0F1D5",
              500: "#D0E8C5",
              600: "#9DC790",
              700: "#6FA763",
              800: "#47863E",
              900: "#296F25",
              DEFAULT: "#D0E8C5",
            },
            warning: {
              100: "#FFF9EB",
              200: "#FFF1D7",
              300: "#FFE8C3",
              400: "#FFDFB3",
              500: "#FFD09B",
              600: "#DBA471",
              700: "#B77C4E",
              800: "#935731",
              900: "#7A3D1D",
              DEFAULT: "#FFD09B",
            },
            danger: {
              100: "#FFEDE3",
              200: "#FFD7C9",
              300: "#FFBCAE",
              400: "#FFA299",
              500: "#FF7878",
              600: "#DB5763",
              700: "#B73C51",
              800: "#932642",
              900: "#7A1739",
              DEFAULT: "#FF7878",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
