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
    "revision": "d50b0cdf50e90315181639e02ce30f3a"
  },
  {
    "url": "assets/css/0.styles.b20d5d40.css",
    "revision": "df81ec425a045a1c84be4907465eb4a0"
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
    "url": "assets/js/10.9837bf52.js",
    "revision": "73aa6aec62a85637fc9b0a5de4f5eece"
  },
  {
    "url": "assets/js/11.d8939d34.js",
    "revision": "af6f8f895083f49e1f378eef729d9bbb"
  },
  {
    "url": "assets/js/12.19a623d5.js",
    "revision": "182f68c8d883a34ff5d5e0aefd8dd861"
  },
  {
    "url": "assets/js/13.815a4b2b.js",
    "revision": "2ee68e4ef31d84f267a079fc6209d214"
  },
  {
    "url": "assets/js/14.4bb9e747.js",
    "revision": "e8c8df5b5fa7039ea92a81945e38a611"
  },
  {
    "url": "assets/js/15.d87dcd02.js",
    "revision": "e15664dcf045aef6a6d8f5ecf726139e"
  },
  {
    "url": "assets/js/16.e0aea760.js",
    "revision": "f07e2dba95e4cd08a2694cd99513ee88"
  },
  {
    "url": "assets/js/17.395d5c3e.js",
    "revision": "44b332ba60820c5e2931870968118ff6"
  },
  {
    "url": "assets/js/18.258e2225.js",
    "revision": "c7a1fe9a24436ba07043da67a455bb18"
  },
  {
    "url": "assets/js/19.b569ac81.js",
    "revision": "c5726747e8fc449540500a3cfbac2c5b"
  },
  {
    "url": "assets/js/2.b939d8ca.js",
    "revision": "3dc709ffbe51008bd835744906dca99c"
  },
  {
    "url": "assets/js/20.a94aad41.js",
    "revision": "a809ed8394631da887600951f90d9cbe"
  },
  {
    "url": "assets/js/21.f92ff016.js",
    "revision": "8897935ddd0ffc17b26a9d2acd2bd08a"
  },
  {
    "url": "assets/js/22.5f5b58b3.js",
    "revision": "b0652df1264f31c6422d4032bb11370f"
  },
  {
    "url": "assets/js/23.9814db38.js",
    "revision": "06ba81e80bb7db4d0dd173b60cb34cba"
  },
  {
    "url": "assets/js/24.4094da7c.js",
    "revision": "ffb2aea90419bf9c2830f2b8e1c3d6e9"
  },
  {
    "url": "assets/js/25.943a133b.js",
    "revision": "1851afdf0b7e1a7277527ef58fe7de8b"
  },
  {
    "url": "assets/js/26.c742d9ea.js",
    "revision": "5077a02bb59b9b704161795cb401fd42"
  },
  {
    "url": "assets/js/27.0a62b7d2.js",
    "revision": "583001363295d58a475a46a0b5b99bbe"
  },
  {
    "url": "assets/js/28.6e04fb20.js",
    "revision": "15c8bb486572b747d84dd6b4fdcb81e9"
  },
  {
    "url": "assets/js/29.967ce71f.js",
    "revision": "0eff794a27c471becbd1af6863356fe8"
  },
  {
    "url": "assets/js/3.384b38c9.js",
    "revision": "a0a1104cc7724d7c4f59b1d3a34a5618"
  },
  {
    "url": "assets/js/30.d55b2b5b.js",
    "revision": "d92a85381c612e285f1f42288c7db732"
  },
  {
    "url": "assets/js/31.028471b7.js",
    "revision": "84f2399523d5d98f728176b90027bb84"
  },
  {
    "url": "assets/js/32.951f72a2.js",
    "revision": "371cb0b404751103f8647c2819402bb0"
  },
  {
    "url": "assets/js/33.7f48750d.js",
    "revision": "d34a65675f3b0014dd67b8f8d8a24a3e"
  },
  {
    "url": "assets/js/34.c940d229.js",
    "revision": "c8ab6dde8bf2c66247e073ac481d087f"
  },
  {
    "url": "assets/js/35.7e48b7c0.js",
    "revision": "5119e1c6ccc37974324099a8ad97a33c"
  },
  {
    "url": "assets/js/36.370f41cd.js",
    "revision": "1c125fb9bd4fab82b9fa42bce5cab906"
  },
  {
    "url": "assets/js/37.793579de.js",
    "revision": "f06e9999cd30d8e0e1416c959254fac8"
  },
  {
    "url": "assets/js/38.cfd0363a.js",
    "revision": "1aa56c41679648204080e66a0484220d"
  },
  {
    "url": "assets/js/39.7a9dd149.js",
    "revision": "8eecdb8407be496b44ac53d8eff62ca9"
  },
  {
    "url": "assets/js/4.1855fe4d.js",
    "revision": "aef79a7dc7872276bdf13182dbfad01b"
  },
  {
    "url": "assets/js/40.1edb2836.js",
    "revision": "aa5b8a77a548d0193231a712f5811b75"
  },
  {
    "url": "assets/js/41.5959341f.js",
    "revision": "15fd2dccf3aefe6ad4024b6e103d18e9"
  },
  {
    "url": "assets/js/42.8c549e0d.js",
    "revision": "9f2aa35c449c2fde6fc7f20633eae186"
  },
  {
    "url": "assets/js/43.28c47d76.js",
    "revision": "4c0f5b55d283d5027eb4013c932956d9"
  },
  {
    "url": "assets/js/44.5c7880ba.js",
    "revision": "d3e399f179d23f24510059d7e1293905"
  },
  {
    "url": "assets/js/45.51252f81.js",
    "revision": "a201754166c696968769bf4d553df56e"
  },
  {
    "url": "assets/js/46.5d571102.js",
    "revision": "82730d268e8477a2e052fdf8cde33dc7"
  },
  {
    "url": "assets/js/47.7b1a7435.js",
    "revision": "8ee77eace85c34780dfa408765767e78"
  },
  {
    "url": "assets/js/48.643390c8.js",
    "revision": "fffcaca2588da39112238c6e1a65f0ca"
  },
  {
    "url": "assets/js/49.79137fe2.js",
    "revision": "3d9bea273e81528a66aed9a6dcbaae2f"
  },
  {
    "url": "assets/js/5.a719ba91.js",
    "revision": "d351b0eec4e230cbff498b76603bfcbe"
  },
  {
    "url": "assets/js/50.617b73b8.js",
    "revision": "ff3e507d8936513c5a9a0e265a8454b5"
  },
  {
    "url": "assets/js/51.5cb6e0e6.js",
    "revision": "4efbcbdc06a52354510fac96cce09ac8"
  },
  {
    "url": "assets/js/52.30fde0c1.js",
    "revision": "c1edf09046ae544f7341ef2e8a31433f"
  },
  {
    "url": "assets/js/53.111b4273.js",
    "revision": "85c6ed9b46c1fec056b82d6b9644c950"
  },
  {
    "url": "assets/js/54.3cc0f7a3.js",
    "revision": "5a8cf5678fd49e36b0ad8d1d71fdda78"
  },
  {
    "url": "assets/js/55.34644087.js",
    "revision": "fad527fcfc7b75b9d75bfa5c9208341b"
  },
  {
    "url": "assets/js/56.721095d5.js",
    "revision": "bab2ef1749cdaf5edb718ef291e5fa17"
  },
  {
    "url": "assets/js/57.0b3f2c20.js",
    "revision": "93e76058279159be2c52be8147972fa5"
  },
  {
    "url": "assets/js/58.2ed4225a.js",
    "revision": "fac0308993bef0a34052e6458178bee5"
  },
  {
    "url": "assets/js/59.150958d3.js",
    "revision": "0e4a54c7a25dd7d4fba70009a88b671b"
  },
  {
    "url": "assets/js/6.4ab96d69.js",
    "revision": "c2ebcc7f3aff8617b98f35a96594d551"
  },
  {
    "url": "assets/js/60.b1b28831.js",
    "revision": "36d3ca14fe31c904e86dbb360b163b20"
  },
  {
    "url": "assets/js/7.ffafa3f2.js",
    "revision": "fa52e7934932f9980f9c347f867215a2"
  },
  {
    "url": "assets/js/8.2275d810.js",
    "revision": "3b493e17d44f3f578779a6cc4c2fe6ba"
  },
  {
    "url": "assets/js/9.dae41c0d.js",
    "revision": "379d782a2084cfa346b217503fb7121a"
  },
  {
    "url": "assets/js/app.092b93d7.js",
    "revision": "65705c90c64ce0c3b0d0665575bf056e"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "9070cd16589a0c1134d86145cfaef259"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "6ec337f377596841f75531515a38cfb2"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "faceaf5bd7b49bb6dbfb7f21d9353110"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "f78a5d3b0d1dcf68441f5e6a223fceff"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "9d991063de166a930ab8d24188b4ad41"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "2ddd684952b6854c7837442d6079b290"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "a83691504d95e4bae771175ce2642f08"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "fc17a29396ddc2b7a4ca1dd127f97b5f"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "ff648ec58eb96c7728101f06dd26023c"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "2e1d4feed46723bf51ab21011a1b08fd"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "ef32c7a96bdcf515684a4c1a3244aef6"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "616c95c07b8df06224d45daa84ab56cf"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "04d73e7d275cc62490338f0f6932d97b"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "9025fa68fb4527255e76308afe5ad2c0"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "99ee124b5052af80b6495fdaa882ea6b"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "049256f6be65763df6574b12669e4d6e"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "7e519eabe967a6fe5044b113d8adfdb8"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "fd23928085cc6d70f3cf8f2c4e66ed44"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "79bdd1e801f4b4a6442424cf328c3a74"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "680989a00672f1660028d4c852c93692"
  },
  {
    "url": "guide/finance/issue-digital-certificate.html",
    "revision": "bcd2308141b93750d737d854106959fa"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "d09b67f76baeb10fe6952f27ba85831e"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "25db52d02a33db53722fb0849a0afe84"
  },
  {
    "url": "guide/finance/residence-tax.html",
    "revision": "3c5f965a624326b9508670a8754f0907"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "c51d18e1f3af5229fb3bb707f4a3ca7f"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "a3bb3af63b1f201f078ff040c14f724d"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "fa5038324a9678c1c00a6e61a320ee90"
  },
  {
    "url": "guide/health/emergency-numbers.html",
    "revision": "6282095afcd6dc07b14c80d8f0c26006"
  },
  {
    "url": "guide/health/english-support-hospitals.html",
    "revision": "4f1338341530b3bef1aedeaac670a84c"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "8ae470ecff797ef210e02d9affcaf41c"
  },
  {
    "url": "guide/health/nhi-contact.html",
    "revision": "e5fa3cf5329d475be6d4e3bb323e5f82"
  },
  {
    "url": "guide/health/nhis-coverage-update.html",
    "revision": "d90ec48362f076b00e2e3560bdb37097"
  },
  {
    "url": "guide/health/pharmacies-search.html",
    "revision": "9d04770e30fb341259c5b9de66aca4e0"
  },
  {
    "url": "guide/health/private-insurance-companies.html",
    "revision": "540d6695a3027920bc46432409db02dd"
  },
  {
    "url": "guide/index.html",
    "revision": "639c9dbb509bc5c8bbef467c47a31f73"
  },
  {
    "url": "guide/transportation/book-bus-tickets.html",
    "revision": "50bec1cf185aa035bea459b7b166233a"
  },
  {
    "url": "guide/transportation/car-insurance-contact.html",
    "revision": "98b7fc63d18aea4a40619e0d64c003d4"
  },
  {
    "url": "guide/transportation/designated-driver.html",
    "revision": "64e1dd0ecba84d41f43f8bc5c14ca915"
  },
  {
    "url": "guide/transportation/english-driving-school.html",
    "revision": "1be196eca868a6b665dbd59fda2b7e12"
  },
  {
    "url": "guide/transportation/exchange-license-process.html",
    "revision": "f2f8c96e1bfa7ec4bfe1fbf99a194215"
  },
  {
    "url": "guide/transportation/hi-pass-card.html",
    "revision": "00d4bb19ba6b0de3d58f8b3a0fdb521e"
  },
  {
    "url": "guide/transportation/public-kickboard.html",
    "revision": "17d02cd32d42d63bdb4bdf5668d38e79"
  },
  {
    "url": "guide/transportation/public-transportation-websites.html",
    "revision": "75ff9657080beb74cfe2c2b617fd1d86"
  },
  {
    "url": "guide/transportation/transportation-card.html",
    "revision": "001004235ec56d8f7e4888664779e241"
  },
  {
    "url": "guide/transportation/update-taxi-price.html",
    "revision": "b1a5680508a889f21f4196d80a55e991"
  },
  {
    "url": "guide/workbusiness/52-weekly-hours.html",
    "revision": "5d2d54415d409a787b2bfe6a78e4368b"
  },
  {
    "url": "guide/workbusiness/anti-bribery-law.html",
    "revision": "274b61b53cd61432a3bc5408352d5688"
  },
  {
    "url": "guide/workbusiness/revision-hiring-law-2019.html",
    "revision": "ab89b98e7c174f4f90ebef9896b8757c"
  },
  {
    "url": "guide/workbusiness/work-titles.html",
    "revision": "47422825990e4df97ac090e0391de88c"
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
    "revision": "70698987e5146bf7cfead2c7fdefc83c"
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
