const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
      },
      minHeight: {
        "screen-1/2": "50vh",
      },
      backgroundSize: {
        "size-200": "200% 100%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 0%",
      },
    },
    screens: {
      xxs: "280px",
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
