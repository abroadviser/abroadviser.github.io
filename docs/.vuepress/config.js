module.exports = {
  title: 'ABROADVISER',
  description: 'easy life in a foreign country',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }]
  ],
  serviceWorker: { updatePopup: true }
}
