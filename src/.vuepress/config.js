const sidebar = require('./sidebar')

module.exports = {
  title: 'ABROADVISER',
  description: 'Your guide to life in Korea',
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
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/icon-16x16.png', color: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'naver-site-verification', content: '9f6fd9374b76e620a5d27ecde3ad0ce5ff285294' }],
    ['meta', { name: 'google-site-verification', content: '_foyyoJ5pPvEdoIZjTVELtmkAh8b0pZ83LXTC4zfHXw' }]
  ],
  dest: 'docs',
  extraWatchFiles: ['.vuepress/sidebar.js'],
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
    ['@vuepress/google-analytics', { 'ga': 'UA-144184493-1' }],
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    ['sitemap', { hostname: 'https://www.abroadviser.com' }],
    ['seo'],
    ['disqus'],
    ["vuepress-plugin-google-adsense", { ad_client: "ca-pub-6448309593914506" }]
  ]
}
