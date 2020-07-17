const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Arch Linux Guide',
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
    repo: 'https://github.com/D3SOX/arch-guide-vuepress',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Installation',
        link: '/installation/',
      },
      {
        text: 'Post-Installation',
        link: '/post-installation/'
      },
      {
        text: 'Fixes & Tweaks',
        link: '/tweaks/'
      },
    ],
    sidebar: {
      '/installation/': [
        {
          title: 'Installation',
          collapsable: false,
          children: [
            '',
            'live-setup',
            'partitioning-formatting',
            'mount-filesystems',
            'base-installation',
            'install-bootloader',
            'setup-users',
            'install-desktop',
            'useful-packages',
            'reboot',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
  ]
}
