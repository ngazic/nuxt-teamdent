// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-teamdent',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.10.0/css/lightgallery.min.css',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.10.0/js/lightgallery.min.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', 'nuxt-purgecss'],
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
  },
}
