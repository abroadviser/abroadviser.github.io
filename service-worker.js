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
    "revision": "61b584c3b9ed93415373a7ea8808d550"
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
    "url": "assets/js/10.e515af35.js",
    "revision": "d6e6eb6adf864cf0210ce017286eb9b7"
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
    "url": "assets/js/16.0bc53d95.js",
    "revision": "54a1538702e0737590673d29495fb0a6"
  },
  {
    "url": "assets/js/17.64b27b08.js",
    "revision": "ac846d79e5449c9c26d510e32ab1ebc8"
  },
  {
    "url": "assets/js/18.d7697839.js",
    "revision": "5a9fb9811d205a3f66e11da4ff94484f"
  },
  {
    "url": "assets/js/19.aa488990.js",
    "revision": "3f85244824201828ecb32ecbab47f5bd"
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
    "url": "assets/js/7.745508c0.js",
    "revision": "485257342ac3ef693d8a7756973303e1"
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
    "url": "assets/js/app.8c64ffa7.js",
    "revision": "313962832ed09b3dfb67342e2f41ca97"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "129717bec5a4af2077642c98b03159c5"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "4da044ff70e02434fa207a23b726d9fc"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "8d7c9dc7d845a9656245c6643991f334"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "6dc93a7ba1a06b6fc13f0ec79f2ac3f8"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "e23d3f3c6eb018b93211fd529ba596a9"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "16c64e406c5a0a17179402a004fda4f4"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "5dacb130a3b8db441c8b0c178394a943"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "8b38bd8cd1ff3c30adb9ddc57ab7468d"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "dee42b07b9202c63420de1f5e3f3ab8f"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "c121cfaf890e5ae09feaaa6ef7923d53"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "f4f00c2400007cf2ac220cd45ec5b4a6"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "577e054c55b3949f163276a235ba638f"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "49512bcf3ac8e770f5a93b465f91d417"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "2e7d16a5f26ab2545d6692953661b25e"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "63e580abf791bfdcfe7cdfd351474ab3"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "211234ece157d917cd8695a16634782d"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "51395d4089129590fd56b25190ddd013"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "ba39dfdb6df1fe12679a3ae4db2961c1"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "643fdfc8da92eac28cc09cbf300e7e33"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "e020a33285c9eacb5610aeb93f779261"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "2c4de0bbfa50543add6969dd91635456"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "252dc0ee603610e1f63cfd743199e70a"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "6bd6df0f6a40160db93f7a7258291edb"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "f66a68bbb48425fcf587ef1f7dd55dc6"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "a749c7673f972fcfea9677a0b9e3d7c3"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "bed7899a668846cdf8acd2431530d2f5"
  },
  {
    "url": "guide/index.html",
    "revision": "a7f0721835bdfe9e6c89f8700674064b"
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
    "revision": "6d822a2cdf8e90083562ece0c1f68c0b"
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
