const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'My docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'React Native',
        link: '/reactnative/',
      },
      {
        text: 'CSS',
        link: '/css/',
      },
      {
        text: 'VueJS',
        link: '/vuejs/',
      },
    ],
    sidebar: {
      '/reactnative/': [
        {
          title: 'React Native',
          collapsable: false,
          children: [
            '',
            'function',
            'class',
            'reactnavigation',
            'debugging'
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          collapsable: false,
          path: ''
        }
      ],
      '/vuejs/': [
        {
          title: 'VueJS',
          collapsable: false,
          path: ''
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
