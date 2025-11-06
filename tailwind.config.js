const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "path/to/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path/to/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#118817ff",
          50: "#d6f0d6ff",
          100: "#b9e6b9ff",
          200: "#8edc8eff",
          300: "#63d263ff",
          400: "#39c939ff",
          500: "#138535ff",
          600: "#0f6b0fff",
          700: "#0b500bff",
          800: "#073607ff",
          900: "#031a03ff",
        },
        accent: {
          DEFAULT: "#f58318ff",
          500: "#e0815bff",
        },

        main: {
          DEFAULT: "#485364ff",
          100: "#f3f4f6ff",
          200: "#e5e7ebff",
          300: "#d1d5dbff",
          400: "#9ca3afff",
          500: "#64748B", 
          600: "#475569ff",
          700: "#334155ff",
          800: "#1e293bff",
          900: "#0f172aff",
        },
        contrasttext: {
          DEFAULT: "#b7bbc2ff",
          500: "#7a7e83ff", 
        },

        blue: {
          DEFAULT: "#3066FF",
          500: "#3066FF",
        },
        yellow: {
          DEFAULT: "#F19937",
          500: "#F19937",
        },
        red: {
          DEFAULT: "#EA4E3D",
          500: "#EA4E3D",
        },
        green: {
          DEFAULT: "#67C23A",
          500: "#67C23A",
        },
        sky: {
          DEFAULT: "#55A6F8",
          500: "#55A6F8",
        },
        slate: {
          DEFAULT: "#64748B",
          500: "#64748B",
        },
        dark: {
          DEFAULT: "#1E293B",
          500: "#0F172A",
        },
      },
    },
  },
  plugins: [],
});
