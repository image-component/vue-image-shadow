// More: https://cli.vuejs.org/zh/config/#vue-config-js

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  productionSourceMap: false,
  css: {
    extract: false
  },
}
