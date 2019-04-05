module.exports = {
  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  pluginOptions: {
    externals: {
      common: [{
        id: 'vue',
        assets: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        global: 'Vue'
      }, {
        id: 'vue-router',
        assets: 'https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js',
        global: 'VueRouter'
      }]
    }
  }
}
