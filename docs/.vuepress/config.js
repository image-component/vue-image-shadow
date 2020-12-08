// More: https://vuepress.vuejs.org/config/

const title = 'vue-component-template';

module.exports = {
  dest: './docs-dist/',
  base: `/${title}/`,     // For GitHub Pages
  title,
  description: 'Fast build vue component and documentation.',
  port: 8888,
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/one-template/vue-component-template' },
    ],
    sidebar: {
      '/': [
        '',
        'changelog',
        'markdown',
        'demo'
      ]
    },
    smoothScroll: true,
  },
}
