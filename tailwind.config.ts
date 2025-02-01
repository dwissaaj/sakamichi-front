
import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/react");
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
      },
      fontFamily : {
        comfortaa : "var(--font-ltComfortaa)",
        dela : "var(--font-jpDela)",
        shippori : "var(--font-jpShippori)",
        barlow : "var(--font-ltBarlow)"
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
  ],
} satisfies Config;
