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
    "revision": "f7748e5578cc6b218a27c0553e3a3055"
  },
  {
    "url": "assets/css/0.styles.79041ca1.css",
    "revision": "f77fa47569506079d55682b0779c4f7c"
  },
  {
    "url": "assets/img/anti1.6895d3c0.png",
    "revision": "6895d3c0999821ee2a92eb5753259cb4"
  },
  {
    "url": "assets/img/bus1.ebf6c8e9.png",
    "revision": "ebf6c8e9bfa9a44d8aa812906552c2dc"
  },
  {
    "url": "assets/img/bus10.12d65aa6.png",
    "revision": "12d65aa66913949ade84b06c5def105d"
  },
  {
    "url": "assets/img/bus11.5e6cd093.png",
    "revision": "5e6cd093d2c1480193acc0bc7a5f0841"
  },
  {
    "url": "assets/img/bus12.7dae353c.png",
    "revision": "7dae353c5c7ec2d0ac1b643d617ef7ad"
  },
  {
    "url": "assets/img/bus2.bd0541ef.png",
    "revision": "bd0541efb1e344350db5a8a1bdf45142"
  },
  {
    "url": "assets/img/bus3.d790e602.png",
    "revision": "d790e6028acf610a9072d5ee0af8c51e"
  },
  {
    "url": "assets/img/bus4.c7927aa7.png",
    "revision": "c7927aa7c404f0d915d51b0f0d4dfe68"
  },
  {
    "url": "assets/img/bus5.bd022bc0.png",
    "revision": "bd022bc079af8ee8ce64f39b8b481db4"
  },
  {
    "url": "assets/img/bus6.ca3c06e6.png",
    "revision": "ca3c06e67372b507fd42d667045cdd7f"
  },
  {
    "url": "assets/img/bus7.9213a2fb.png",
    "revision": "9213a2fb33a7bdebcb0a2a5b864101fb"
  },
  {
    "url": "assets/img/bus8.673f6b8c.png",
    "revision": "673f6b8c487a145ebae0924a2189af94"
  },
  {
    "url": "assets/img/bus9.67f80eba.png",
    "revision": "67f80eba065d487a9eb9afdc915ff847"
  },
  {
    "url": "assets/img/certificate1.5dc94074.jpg",
    "revision": "5dc94074c43d1d643d7ed293710cbcce"
  },
  {
    "url": "assets/img/certificate10.b3a866b0.png",
    "revision": "b3a866b0a5b3a6bc223b6eb3dc1a7782"
  },
  {
    "url": "assets/img/certificate11.770c5642.png",
    "revision": "770c5642cc9a3f2d7b8ca4b2d042817b"
  },
  {
    "url": "assets/img/certificate12.a66f7ca5.png",
    "revision": "a66f7ca537a6102dc486d63ecc116706"
  },
  {
    "url": "assets/img/certificate13.fcdac797.png",
    "revision": "fcdac79777a0fb5ef0a16fb683126367"
  },
  {
    "url": "assets/img/certificate2.3de0b392.jpg",
    "revision": "3de0b3921f28c8c63e5256eb7438c502"
  },
  {
    "url": "assets/img/certificate3.91e39e11.png",
    "revision": "91e39e11be9b4319476700addd411fb6"
  },
  {
    "url": "assets/img/certificate4.54acbb49.png",
    "revision": "54acbb490c57e192c83b4b7e4379d5c8"
  },
  {
    "url": "assets/img/certificate5.5c8ed59d.png",
    "revision": "5c8ed59d11b99835ae427e3e14059cc8"
  },
  {
    "url": "assets/img/certificate6.546ee488.png",
    "revision": "546ee48818febcc1cf81dcbec14d64f2"
  },
  {
    "url": "assets/img/certificate7.13e1eadc.png",
    "revision": "13e1eadc24fa94086334d63c66ba89d3"
  },
  {
    "url": "assets/img/certificate8.18573239.png",
    "revision": "18573239ace4317a2eba45a817c7f08e"
  },
  {
    "url": "assets/img/certificate9.44e1e93c.png",
    "revision": "44e1e93c9a73bfa14eb5b3838cdb180b"
  },
  {
    "url": "assets/img/daisa.3183d56f.jpg",
    "revision": "3183d56fc2752375d83aaba57cb102a6"
  },
  {
    "url": "assets/img/hipass1.8a8d8f51.jpg",
    "revision": "8a8d8f5128cff75bf03666ac9785565f"
  },
  {
    "url": "assets/img/hipass2.7f944140.jpg",
    "revision": "7f94414082570753796072a707737f8e"
  },
  {
    "url": "assets/img/info.7137d83f.png",
    "revision": "7137d83f82c495e3fc679d782a25760f"
  },
  {
    "url": "assets/img/license1.d496ab9c.jpg",
    "revision": "d496ab9c4f75ec2222d974c5e32aa0a9"
  },
  {
    "url": "assets/img/license2.19a8ccb0.jpg",
    "revision": "19a8ccb0ca437a7a99ba8ba00564f07d"
  },
  {
    "url": "assets/img/license3.ccdcd995.jpg",
    "revision": "ccdcd99569af4221a4ffde8b8b611102"
  },
  {
    "url": "assets/img/license4.2f52a714.jpg",
    "revision": "2f52a7142e1d58f5ad59402ed9852845"
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
    "url": "assets/img/nihs2.25762125.jpg",
    "revision": "257621250a3f1d25b29038dae410a24f"
  },
  {
    "url": "assets/img/pharma1.762969d7.png",
    "revision": "762969d78a5cb39872ac96179c8a8230"
  },
  {
    "url": "assets/img/pharma2.fdb6fbf8.png",
    "revision": "fdb6fbf8e590908a7bddf2100f0b8534"
  },
  {
    "url": "assets/img/pharma3.998c3b18.png",
    "revision": "998c3b18336d0720ca9471c819847a73"
  },
  {
    "url": "assets/img/pharma4.166e0e31.png",
    "revision": "166e0e316b39a00821c9923eec718734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tax1.4de8270f.png",
    "revision": "4de8270fb68d615c9d1266280abd5c9f"
  },
  {
    "url": "assets/img/tax2.ff92a70f.jpg",
    "revision": "ff92a70f7895a10974010d92f9f2e7a1"
  },
  {
    "url": "assets/img/top2019.df606343.png",
    "revision": "df6063435fad742b0bdd254498c76e86"
  },
  {
    "url": "assets/img/transcard.addfe29a.jpg",
    "revision": "addfe29aa2e5e78a786a38e67219676c"
  },
  {
    "url": "assets/js/10.bc2d99e0.js",
    "revision": "a149a7c802a62230254d94086d1d3f02"
  },
  {
    "url": "assets/js/11.39e1625a.js",
    "revision": "ade06d13d7c359c49a7f7c6da62eada9"
  },
  {
    "url": "assets/js/12.6caa0526.js",
    "revision": "be027a2dca65dceadbee487daa93d13a"
  },
  {
    "url": "assets/js/13.80731945.js",
    "revision": "c0f06d159136861f6bea43d96d769544"
  },
  {
    "url": "assets/js/14.599ddff9.js",
    "revision": "bb08cb00149475b3e903c76c2fe7e70e"
  },
  {
    "url": "assets/js/15.3f22963a.js",
    "revision": "ee29e08880ddd9e76832e1c18b409977"
  },
  {
    "url": "assets/js/16.72ee34cf.js",
    "revision": "47995f31895de138e22d28598d6a53cc"
  },
  {
    "url": "assets/js/17.015bf6f6.js",
    "revision": "68073e53bd8257584cd787f8d4b2053f"
  },
  {
    "url": "assets/js/18.16cd4dd5.js",
    "revision": "16be7e75d850554589c20e29e7aada08"
  },
  {
    "url": "assets/js/19.2c6d9d2b.js",
    "revision": "dcbe0da0e73844dbb29998e5084dec1e"
  },
  {
    "url": "assets/js/2.7bd752a2.js",
    "revision": "845795d8983842bf0ade2a3c4812c8aa"
  },
  {
    "url": "assets/js/20.63be16a1.js",
    "revision": "074c28e753c2813512ce67ce5990668b"
  },
  {
    "url": "assets/js/21.63737943.js",
    "revision": "f4845cc5ed46a6decd865ea026c4bbd4"
  },
  {
    "url": "assets/js/22.cfcf570d.js",
    "revision": "cb8a3c77834080089f5e3654c40a64af"
  },
  {
    "url": "assets/js/23.02c8fb24.js",
    "revision": "92954c48f887176b3fb7090f43ec249f"
  },
  {
    "url": "assets/js/24.477fc71a.js",
    "revision": "d5078a6f3f1c7b6f58a640dc5a1d7915"
  },
  {
    "url": "assets/js/25.2f7d890d.js",
    "revision": "25d9515bf81ca7f4c1a5d9ca21adc93e"
  },
  {
    "url": "assets/js/26.fb30683e.js",
    "revision": "4f1d422bc64b5aadb24d04d90782e5e9"
  },
  {
    "url": "assets/js/27.ffad345f.js",
    "revision": "a7e1ee9f3a8180e8d500b9d60d94ec01"
  },
  {
    "url": "assets/js/28.c2a19a80.js",
    "revision": "5ef157984c6d65a325cfbf926c735be0"
  },
  {
    "url": "assets/js/29.107f4850.js",
    "revision": "e8a0fcc2e36198897488d0332382580f"
  },
  {
    "url": "assets/js/3.83132767.js",
    "revision": "f5a44a80e5788eaeb52a62db93218783"
  },
  {
    "url": "assets/js/30.b7c88bcb.js",
    "revision": "252794e9a39b0640366fc702a1710c5c"
  },
  {
    "url": "assets/js/31.2167678e.js",
    "revision": "0527573f59fadcb0f3788c738755d5d4"
  },
  {
    "url": "assets/js/32.5f4cb7d5.js",
    "revision": "787470e437d0ae96bb075efc438f9612"
  },
  {
    "url": "assets/js/33.22fab62d.js",
    "revision": "d3fb20c0fd3d658c5f9123d4f4de93e5"
  },
  {
    "url": "assets/js/34.604379dd.js",
    "revision": "ea96982d29d06a925f5bd22a965fdd33"
  },
  {
    "url": "assets/js/35.c391300d.js",
    "revision": "c98e9b90d761a2c7ed8f96b25e2e529b"
  },
  {
    "url": "assets/js/36.4cf3d98b.js",
    "revision": "884198dc83753ef9e28f4883013d21d8"
  },
  {
    "url": "assets/js/37.418617ed.js",
    "revision": "ad089f43923ee1a95459b4c05e230317"
  },
  {
    "url": "assets/js/38.dc17eda3.js",
    "revision": "ed66ddfc22a84cc55e4dd378e149752f"
  },
  {
    "url": "assets/js/39.af278111.js",
    "revision": "1efa0620826655a1091fe6bd734ca405"
  },
  {
    "url": "assets/js/4.4fbe595f.js",
    "revision": "d7720781517dc909e875cccda1366136"
  },
  {
    "url": "assets/js/40.652f7e41.js",
    "revision": "7273330d3474e2b7259d612722ad428f"
  },
  {
    "url": "assets/js/41.fb71b457.js",
    "revision": "a2ae5f8e9647c5dc50c8e92d136aa527"
  },
  {
    "url": "assets/js/42.b0712997.js",
    "revision": "6b323ead94e870948e3300abb514792d"
  },
  {
    "url": "assets/js/43.a6debad3.js",
    "revision": "e12480956fdab9eb94926097238e9076"
  },
  {
    "url": "assets/js/44.0c07aead.js",
    "revision": "4be960d48d1a989b9f5ee8c36aa2238c"
  },
  {
    "url": "assets/js/45.ad2e8d97.js",
    "revision": "a15883456981d944c6e96f0632f3478a"
  },
  {
    "url": "assets/js/46.0afeaaf0.js",
    "revision": "a9526be6d529c4ad8ee870f6bd03599c"
  },
  {
    "url": "assets/js/47.9bc56548.js",
    "revision": "0491ab03c5db20db62959e11a77f5ab5"
  },
  {
    "url": "assets/js/48.4d55ac05.js",
    "revision": "b86c376029024e61ba5353b10a7523d8"
  },
  {
    "url": "assets/js/49.3cb2247d.js",
    "revision": "c10d5dbe1d7e1cc73d9d9d21754bccde"
  },
  {
    "url": "assets/js/5.b0f4a2b4.js",
    "revision": "f85f80d1bc7e6172d1473ea21684e6fa"
  },
  {
    "url": "assets/js/50.d381b514.js",
    "revision": "b21c4e0063bcff1549afc365c1b0598b"
  },
  {
    "url": "assets/js/51.5d7b5777.js",
    "revision": "dbe85c7160901f12bb8a390ca87d4cff"
  },
  {
    "url": "assets/js/52.a393517e.js",
    "revision": "1f6a9e604960f78a377d432736180778"
  },
  {
    "url": "assets/js/53.15483fa1.js",
    "revision": "05e8192279f8ca8e1767534458da1629"
  },
  {
    "url": "assets/js/54.b52f1657.js",
    "revision": "ef3ccfa6ad630e04b51e15f13e45ddd6"
  },
  {
    "url": "assets/js/55.b7feb75e.js",
    "revision": "f5f2cd200973574624cfb6342279c8ae"
  },
  {
    "url": "assets/js/56.6d8d1a18.js",
    "revision": "57487d937f5e1638324ae8b81ba25a33"
  },
  {
    "url": "assets/js/57.98c7dcfb.js",
    "revision": "181243480c4718fb26eb5e9f78fa104f"
  },
  {
    "url": "assets/js/58.a9624e37.js",
    "revision": "e0e41edc9bd3fadeb70387307fbdb5a4"
  },
  {
    "url": "assets/js/59.8f737529.js",
    "revision": "d5769fbd7adb0823365ebb929e5c5f3e"
  },
  {
    "url": "assets/js/6.14ca8a99.js",
    "revision": "ab2ad985f96491ebb6b3db94c1623fc3"
  },
  {
    "url": "assets/js/60.827a9e71.js",
    "revision": "5eb59c502d04f597620a5458b9ff7c1f"
  },
  {
    "url": "assets/js/61.541fcb6a.js",
    "revision": "d50aa5c10bd862bc0e7de875dd93d375"
  },
  {
    "url": "assets/js/7.b1390d1f.js",
    "revision": "bbdc7b8a3c10584ea511e0fb655f0adb"
  },
  {
    "url": "assets/js/8.ced9dd6a.js",
    "revision": "add082d5b4d32c6d658df919f7c480bd"
  },
  {
    "url": "assets/js/9.77056265.js",
    "revision": "a718956c2e5a69f0c38fe14fe8d4a8df"
  },
  {
    "url": "assets/js/app.6e389d62.js",
    "revision": "b038318d5ba77ae4283f843518b29c81"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "0e17eeb9de81ed9a54e6e4ee935077f2"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "beba8014339a0ed663474255c66b5118"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "60b8889a726b227ec29838c63562d621"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "4a5731ec9fee7d3d4f7bd571ecc88d0d"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "3fef797bdd16010528cb2c9fcdbdd804"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "2dfff9840453876f7d69acf352391b0e"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "8f9f6d1c5efbba1b5518e0ced4426241"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "7e26a83be1b5cbf26a043dbe7ceda11b"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "2bde85ce0b230e3af128f0c2986fd14c"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "9620f2e0f5539ba025784ead67002aff"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "d7e4b3997e0fb450c8a66891d690e398"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "ec51278d7902fa3ce3f513ba37b57605"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "88284167da5981330721cd3dc5343fbd"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "492be659e2d677be889c0ee3564f6972"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "9b5fd2276456134f78aaa8ee6175561a"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "47688d0f894b43f91bf29cd02667aa01"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "33e78d60d933367de69b5abaca568167"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "5377c387af66793a26d2cc380d3e9478"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "479db0c4334d8fd7068002cb2a54cd3b"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "967349d3b1579c8bba1de50e2185f391"
  },
  {
    "url": "guide/finance/issue-digital-certificate.html",
    "revision": "025bbebe45749f84dac392a4397d537e"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "6667888b5e25e814551bf47f126ccbf8"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "8c2ded9c6202251f36cce17f00df5d96"
  },
  {
    "url": "guide/finance/residence-tax.html",
    "revision": "d800673941f517732822c32d80037928"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "fc6918de450ae1ef11b33538344d279d"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "e085e0c27a5843fd1b3ef477049e9fa9"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "0d63f401684b8918b989e826df807268"
  },
  {
    "url": "guide/health/emergency-numbers.html",
    "revision": "1dfc485986c2341886292d3c4c731862"
  },
  {
    "url": "guide/health/english-support-hospitals.html",
    "revision": "24c8e101d4cfa0a568d77c36352f353d"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "9693258c8ffd3253f661405433bdceab"
  },
  {
    "url": "guide/health/nhi-contact.html",
    "revision": "5de6eb8c3a7f85b04f4c3bc765538e84"
  },
  {
    "url": "guide/health/nhis-coverage-update.html",
    "revision": "3b88c47df00d21132450627cd12281cb"
  },
  {
    "url": "guide/health/pharmacies-search.html",
    "revision": "fd66a2ef3ce6b70a1b5b2588aa9649a1"
  },
  {
    "url": "guide/health/private-insurance-companies.html",
    "revision": "6221de86e441616127ac142e030a62ce"
  },
  {
    "url": "guide/index.html",
    "revision": "42473f5d9b51c743357fc596e9172cad"
  },
  {
    "url": "guide/transportation/book-bus-tickets.html",
    "revision": "5f53881fc19c069c3d501e4890e27c79"
  },
  {
    "url": "guide/transportation/car-insurance-contact.html",
    "revision": "af93dfaca2ae85a7775ade104dd5056c"
  },
  {
    "url": "guide/transportation/designated-driver.html",
    "revision": "f776b4709a038ab9e884d3e87e6022aa"
  },
  {
    "url": "guide/transportation/english-driving-school.html",
    "revision": "7bcee3a71fe67293f6556633333f6eba"
  },
  {
    "url": "guide/transportation/exchange-license-process.html",
    "revision": "6cd408e0fb50be4e52730b0814e552b3"
  },
  {
    "url": "guide/transportation/hi-pass-card.html",
    "revision": "223f4cc8991c736c584f35841d1791a1"
  },
  {
    "url": "guide/transportation/public-kickboard.html",
    "revision": "ffe6b88e6fbb8c945f42a07ae0d17351"
  },
  {
    "url": "guide/transportation/public-transportation-websites.html",
    "revision": "77e028958831bf564604666849d26208"
  },
  {
    "url": "guide/transportation/transportation-card.html",
    "revision": "9d68596706b656011b6cfacd939df6ee"
  },
  {
    "url": "guide/transportation/update-taxi-price.html",
    "revision": "b0bac9e64aef0ffdfc704c6f01ddf7be"
  },
  {
    "url": "guide/workbusiness/52-weekly-hours.html",
    "revision": "915ac32cd22507b66b4f543036364b1f"
  },
  {
    "url": "guide/workbusiness/anti-bribery-law.html",
    "revision": "9d5efe413fbf6bb9a6d02a2825310d56"
  },
  {
    "url": "guide/workbusiness/revision-hiring-law-2019.html",
    "revision": "7bf5f0dff7f3b5ce4600e642dbc0ae9b"
  },
  {
    "url": "guide/workbusiness/work-titles.html",
    "revision": "506f503a0a58b3195bb048cb34b7c5a7"
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
    "revision": "1dc355880a7690fd6187bed2cd83bfff"
  },
  {
    "url": "logo.png",
    "revision": "0d18839d5f2d274a9da66e09bb33294c"
  },
  {
    "url": "main.jpg",
    "revision": "033722c7a145fe1889e11f4b1fb08733"
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
