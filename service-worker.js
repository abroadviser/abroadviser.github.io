/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5ae0539c81328ea1261d8319db9544b"
  },
  {
    "url": "assets/css/0.styles.bb473f0d.css",
    "revision": "8df7c78e9211c05186bc9264d78d8bed"
  },
  {
    "url": "assets/img/daisa.3183d56f.jpg",
    "revision": "3183d56fc2752375d83aaba57cb102a6"
  },
  {
    "url": "assets/img/info.7137d83f.png",
    "revision": "7137d83f82c495e3fc679d782a25760f"
  },
  {
    "url": "assets/img/login.72e6d065.png",
    "revision": "72e6d0654e030f816e58ffb31f44f8ba"
  },
  {
    "url": "assets/img/nhis.fecd0108.jpg",
    "revision": "fecd0108e428a26067dbd6bae624988c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/top2019.df606343.png",
    "revision": "df6063435fad742b0bdd254498c76e86"
  },
  {
    "url": "assets/js/10.886c4fbd.js",
    "revision": "9cbe4d6cd62bccd0c0b33487d7884953"
  },
  {
    "url": "assets/js/11.bb286f10.js",
    "revision": "c3c7452d3d0ea5b788a49208e3e84c5c"
  },
  {
    "url": "assets/js/12.cc8ea993.js",
    "revision": "e7deb085b5bfdf5efe6c53392b332c67"
  },
  {
    "url": "assets/js/13.5185d123.js",
    "revision": "644f69f2ae776865e4f9c68def74b252"
  },
  {
    "url": "assets/js/14.8f5d7500.js",
    "revision": "e959bb5d539da9b0e74bfc4ba38a5122"
  },
  {
    "url": "assets/js/15.b7b115a6.js",
    "revision": "42295d891e08b94d0cb9ce5e19b6a70d"
  },
  {
    "url": "assets/js/16.3be058e4.js",
    "revision": "3016b0a91495b8496f529971002ddbc1"
  },
  {
    "url": "assets/js/17.aaf04c87.js",
    "revision": "9f10f9062d7ff241375697ebdb8f9685"
  },
  {
    "url": "assets/js/18.500167de.js",
    "revision": "828d32fd5b4ee7579ca130e07115b2ae"
  },
  {
    "url": "assets/js/19.3089cd57.js",
    "revision": "36204c25b2ea9b02952f9ae48ce84650"
  },
  {
    "url": "assets/js/2.cfa6a1bf.js",
    "revision": "65695f8f25e6dfb0132ce30fd3eea7ce"
  },
  {
    "url": "assets/js/20.71c2031a.js",
    "revision": "a4356560eee8c163335b1205c017ea71"
  },
  {
    "url": "assets/js/21.d888f080.js",
    "revision": "7b431a86c8ecf636434874578ff77612"
  },
  {
    "url": "assets/js/22.4ef64dac.js",
    "revision": "23cc5e371b2620d4b10b06212857020a"
  },
  {
    "url": "assets/js/23.05351f5d.js",
    "revision": "c76f9620529010be495231529a478131"
  },
  {
    "url": "assets/js/24.965f9bc0.js",
    "revision": "1a7750525138b0cc5ad92791cc554ac3"
  },
  {
    "url": "assets/js/25.4e7abdbc.js",
    "revision": "4f4244ed273284395449903121a38224"
  },
  {
    "url": "assets/js/26.02eb014a.js",
    "revision": "f1008b240101be6de2b24717ce50c328"
  },
  {
    "url": "assets/js/27.a1c3e55c.js",
    "revision": "2996c94fb2cc7dbed2f1e9156d2d563c"
  },
  {
    "url": "assets/js/28.ae9d81ba.js",
    "revision": "3c6e04b01d8a8672af441a93c5403158"
  },
  {
    "url": "assets/js/29.c030857d.js",
    "revision": "141e16a7c76559a1010443ac51495729"
  },
  {
    "url": "assets/js/3.aa396aeb.js",
    "revision": "cf667999a5bdf4b5ffbcf02200cd3022"
  },
  {
    "url": "assets/js/30.a683a34c.js",
    "revision": "807db6494e497087eedbecff2023c7a5"
  },
  {
    "url": "assets/js/31.d18b4d30.js",
    "revision": "849c8390692a86d9a63e5c24e8806c5b"
  },
  {
    "url": "assets/js/32.a3e88c6c.js",
    "revision": "55b25c1452a81adbbe331ca5f9f634d6"
  },
  {
    "url": "assets/js/33.d07f4f82.js",
    "revision": "3fdbaf5e1bf668c706b9377caa64182e"
  },
  {
    "url": "assets/js/34.aaae0d32.js",
    "revision": "dc6b551d45f47fde0cdafbfd4de75f70"
  },
  {
    "url": "assets/js/35.1df7704d.js",
    "revision": "4ecbd303a7be6a9d4cdeffe61ffea6fc"
  },
  {
    "url": "assets/js/36.93853c0f.js",
    "revision": "0bf5f92a7cce240cd936b138cb59a84a"
  },
  {
    "url": "assets/js/37.eb9c9013.js",
    "revision": "bbb54d8dba8b7ee3856cbeef3ffedccf"
  },
  {
    "url": "assets/js/38.dcc41bf5.js",
    "revision": "0a6bcd83963d33912d450506628cc288"
  },
  {
    "url": "assets/js/39.a7167760.js",
    "revision": "f8f91c6fb3cc0c6c661a33588979e953"
  },
  {
    "url": "assets/js/4.69993c3f.js",
    "revision": "62139a3c1a121e060723c91203530d0c"
  },
  {
    "url": "assets/js/5.72a86daf.js",
    "revision": "df5b9ea212cb529820e3d7b594747366"
  },
  {
    "url": "assets/js/6.e1554869.js",
    "revision": "085c4ddcd31041245f542351f383cac0"
  },
  {
    "url": "assets/js/7.a1859c66.js",
    "revision": "b97388b173015e4babcbfb307b4a4749"
  },
  {
    "url": "assets/js/8.094e9a5a.js",
    "revision": "80ed7fa9d534644790385110ad7dff4a"
  },
  {
    "url": "assets/js/9.be4a2d23.js",
    "revision": "44e43873808a2f1b464a57e160652f9b"
  },
  {
    "url": "assets/js/app.b36e1a71.js",
    "revision": "a4821d9f143bed1ce89481b54ac8dfe5"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "a1b5f692db1daa58b869e3ab9eab0449"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "c3295714d77571860290e93ed942e548"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "68caa3019337c7387fd0b67fa35cfd66"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "f8c89fb3573d7c3788376a4d48c07b0d"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "33636a2c78730c3d4345f2bd805b2be3"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "518dc195a3c6dce104c84461ca29dbcc"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "a97d7e5498ea01c064798f9b3d23e89d"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "9029dde3746fadfab1d93777eb1171d6"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "5a11367e14bb48a64375c16faa8f90d1"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "ad497d487f652d70e334d9352645d8fa"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "bf3f3cc1ef03643974cc3e4f11163126"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "424131156091d0ec2daff4691aad4396"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "01ac52d99116dfd0e173eb3a721184a6"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "1d5c6ece05846b642d92b32ee52cc6ab"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "f2aedd64b90cc10fd6d88a1bf7d6c9fc"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "82d69676fa69766c1c0544a91042f465"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "5abf07ebd54b6b0afa706c8e64d7d77f"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "2096e4b6d887847d22d3e6c2d6f42c53"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "656436c051f6a3c3c6f5d89857d653b1"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "42bd12e74557772be9872bc310e733bb"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "2f0225b844790a615f8436182ea6bcd9"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "bfe188d983b45ff38841d0e4c4a10530"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "61d2aea8de5a33e83b596278aff948b6"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "a15cda5471210d879a25b1bcaed10e83"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "f6119757109e93b240417ec03399cee6"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "03300b93592f6b81b74f6c03a2b689e4"
  },
  {
    "url": "guide/index.html",
    "revision": "233c1f6f73a4bae345486cb538c33a31"
  },
  {
    "url": "icon.png",
    "revision": "696e5b480d0185184f7d78bd2121278b"
  },
  {
    "url": "icons/icon-114x114.png",
    "revision": "43bc9112faece4e96e10beb32d9acbb4"
  },
  {
    "url": "icons/icon-120x120.png",
    "revision": "a1dce6c4f47ed35dc5372e62807f959d"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "df5f951874c479ea89113f1517d9fd16"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "28817d28dc057a793455b7510330dbaa"
  },
  {
    "url": "icons/icon-150x150.png",
    "revision": "ff91077a8a26254d376b9f5df9e899ab"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "315fff625fdf46c67ff2a3c2525904a4"
  },
  {
    "url": "icons/icon-16x16.png",
    "revision": "62d25f8b6e1bef9c26928720129a6a43"
  },
  {
    "url": "icons/icon-180x180.png",
    "revision": "270498e321163abaa7590f9660deb36f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "d6c9a2a78f9c627b276b35516fc68f76"
  },
  {
    "url": "icons/icon-310x310.png",
    "revision": "c15775fed4110bbf9bcb384105b8cc5b"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "17a5e37b826996a39708d17e81ffdc99"
  },
  {
    "url": "icons/icon-36x36.png",
    "revision": "206dc41199b9955d72f677d2c622164c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "c7cb012d87fae22e51b5ae1a61eea075"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "309104d613eda464248647908f84dc29"
  },
  {
    "url": "icons/icon-57x57.png",
    "revision": "bd3179ec5e90ba7421eef5c4c5f9b1bf"
  },
  {
    "url": "icons/icon-60x60.png",
    "revision": "7eee7a5d58d35b6de2c21d18deb6cab6"
  },
  {
    "url": "icons/icon-70x70.png",
    "revision": "178db09d51c69a5fc58a4304afac956d"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "4525da448002a5623ec4cb8e090e0f6c"
  },
  {
    "url": "icons/icon-76x76.png",
    "revision": "8e23a587953a873c81c25aa45cdf5922"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ca3bcfa4f84669df838693347809d4ca"
  },
  {
    "url": "index.html",
    "revision": "3408b4cc2b8147af026e629e263444eb"
  },
  {
    "url": "logo.png",
    "revision": "0d18839d5f2d274a9da66e09bb33294c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
