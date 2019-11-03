module.exports = {
  mode: 'spa',
  server: {
    port: 3000
  },
  srcDir: 'src/',
  generate: {
    dir: 'public'
  },
  head: {
    htmlAttrs: {
      lang: 'ko'
    },
    title: 'Zigzag Coding Test :: Donghyun Kim',
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js'
      }
    ]
  },
  loading: { color: '#5b36ac', height: '3px' },
  // pageTransition: 'fade',
  env: {},
  plugins: [
    { src: '~plugins/axios' },
    { src: '~plugins/element-ui' },
    { src: '~plugins/vue-moment' }
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['node_modules/open-color/open-color.scss', '~assets/scss/index.scss']
  },
  build: {
    extend(config, ctx) {}
  }
}
