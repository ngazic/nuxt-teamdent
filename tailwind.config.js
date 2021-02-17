/* eslint-disable */

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
        13: "3.5rem",
        14: "4rem"
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"]
    }
  },
  darkMode: false, // or 'media' or 'class'
  variants: {},
  plugins: [
    function ({addComponents}) {
      addComponents({
        ".container": {
          width: "100%",

          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1280px"
          }
        }
      });
    }
  ]
};
