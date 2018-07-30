module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Server Satellite',
      description: 'Personal Smart Storage Next Generation.'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Сервер Спутник',
      description: 'Персональное умное хранилище будущего.'
    }
  },
  // title: 'Server Satellite',
  // description: 'Personal Smart Storage Next Generation.',

  head: [['link', { rel: 'icon', href: '/logo-small.png' }]],
  base: '/',
  dest: './dist',

  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Introduction', link: '/intro/' }
    // ],
    // sidebar: {
    //   '/intro/': [
    //     ''
    //   ],
    //   '/': [
    //     ''
    //   ]
    // },
    // lastUpdated: 'Last Updated'
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // algolia docsearch options for current locale
        algolia: {},
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
      '/ru/': {
        selectText: 'Языки',
        label: 'Русский',
        algolia: {},
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Знакомство', link: '/ru/intro/' }
        ],
        sidebar: {
          '/ru/intro/': [
            ''
          ],
          '/ru/': [
            ''
          ]
        },
        lastUpdated: 'Последнее Обновление'
      }
    }
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.set({ typographer: true })
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '../assets'
      }
    }
  }
}
