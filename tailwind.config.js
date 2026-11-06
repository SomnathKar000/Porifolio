/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0c0d0f",
        "surface-base": "#0D0E10",
        "surface-raised": "#131418",
        "surface-overlay": "#1C1D22",
        "surface-container": "#1f2022",
        "surface-container-high": "#292a2c",
        "surface-container-highest": "#343537",
        "text-primary": "#FFFFFF",
        "text-muted": "#8B8D98",
        "text-dim": "#52545D",
        "status-active": "#34C759",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "border-active": "rgba(255, 255, 255, 0.20)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
