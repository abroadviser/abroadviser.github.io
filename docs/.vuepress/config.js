const sidebar = require('./sidebar')

module.exports = {
  title: 'ABROADVISER',
  description: 'easy life in a foreign country',
  themeConfig: {
    logo: '/icons/icon-32x32.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Youtube', link: 'https://www.youtube.com/channel/UCt3w8KxLt_FoVp0jogfdX3Q' }
    ],
    sidebar,
    lastUpdated: 'Last Updated'
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }]
  ],
  serviceWorker: { updatePopup: true },
  dest: 'dist'
}
