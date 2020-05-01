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
    "revision": "19293534ddaf140a116ae6300680ff5c"
  },
  {
    "url": "assets/css/0.styles.bb473f0d.css",
    "revision": "8df7c78e9211c05186bc9264d78d8bed"
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
    "url": "assets/js/12.369bf2d7.js",
    "revision": "7d1fad24eac30c2a7d8ab985361ec6a5"
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
    "url": "assets/js/15.d24d9357.js",
    "revision": "a3e08a430063d7a1f01535704daf93e0"
  },
  {
    "url": "assets/js/16.0a8bc48e.js",
    "revision": "c884aa1d54847eadee918128eb203692"
  },
  {
    "url": "assets/js/17.16769da0.js",
    "revision": "da976ce0152778fcfda2016baefdb8f9"
  },
  {
    "url": "assets/js/18.906cb914.js",
    "revision": "f688c0f5e2137873a6812415b90c4e9d"
  },
  {
    "url": "assets/js/19.cc4ce6c2.js",
    "revision": "ce023548e7be87a4279ccb43868ec9b4"
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
    "url": "assets/js/24.3b27dcaf.js",
    "revision": "e3e1baf9617eacc5a767f2895a15525b"
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
    "url": "assets/js/28.856be612.js",
    "revision": "f4c036a90d1183ac91dd296ec9a57a3e"
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
    "url": "assets/js/4.7a8de84b.js",
    "revision": "24a28ad981397f5a40256056f4a25d47"
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
    "url": "assets/js/48.d2f371b5.js",
    "revision": "fd14362c618eb996cd9db692cb10539c"
  },
  {
    "url": "assets/js/49.44f9db1c.js",
    "revision": "f282519a0b4289c878d99c0b7ca0b2b5"
  },
  {
    "url": "assets/js/5.616b0f4f.js",
    "revision": "83ef3372b2d27fe1bd5ee3ffe5f97c57"
  },
  {
    "url": "assets/js/50.bb9f22e3.js",
    "revision": "6ba90f7d8475dfd0411de1f162a7c6d0"
  },
  {
    "url": "assets/js/51.524268f3.js",
    "revision": "76e9257daa1423734d060ea90c57b894"
  },
  {
    "url": "assets/js/52.0b27f2d2.js",
    "revision": "0ac9f5d3aaf12032a21c6a80d1ddf46f"
  },
  {
    "url": "assets/js/53.975de131.js",
    "revision": "efe3c27c56b08e17379a2e07fe364788"
  },
  {
    "url": "assets/js/54.c5c81dbf.js",
    "revision": "7fbf35bb38091ca3ec8c8bebdd0fc55a"
  },
  {
    "url": "assets/js/55.475c3514.js",
    "revision": "b9a152df816adb17ebaf0cf664f51395"
  },
  {
    "url": "assets/js/56.36c0b649.js",
    "revision": "855eac14a92f59962295d33c9a82cbff"
  },
  {
    "url": "assets/js/57.37077a25.js",
    "revision": "0f2476445ecab313f0ff2e7d675773c4"
  },
  {
    "url": "assets/js/58.b8955eb5.js",
    "revision": "3b87860f495b1cd1e8ee08d31d78b427"
  },
  {
    "url": "assets/js/59.dafa2173.js",
    "revision": "fbc324ed544ed6ae1159aa192e1d9872"
  },
  {
    "url": "assets/js/6.c17b18cb.js",
    "revision": "048ce2c29a5cea12ffe4a68e52be3b3e"
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
    "url": "assets/js/app.5abd9d06.js",
    "revision": "3178e8ffacc0ef1c8f33e9c2a622bc0b"
  },
  {
    "url": "guide/accommodations/jeonse-loan.html",
    "revision": "0c0a998971aff7a76f35bba23bd4e9a4"
  },
  {
    "url": "guide/accommodations/moving-cleaning-companies.html",
    "revision": "1aa8df17e58fd0011cab08e8d7042dca"
  },
  {
    "url": "guide/accommodations/moving-services-platform.html",
    "revision": "67b47bb41d662460a70c456a48e50a9b"
  },
  {
    "url": "guide/accommodations/realtors-english.html",
    "revision": "7908f6498cafcd678652eb699cf5af4d"
  },
  {
    "url": "guide/accommodations/realtors-fees.html",
    "revision": "8382c74ca8b16a08069990d664d39755"
  },
  {
    "url": "guide/accommodations/websites-to-find-house.html",
    "revision": "df465dda13895bc703ccd25b31c3d8f3"
  },
  {
    "url": "guide/administration/group-application-students.html",
    "revision": "56b1f04207619b32ed482b4dc9c9baa9"
  },
  {
    "url": "guide/administration/kiip.html",
    "revision": "c0f25d58224686282da4797bc1659fae"
  },
  {
    "url": "guide/administration/lost-arc.html",
    "revision": "b1789b0ea749801c920f7974197368e1"
  },
  {
    "url": "guide/administration/renewal-f-6.html",
    "revision": "d71cd000dfcfddd708af67bd552dbc90"
  },
  {
    "url": "guide/administration/student-visa-d-2.html",
    "revision": "93b5e34e3a17e36525bd3acc7a325334"
  },
  {
    "url": "guide/administration/visa-numbers-links.html",
    "revision": "da16d42ca0a0e686f90f0c766731d6d0"
  },
  {
    "url": "guide/administration/visa-point-d-10.html",
    "revision": "0a322aae7ee8477c808a3cd3645b0f56"
  },
  {
    "url": "guide/administration/visa-point-f-2.html",
    "revision": "09f7efb2bc74d7c1a4a5056575172fdb"
  },
  {
    "url": "guide/administration/working-with-d-2.html",
    "revision": "45a11a593147cd10c7ce1316c1bef5de"
  },
  {
    "url": "guide/culture/basic-korean-manners.html",
    "revision": "430ec13a835f91148e3c81e2964eb074"
  },
  {
    "url": "guide/culture/formal-casual-speech.html",
    "revision": "34bdac3224fe76f06978a086287a81fa"
  },
  {
    "url": "guide/dailylife/free-call-mobile.html",
    "revision": "c00a1fc44973275307cf2701e79bfe47"
  },
  {
    "url": "guide/dailylife/mobile-companies.html",
    "revision": "fe0a90e27a236dfc476b026a10024c89"
  },
  {
    "url": "guide/education/top-universities-2019.html",
    "revision": "75699c0d95bb91a1630cbc16887e56d9"
  },
  {
    "url": "guide/finance/issue-digital-certificate.html",
    "revision": "162b6428134838849e16dc9dd5c6d8cc"
  },
  {
    "url": "guide/finance/language-support-banks.html",
    "revision": "a0a139b3caadb5dac7d99fd5f1c68275"
  },
  {
    "url": "guide/finance/language-support-cards.html",
    "revision": "9d27cc11b9b824d21dfde03565538ef6"
  },
  {
    "url": "guide/finance/residence-tax.html",
    "revision": "7b2662751889f91e12e1ba51bf69cb61"
  },
  {
    "url": "guide/general/2019-calendar.html",
    "revision": "46e40faf9ab99cc72f550238d5a4da90"
  },
  {
    "url": "guide/general/2020-calendar.html",
    "revision": "1f81d10ff415998a8ca1b39a4bbcbb9b"
  },
  {
    "url": "guide/general/basic-words.html",
    "revision": "54550392fd910f69e308291655b4c903"
  },
  {
    "url": "guide/health/emergency-numbers.html",
    "revision": "2bf1b008ae718721a041476c8b849972"
  },
  {
    "url": "guide/health/english-support-hospitals.html",
    "revision": "fad7fd98d4d3c1d77550c869f2475224"
  },
  {
    "url": "guide/health/mandatory-nhis.html",
    "revision": "c86c2e1407eee7aa13b3ce869c0a8ff3"
  },
  {
    "url": "guide/health/nhi-contact.html",
    "revision": "0251a2361936046d77a92c8f4eac82df"
  },
  {
    "url": "guide/health/nhis-coverage-update.html",
    "revision": "86dd035135b0c88d8d28c2dbd7aee548"
  },
  {
    "url": "guide/health/pharmacies-search.html",
    "revision": "417fed6a0924b69d2c0b744ce4215ec4"
  },
  {
    "url": "guide/health/private-insurance-companies.html",
    "revision": "7d1b263ed986b45a36719b42ec5a4030"
  },
  {
    "url": "guide/index.html",
    "revision": "fbad30c78026da90a63e5c4540648cdb"
  },
  {
    "url": "guide/transportation/book-bus-tickets.html",
    "revision": "bdd4db41efc387ab03bdb8b902977591"
  },
  {
    "url": "guide/transportation/car-insurance-contact.html",
    "revision": "7fd82825c7a4a8cb7325161d6bb5bc72"
  },
  {
    "url": "guide/transportation/designated-driver.html",
    "revision": "6266fac5187af740e0fec17311bfc036"
  },
  {
    "url": "guide/transportation/english-driving-school.html",
    "revision": "3c1a5b6fd0f725c931e243b5bbca419a"
  },
  {
    "url": "guide/transportation/exchange-license-process.html",
    "revision": "c717a4fa5a1d44b19a824fddc204d4a9"
  },
  {
    "url": "guide/transportation/hi-pass-card.html",
    "revision": "867e4c375b5d062dc59d218876ae864d"
  },
  {
    "url": "guide/transportation/public-kickboard.html",
    "revision": "5ee08b94c5b2bcdd2ff30f7558a90764"
  },
  {
    "url": "guide/transportation/public-transportation-websites.html",
    "revision": "1515617cbf083c3538a7dd03c8939883"
  },
  {
    "url": "guide/transportation/transportation-card.html",
    "revision": "830af6d16fa7d0afc55c127e6f1ea84a"
  },
  {
    "url": "guide/transportation/update-taxi-price.html",
    "revision": "b8794d80cd09a101e878d9eee9bd15f0"
  },
  {
    "url": "guide/workbusiness/52-weekly-hours.html",
    "revision": "f1fc859b7bcb6b3acf3edab7f4042433"
  },
  {
    "url": "guide/workbusiness/anti-bribery-law.html",
    "revision": "5be10d6eca0fb43abc00ba2f4b60c054"
  },
  {
    "url": "guide/workbusiness/revision-hiring-law-2019.html",
    "revision": "a5063784d7ef63bb9f80b054d8f53d76"
  },
  {
    "url": "guide/workbusiness/work-titles.html",
    "revision": "32bc8cd71e6a1b0356387eedfad3b779"
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
    "revision": "3687b16a778fc3b6982ae707d75d9d09"
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
