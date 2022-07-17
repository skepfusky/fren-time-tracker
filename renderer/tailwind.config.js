const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './renderer/src/pages/**/*.{ts,tsx}',
    './renderer/src/components/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      theme: {
        colors: {
          violet: {
            50: "#F8F1FE",
            100: "#EFDFFC",
            200: "#E1C3F9",
            300: "#D2A3F5",
            400: "#C183F1",
            500: "#B266ED",
            600: "#9427E7",
            700: "#7113B9",
            800: "#4C0D7D",
            900: "#25063C"
          },
          cyan: {
            50: "#EBFCFE",
            100: "#DCF9FE",
            200: "#B5F2FD",
            300: "#92ECFB",
            400: "#6CE4F9",
            500: "#48DDF7",
            600: "#09D2F6",
            700: "#06A0BC",
            800: "#046E80",
            900: "#023741"
          },
          blue: {
            50: "#E4F0FB",
            100: "#CEE4F8",
            200: "#9DC8F0",
            300: "#6CADE9",
            400: "#3D92E1",
            500: "#2076C5",
            600: "#195E9F",
            700: "#124778",
            800: "#0D3254",
            900: "#061A2D"
          }
        }
      }
    },
  },
  plugins: [],
};
