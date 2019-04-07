module.exports = {
  publicPath: '/desert-tesla',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  pluginOptions: {
    externals: {
      common: [{
        id: '@babel/polyfill',
        assets: 'https://unpkg.com/@babel/polyfill@latest/dist/polyfill.min.js'
      }, {
        id: 'vue',
        assets: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        global: 'Vue'
      }, {
        id: 'bootstrap-vue',
        assets: 'https://unpkg.com/bootstrap-vue@2.0.0-rc.16/dist/bootstrap-vue.min.js'
      }, {
        id: 'vue-router',
        assets: 'https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js',
        global: 'VueRouter'
      }]
    }
  }
}
