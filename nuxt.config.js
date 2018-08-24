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
      { hid: 'description', name: 'description', content: 'Your project management tool' },
      { property: 'og:title', content: 'Colabora.io' },
      { property: 'og:description', content: 'Your project management tool' },
      { property: 'og:url', content: 'http://www.colabora.io' },
      { property: 'og:site_name', content: 'Colabora.io' },
      { property: 'og:image', content: 'http://www.colabora.io/images/fog-foggy-forest-4827.jpg' },
      { property: 'og:image:height', content: '1106' },
      { property: 'og:image:width', content: '2113'},
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    script: [
      { src: '/vendor/jquery/jquery-3.3.1.min.js' },
      { src: '/vendor/popper/popper.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff744b' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f26c22' },
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
