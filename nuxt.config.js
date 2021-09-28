export default {
  head: {
    title: 'Hartzog Interiors | Fort Wayne Interior Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Katie Hartzog' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        src: 'script_ga.js',
        async: true,
      },
      {
        src: 'script_pixel.js',
      },
      {
        src: 'script_gtm.js',
      },
    ],
  },
  css: [],
  plugins: [
    '~/plugins/init',
    '~/plugins/catch',
    '~/plugins/auth',
    '~/plugins/events',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: 'http://localhost:3001',
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
  },
  content: {},
  build: {},
};
