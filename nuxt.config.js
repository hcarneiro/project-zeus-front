module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Colabora',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Your task management tool.' },
      { property: 'og:title', content: '2DO' },
      { property: 'og:description', content: 'Your task management tool.' },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: 'http://www.colabora.io' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: '2DO' },
      { name: 'twitter:image:alt', content: 'Your task management tool.' }
    ],
    script: [
      { src: '/vendor/jquery/jquery-3.3.1.min.js' },
      { src: '/vendor/popper/popper.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#03A9F4' },
  /*
  ** Router configurations
  */
  router: {
    middleware: 'auth'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    /* set API_URL environment variable to configure access to the API
    */
    baseURL: `http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`,
    credentials: true
  },
  plugins: [
    '~/plugins/filters',
    '~/plugins/slideout-panel',
    '~/plugins/vue-nav-tabs'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/node_modules/bootstrap/scss/bootstrap.scss',
    '@/node_modules/@fortawesome/fontawesome-free/css/all.css',
    '@/assets/index.scss'
  ]
}
