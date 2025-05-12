/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
// import themes from "daisyui/src/index";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "var(--gradient-start)",
        "gradient-mid": "var(--gradient-mid)",
        "gradient-end": "var(--gradient-end)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "coffee",
      "retro",
      "night",
      {
        forest: {
          ...themes("daisyui/theme/forest")["forest"],

          "--gradient-start": "#f0f6ed",
          "--gradient-mid": "#b4d3a7",
          "--gradient-end": "#6aa84f",
        },
        sunset: {
          ...themes("daisyui/theme/sunset")["sunset"],
          "--gradient-start": "#ffff",
          "--gradient-mid": "#ffb38a",
          "--gradient-end": "#ff6700",
        },
        night: {
          ...themes("daisyui/theme/night")["night"],
          "--gradient-start": "#e6edf4",
          "--gradient-mid": "#9dbad4",
          "--gradient-end": "#3b75a9",
        },
      },
    ],
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's reset
  },
};
