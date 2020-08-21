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
    "revision": "7aec7aa2a861e33e90dc5de855f0316f"
  },
  {
    "url": "assets/css/0.styles.eacfae90.css",
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
    "url": "assets/js/10.4f4e4e62.js",
    "revision": "a149a7c802a62230254d94086d1d3f02"
  },
  {
    "url": "assets/js/11.3cf9ff3e.js",
    "revision": "e483291e14369fbb67aed722556394d7"
  },
  {
    "url": "assets/js/12.f5181129.js",
    "revision": "e0ae6150eab8a5fa96a5ea2cbae6d701"
  },
  {
    "url": "assets/js/13.8de015ab.js",
    "revision": "c0f06d159136861f6bea43d96d769544"
  },
  {
    "url": "assets/js/14.c42f5bf3.js",
    "revision": "bb08cb00149475b3e903c76c2fe7e70e"
  },
  {
    "url": "assets/js/15.65b5b0c5.js",
    "revision": "ee29e08880ddd9e76832e1c18b409977"
  },
  {
    "url": "assets/js/16.2a16f09c.js",
    "revision": "47995f31895de138e22d28598d6a53cc"
  },
  {
    "url": "assets/js/17.5ca6df46.js",
    "revision": "68073e53bd8257584cd787f8d4b2053f"
  },
  {
    "url": "assets/js/18.9393ed1d.js",
    "revision": "8637aede4d74a51b2f90babfc504c20c"
  },
  {
    "url": "assets/js/19.f04e0303.js",
    "revision": "dcbe0da0e73844dbb29998e5084dec1e"
  },
  {
    "url": "assets/js/2.47467910.js",
    "revision": "845795d8983842bf0ade2a3c4812c8aa"
  },
  {
    "url": "assets/js/20.49d0efaa.js",
    "revision": "4d0756d521b786a05f3df0de1513f738"
  },
  {
    "url": "assets/js/21.51773eda.js",
    "revision": "f4845cc5ed46a6decd865ea026c4bbd4"
  },
  {
    "url": "assets/js/22.368c5977.js",
    "revision": "cb8a3c77834080089f5e3654c40a64af"
  },
  {
    "url": "assets/js/23.80871d51.js",
    "revision": "92954c48f887176b3fb7090f43ec249f"
  },
  {
    "url": "assets/js/24.25cdece4.js",
    "revision": "d5078a6f3f1c7b6f58a640dc5a1d7915"
  },
  {
    "url": "assets/js/25.e4f3800c.js",
    "revision": "25d9515bf81ca7f4c1a5d9ca21adc93e"
  },
  {
    "url": "assets/js/26.73063b41.js",
    "revision": "4f1d422bc64b5aadb24d04d90782e5e9"
  },
  {
    "url": "assets/js/27.b4c826fa.js",
    "revision": "a7e1ee9f3a8180e8d500b9d60d94ec01"
  },
  {
    "url": "assets/js/28.0a0c5523.js",
    "revision": "5ef157984c6d65a325cfbf926c735be0"
  },
  {
    "url": "assets/js/29.94c1a459.js",
    "revision": "e8a0fcc2e36198897488d0332382580f"
  },
  {
    "url": "assets/js/3.76a35afd.js",
    "revision": "f5a44a80e5788eaeb52a62db93218783"
  },
  {
    "url": "assets/js/30.c5afedfb.js",
    "revision": "252794e9a39b0640366fc702a1710c5c"
  },
  {
    "url": "assets/js/31.9ad382a8.js",
    "revision": "69456a40693d495beb10369aa3fc4ffc"
  },
  {
    "url": "assets/js/32.017df032.js",
    "revision": "8d2b99f60f3325e48aab4954b72735f3"
  },
  {
    "url": "assets/js/33.08b1e6d1.js",
    "revision": "d3fb20c0fd3d658c5f9123d4f4de93e5"
  },
  {
    "url": "assets/js/34.d86bdc55.js",
    "revision": "ea96982d29d06a925f5bd22a965fdd33"
  },
  {
    "url": "assets/js/35.d72cca11.js",
    "revision": "c98e9b90d761a2c7ed8f96b25e2e529b"
  },
  {
    "url": "assets/js/36.5d2973f6.js",
    "revision": "884198dc83753ef9e28f4883013d21d8"
  },
  {
    "url": "assets/js/37.270a3c4a.js",
    "revision": "ad089f43923ee1a95459b4c05e230317"
  },
  {
    "url": "assets/js/38.ca7d9880.js",
    "revision": "ed66ddfc22a84cc55e4dd378e149752f"
  },
  {
    "url": "assets/js/39.21415618.js",
    "revision": "1efa0620826655a1091fe6bd734ca405"
  },
  {
    "url": "assets/js/4.79adabc1.js",
    "revision": "d7720781517dc909e875cccda1366136"
  },
  {
    "url": "assets/js/40.57dcafa6.js",
    "revision": "7273330d3474e2b7259d612722ad428f"
  },
  {
    "url": "assets/js/41.fb75815d.js",
    "revision": "a2ae5f8e9647c5dc50c8e92d136aa527"
  },
  {
    "url": "assets/js/42.ee8e4dd8.js",
    "revision": "6b323ead94e870948e3300abb514792d"
  },
  {
    "url": "assets/js/43.d7f296aa.js",
    "revision": "e12480956fdab9eb94926097238e9076"
  },
  {
    "url": "assets/js/44.7b9d6fc0.js",
    "revision": "1cfd27bade3f393698e520f06b76411b"
  },
  {
    "url": "assets/js/45.38ddb3d3.js",
    "revision": "a15883456981d944c6e96f0632f3478a"
  },
  {
    "url": "assets/js/46.576c0655.js",
    "revision": "a9526be6d529c4ad8ee870f6bd03599c"
  },
  {
    "url": "assets/js/47.52f49da1.js",
    "revision": "0491ab03c5db20db62959e11a77f5ab5"
  },
  {
    "url": "assets/js/48.7e2eeea3.js",
    "revision": "b86c376029024e61ba5353b10a7523d8"
  },
  {
    "url": "assets/js/49.548ae19d.js",
    "revision": "91fab0760b4373fbab8bb3ab9fff1d64"
  },
  {
    "url": "assets/js/5.807c2ad9.js",
    "revision": "83ef3372b2d27fe1bd5ee3ffe5f97c57"
  },
  {
    "url": "assets/js/50.d103a495.js",
    "revision": "b21c4e0063bcff1549afc365c1b0598b"
  },
  {
    "url": "assets/js/51.9180ff50.js",
    "revision": "dbe85c7160901f12bb8a390ca87d4cff"
  },
  {
    "url": "assets/js/52.2941d961.js",
    "revision": "1f6a9e604960f78a377d432736180778"
  },
  {
    "url": "assets/js/53.b0162d3a.js",
    "revision": "05e8192279f8ca8e1767534458da1629"
  },
  {
    "url": "assets/js/54.112e1478.js",
    "revision": "ef3ccfa6ad630e04b51e15f13e45ddd6"
  },
  {
    "url": "assets/js/55.77c5f7db.js",
    "revision": "f5f2cd200973574624cfb6342279c8ae"
  },
  {
    "url": "assets/js/56.7720ed77.js",
    "revision": "e828f8fc1aa0d074debe047d812f810c"
  },
  {
    "url": "assets/js/57.111aca07.js",
    "revision": "0f2476445ecab313f0ff2e7d675773c4"
  },
  {
    "url": "assets/js/58.a8c79713.js",
    "revision": "e0e41edc9bd3fadeb70387307fbdb5a4"
  },
  {
    "url": "assets/js/59.73e8e05e.js",
    "revision": "d5769fbd7adb0823365ebb929e5c5f3e"
  },
  {
    "url": "assets/js/6.197de310.js",
    "revision": "0abfbf1f1263b9b9185f0f03247765ce"
  },
  {
    "url": "assets/js/60.a2262305.js",
    "revision": "5eb59c502d04f597620a5458b9ff7c1f"
  },
  {
    "url": "assets/js/61.9d847731.js",
    "revision": "d50aa5c10bd862bc0e7de875dd93d375"
  },
  {
    "url": "assets/js/7.399a47a8.js",
    "revision": "bbdc7b8a3c10584ea511e0fb655f0adb"
  },
  {
    "url": "assets/js/8.a22748bf.js",
    "revision": "add082d5b4d32c6d658df919f7c480bd"
  },
  {
    "url": "assets/js/9.6b55fdb1.js",
    "revision": "a718956c2e5a69f0c38fe14fe8d4a8df"
  },
  {
    "url": "assets/js/app.4f1d217f.js",
    "revision": "a2fa1612f90bf99cafc29a8ea545745b"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "eb79511b68ff11004c4fd6ef3e8eea87"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "928f156b1b205fa848e870539f3340ef"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "b238d641d54fb4afcdf58ceececaeebe"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "29b052ca4e33e9eb8a1593b87c5f10dc"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "a5a48921603c440ca888a50bf3ce00d3"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "dd9c088cf7dfc02e6ce2c4bb0eb68646"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "fd84483928fdf6e5fa6e6a3ac6ef3693"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "0ebd8baa44ad2bafc8183696b54d3b6a"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "675d71e69ba318223858e7a681bf1d76"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "a490765f27548358bb63920656535dee"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "6f47a91e8c5a2dfd8b2ea523196b23e6"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "a5e87ba69d46a42462f84b222f1e8c6e"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "0648b386852faeb8b9cdc306a82ccce4"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "b4a3adbcbcc45b0171baea18aa684d3c"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "bdabb49bfc01135447614c670e1bc802"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "475f1df52c0c6aedb7ef5d765933853c"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "b4f221a2c0e98cccf616346aa4bfef2b"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "1950c3891158a177aae307010d489277"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "ebba36732e6a2781d6fbfdfc0fd662e4"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "c6889054fd85805ccaffe397255fc19b"
  },
  {
    "url": "guide/finance/issue-digital-certificate.html",
    "revision": "eb1c446199b93459f31edbb0c0434c1b"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "fb80463897909afa67381a2883592e66"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "56883e8840ef88447caa698137437c98"
  },
  {
    "url": "guide/finance/residence-tax.html",
    "revision": "fba6152289828503288d21a2fc561a7f"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "3ca81184e3f116757ea5f660e710ad1f"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "1cad4628ac4569677c0cf7ad0a73c0a4"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "de8951dd3721634801da3c7082ed0616"
  },
  {
    "url": "guide/health/emergency-numbers.html",
    "revision": "52b59eedf2922204947e738f3f173120"
  },
  {
    "url": "guide/health/english-support-hospitals.html",
    "revision": "0400d7d9ec4a518f8b842dad6da83e5e"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "38de2f3569f71aa0cb95c1481f32738c"
  },
  {
    "url": "guide/health/nhi-contact.html",
    "revision": "dd30c6b7bf91c3e88de87791ea668bd2"
  },
  {
    "url": "guide/health/nhis-coverage-update.html",
    "revision": "b2cf9c94286b7769d3ce150b96076c08"
  },
  {
    "url": "guide/health/pharmacies-search.html",
    "revision": "fe9cf360bff1ecfedb808497add5723c"
  },
  {
    "url": "guide/health/private-insurance-companies.html",
    "revision": "12762eb72e9cdd1efe1e14cd613211b6"
  },
  {
    "url": "guide/index.html",
    "revision": "aafe191e1aad2f1d7ea513b9fff3812a"
  },
  {
    "url": "guide/transportation/book-bus-tickets.html",
    "revision": "a89b8c5922d4e5d8e4d9bdbfdb413409"
  },
  {
    "url": "guide/transportation/car-insurance-contact.html",
    "revision": "4fd79ebd3fe143aa8449fa1830c5b633"
  },
  {
    "url": "guide/transportation/designated-driver.html",
    "revision": "abb2cb5970292312c0c7b18dc8124b4d"
  },
  {
    "url": "guide/transportation/english-driving-school.html",
    "revision": "45cb58fda0357e5757d226ee475e4a78"
  },
  {
    "url": "guide/transportation/exchange-license-process.html",
    "revision": "442774c473705fa92aa2b3eb3705fa3c"
  },
  {
    "url": "guide/transportation/hi-pass-card.html",
    "revision": "0efe7ff137db15a333a045f0c27e8f8c"
  },
  {
    "url": "guide/transportation/public-kickboard.html",
    "revision": "f6e2a7a32aa78e0591e2fbd607fe78a6"
  },
  {
    "url": "guide/transportation/public-transportation-websites.html",
    "revision": "c50c9381cb1b8c08dfbfff04f3e0521e"
  },
  {
    "url": "guide/transportation/transportation-card.html",
    "revision": "098b7ebffd0c9d8a755bf8ec23b5f20d"
  },
  {
    "url": "guide/transportation/update-taxi-price.html",
    "revision": "e5b484a24e697a420f9b4305b42b9ad9"
  },
  {
    "url": "guide/workbusiness/52-weekly-hours.html",
    "revision": "b89731758536c246ee5414dac21c6e71"
  },
  {
    "url": "guide/workbusiness/anti-bribery-law.html",
    "revision": "7e7383a9674879b3bbbc9b1165a69fc7"
  },
  {
    "url": "guide/workbusiness/revision-hiring-law-2019.html",
    "revision": "86d1113d212c5ab3f9fa2adbf71eb7e4"
  },
  {
    "url": "guide/workbusiness/work-titles.html",
    "revision": "534b9440e43502f3a25af8bf2c649f30"
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
    "revision": "8d0c96c1cce20b323081aaa0dd9063d6"
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
