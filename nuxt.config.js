module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    // '~assets/css/main.css',
    'element-ui/lib/theme-default/index.css'
  ],
  generate: {
    minify: {
      removeRedundantAttributes: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    vendor: ['axios', 'element-ui'],
    // vue: {
    //   preserveWhitespace: false
    // },
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-default'
      }]]]
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      })
      }
    }
  },
  plugins: ['~plugins/element-ui'],
}
