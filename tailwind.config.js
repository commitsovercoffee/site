/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        plex_serif: "'IBM Plex Serif', serif ",
        plex_sans: "'IBM Plex Sans', sans-serif ",
        plex_mono: "'IBM Plex Mono', mono ",
        caveat: "'Caveat Variable', sans-serif ",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
