module.exports = {
  title: 'Server Satellite',
  description: 'Personal Smart Storage Next Generation.',
  head: [['link', { rel: 'icon', href: '/logo-small.png' }]],
  base: '/',
  dest: './dist',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/intro/' }
    ],
    sidebar: {
      '/intro/': [
        ''
      ],
      '/': [
        ''
      ]
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.set({ typographer: true })
    }
  }
}
