module.exports = {
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'nolabreakers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NolaBreakers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['nuxt-sass-resources-loader', [
      './assets/sass/utils/_vars.scss',
      './assets/sass/utils/_mixins.scss'
    ]]
  ],
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
    { src: '~/plugins/youtube.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
  }
}

