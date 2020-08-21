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
    "revision": "b6ccd2d79446c8ec86682dc57632dbcb"
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
    "url": "assets/js/11.9ef3bcae.js",
    "revision": "2e3aa748349459dc3b977e447d5152cf"
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
    "url": "assets/js/14.1a3d2b4d.js",
    "revision": "da59faf9da3b56431b35ed9f2f30c41f"
  },
  {
    "url": "assets/js/15.7530deb6.js",
    "revision": "1061bffc9bb92f3101ff98858ff9e8bf"
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
    "url": "assets/js/18.a6610dfd.js",
    "revision": "39a53599bbdb50bc1594e67f680de51d"
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
    "url": "assets/js/39.3a8af449.js",
    "revision": "cb9c2e9657839524b1773fc13849f782"
  },
  {
    "url": "assets/js/4.1855fe4d.js",
    "revision": "aef79a7dc7872276bdf13182dbfad01b"
  },
  {
    "url": "assets/js/40.bf76abf3.js",
    "revision": "81c7bd5fc05db24f8d4a0f7575c800f6"
  },
  {
    "url": "assets/js/41.1476f82a.js",
    "revision": "f815d38f2ca34a16d0e25e568da3ed7a"
  },
  {
    "url": "assets/js/42.8c549e0d.js",
    "revision": "9f2aa35c449c2fde6fc7f20633eae186"
  },
  {
    "url": "assets/js/43.abfcfd22.js",
    "revision": "ecbb56dd4a4c3a219461ca454fd7117d"
  },
  {
    "url": "assets/js/44.5c7880ba.js",
    "revision": "d3e399f179d23f24510059d7e1293905"
  },
  {
    "url": "assets/js/45.c5293b12.js",
    "revision": "75033cafbde4e0c76d82b14c1f427c02"
  },
  {
    "url": "assets/js/46.3157a94a.js",
    "revision": "bf447931cb7e6eaee6fa263341710190"
  },
  {
    "url": "assets/js/47.068a46a8.js",
    "revision": "40bceed2097c2d7e8a68307cf67b75b7"
  },
  {
    "url": "assets/js/48.7079d6d9.js",
    "revision": "920a743b3e99a3c2de3564d7f18ab129"
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
    "url": "assets/js/57.d91cfe4d.js",
    "revision": "2d73c0fadbf3df83396b39ca0bf37c00"
  },
  {
    "url": "assets/js/58.10fb2db8.js",
    "revision": "bd63bb1b783a9746a2bb156113960064"
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
    "url": "assets/js/app.1186af94.js",
    "revision": "614c87311674a1e4cf97927b546dcf37"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "2a36c7cd9e0d0028b5c0dc653acc6606"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "67f660154a476cd85f01a8ab664ef4db"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "65a04fa3ee052329150a47aee9bc0ac8"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "9dced888ee9fdcd5795276f11b6c43e6"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "214a5284077836023e1f3bea2663afe1"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "1124e08ac4869eaebb3babc3501dfaf7"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "460716ed8467e6808b203ac179826ab9"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "096fb5d1a18ded2faa0ebb6ae89b7c9a"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "89626ccaa5e1719d4492078bbbba8f93"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "91a911a907ce318bfd03de5ededfda25"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "1e110efc732f8675ac5ef5ae91db1acf"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "0fac47daec892bab0bf111eb1240ed5c"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "47fbdda42a85a118a4ff27f43af70e85"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "2f52fbcc9a545427fb622123d04466dc"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "2030f4e936caa73ff50d0ed95f409e6c"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "4a49ea2fc1df988c57f31f39ed1a1d66"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "3e75b9bd0f624a2f74afb840fddf0fe0"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "7e382e76c415b411e11561bbd06b1065"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "fcc4f866ece3b023894ce9d31c916ceb"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "e95c34aabdaa7759373422cf5ffdd5fd"
  },
  {
    "url": "guide/finance/issue-digital-certificate.html",
    "revision": "79afdde5473a98f0ffedcf18ebd6cc9d"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "ca894ffe8132e30a87ccc666a52d3689"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "98d22467be06f12a046c188a201641a2"
  },
  {
    "url": "guide/finance/residence-tax.html",
    "revision": "2a3d47268d061cfb087abd373ec6376b"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "ed14db0bed4d6d17e8384e462d49356c"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "10c6e545f3101548bd31a19d46aa90b4"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "8a81b8449daeb1987aeed8e7ed97d644"
  },
  {
    "url": "guide/health/emergency-numbers.html",
    "revision": "9737c71fbdc8731c2ff647c6e3c1b457"
  },
  {
    "url": "guide/health/english-support-hospitals.html",
    "revision": "811f4b1048635c4facfced7688e8b8e2"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "f3e109d2cfb34d921947631c23455216"
  },
  {
    "url": "guide/health/nhi-contact.html",
    "revision": "74912e3ec0fa02891ddd0281e79379e1"
  },
  {
    "url": "guide/health/nhis-coverage-update.html",
    "revision": "cae2ad98e52e28d3006ad370706b1fb8"
  },
  {
    "url": "guide/health/pharmacies-search.html",
    "revision": "e234dfd2fb53fe0d887c0b716f5d2f49"
  },
  {
    "url": "guide/health/private-insurance-companies.html",
    "revision": "9919b7b9854be55601290225dda90a28"
  },
  {
    "url": "guide/index.html",
    "revision": "030cbef74d28cd08db5fd056516ddb2b"
  },
  {
    "url": "guide/transportation/book-bus-tickets.html",
    "revision": "8f6dbbd154bd514f532bbc7a7b6f5d27"
  },
  {
    "url": "guide/transportation/car-insurance-contact.html",
    "revision": "1dc105e2b0acb7553368807bc2e675ce"
  },
  {
    "url": "guide/transportation/designated-driver.html",
    "revision": "09ae81766197b0cf55fae80a618cb856"
  },
  {
    "url": "guide/transportation/english-driving-school.html",
    "revision": "16fc77203de90ae153bf90011d9fd7d9"
  },
  {
    "url": "guide/transportation/exchange-license-process.html",
    "revision": "c362442865334039e9c9f26c7558fa23"
  },
  {
    "url": "guide/transportation/hi-pass-card.html",
    "revision": "4aea14e26ce6af1a5672a6752e4bdc4f"
  },
  {
    "url": "guide/transportation/public-kickboard.html",
    "revision": "c623823ae6fe9a31ccbf6a100829a429"
  },
  {
    "url": "guide/transportation/public-transportation-websites.html",
    "revision": "c667b369b4b3903690bda9f2c553dbab"
  },
  {
    "url": "guide/transportation/transportation-card.html",
    "revision": "34ba631b63996b4d6d2a89d2c822a48f"
  },
  {
    "url": "guide/transportation/update-taxi-price.html",
    "revision": "17b5af64999bfc282daccfd00a38c95e"
  },
  {
    "url": "guide/workbusiness/52-weekly-hours.html",
    "revision": "ea42e05b21836e0be872e35d8e909496"
  },
  {
    "url": "guide/workbusiness/anti-bribery-law.html",
    "revision": "f2da25c40c3f99345df5c5cbc2d2abc2"
  },
  {
    "url": "guide/workbusiness/revision-hiring-law-2019.html",
    "revision": "93a49fa149e9214c582c9663764bbcc1"
  },
  {
    "url": "guide/workbusiness/work-titles.html",
    "revision": "35a526d0ca786e6cec323fc20c6da4cd"
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
    "revision": "a852ee8bfe409aacfacf61767d496306"
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
