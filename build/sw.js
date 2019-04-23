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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

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
    "url": "favicon.ico",
    "revision": "b065c549807480e1ca08d8a159732a0d"
  },
  {
    "url": "fonts/rockout-webfont.eot",
    "revision": "fead987410855b3e4cd135b8f2aa2704"
  },
  {
    "url": "fonts/rockout-webfont.svg",
    "revision": "face74bcf36ef4ec4b66fb16a58d4b25"
  },
  {
    "url": "fonts/rockout-webfont.ttf",
    "revision": "2dcf5bd7a32f30c90366d0846f4e25ef"
  },
  {
    "url": "fonts/rockout-webfont.woff",
    "revision": "9edc7d03d2dba3ff8800b70c83ec99dc"
  },
  {
    "url": "fonts/rockout-webfont.woff2",
    "revision": "927ee082477d2ee0ef43b0985ab3465a"
  },
  {
    "url": "fonts/Rockout.otf",
    "revision": "220271e54a6c0e1aed79b878b185852a"
  },
  {
    "url": "icon-192.png",
    "revision": "9a46f58cfd6b1c485142239701babe06"
  },
  {
    "url": "icon-512.png",
    "revision": "3194d56357910730c56a7795749cb65c"
  },
  {
    "url": "images/31LkLOnW30L.jpg",
    "revision": "51aeefa977bdd359351e08347ca8db8f"
  },
  {
    "url": "images/410NESCQRFL.jpg",
    "revision": "dd63632e1b23679511eeca33e6a62ed0"
  },
  {
    "url": "images/41B0520SDWL.jpg",
    "revision": "a4dfd982c5368fa8daf35f001d47c378"
  },
  {
    "url": "images/41MDA4CS3VL.jpg",
    "revision": "813187de6040bae288f4a263bd3fb842"
  },
  {
    "url": "images/41VS2CWzOmL.jpg",
    "revision": "e58b2abdee43066b6734cb6d63c5ad2c"
  },
  {
    "url": "images/510jtndUBcL.jpg",
    "revision": "23489560bb6c512af680359747a74f17"
  },
  {
    "url": "images/5115GVGB01L.jpg",
    "revision": "29b3ef29c38b7029957dd2184c088bcf"
  },
  {
    "url": "images/5127ECYB5EL.jpg",
    "revision": "42afcc041b460a8ac713ecbe095cdfb5"
  },
  {
    "url": "images/514MPXTGHDL._SY445_.jpg",
    "revision": "6241f58e8810fc102325cb9e02985413"
  },
  {
    "url": "images/51E2R6CF61L.jpg",
    "revision": "ac0bded04e17ddc055934c11a696f71e"
  },
  {
    "url": "images/51G8GNH8BEL.jpg",
    "revision": "054a625034f461c792e033841a713b07"
  },
  {
    "url": "images/51J0HEN63EL.jpg",
    "revision": "8f1f3e1a63a63f6b98295172fa0716da"
  },
  {
    "url": "images/51MHE83J4ZL.jpg",
    "revision": "d81e91653883af009aed5c3460ee15f9"
  },
  {
    "url": "images/51MXXXKV2WL.jpg",
    "revision": "4af3ba0b714ab9e70c3ed1ccd86ff2d1"
  },
  {
    "url": "images/51RC8ZR6KBL.jpg",
    "revision": "c5dc96b82460da8ed6935b4784b4b278"
  },
  {
    "url": "images/51RWVHB5ERL.jpg",
    "revision": "354db3542db14ab945e9907dd0a68c5c"
  },
  {
    "url": "images/51RYY7K0RXL.jpg",
    "revision": "df8555dd54eaeed62122b2ce840e7dfa"
  },
  {
    "url": "images/51SQSX321EL.jpg",
    "revision": "641b4443cc4cd840353168dc89a575e6"
  },
  {
    "url": "images/51SXN5RP7ML.jpg",
    "revision": "862e0035ac86fbc36c88007dd8257933"
  },
  {
    "url": "images/51WG6DBSMYL.jpg",
    "revision": "14490832f1f3a5d75283c77c43ab8400"
  },
  {
    "url": "images/51XY3TWFSDL.jpg",
    "revision": "6faa499355f72c800bff0150afb5003e"
  },
  {
    "url": "images/71MYwncT6hL._SL1500_.jpg",
    "revision": "388b7cb98bb21cc8e33789383ed8aca2"
  },
  {
    "url": "images/71SM5TP4TGL.gif",
    "revision": "5b9cdb39c436fc537765a263847a645f"
  },
  {
    "url": "images/91ev2GhyH9L._SL1500_.jpg",
    "revision": "c228c71a3b084b097e4899b72f65e34f"
  },
  {
    "url": "images/91GIMo14k8L._SL1500_.jpg",
    "revision": "bd706820a02daeb4a29bce73a0b99479"
  },
  {
    "url": "images/91jSk+8E3SL._SL1500_.jpg",
    "revision": "a17a98b11c77134acd064fce28fa0428"
  },
  {
    "url": "images/A18P06ohtrL._SL1500_.jpg",
    "revision": "4c655c3d9c353922d649de183e22fb88"
  },
  {
    "url": "images/balance.jpg",
    "revision": "cb26f9cbb0d7a1366ad82b5654f91755"
  },
  {
    "url": "images/benny.jpg",
    "revision": "9c3749602c3c345d5fa82614b9a79a7f"
  },
  {
    "url": "images/psychocop.jpg",
    "revision": "39021a97ad6e9ab9561ea3350bbf884b"
  },
  {
    "url": "images/vhs.png",
    "revision": "e9e37ffa19593200c743f223ac0fe1bf"
  },
  {
    "url": "index.html",
    "revision": "d9c6df0ecaff36896ced2edf378b1164"
  },
  {
    "url": "launch/launch-1125x2436.jpg",
    "revision": "93cd3ac47479f0e4c396295e38a2e2af"
  },
  {
    "url": "launch/launch-1242x2148.jpg",
    "revision": "234a5530926f386aed922a531e834bef"
  },
  {
    "url": "launch/launch-1536x2048.jpg",
    "revision": "186d19e2bfbf5f0985a5d1dd3859efc3"
  },
  {
    "url": "launch/launch-1668x2224.jpg",
    "revision": "90dbe59671f159edbca480de897818b8"
  },
  {
    "url": "launch/launch-2048x2732.jpg",
    "revision": "b5ad688e3a46cdfd6c699594fb7b8d8e"
  },
  {
    "url": "launch/launch-640x1136.jpg",
    "revision": "fcc76ef376f4a82c6118fe76f5ff4d3a"
  },
  {
    "url": "launch/launch-750x1294.jpg",
    "revision": "dd22f09509badb0827bf821c28931620"
  },
  {
    "url": "precache-manifest.60b6ca83468233e831aa8805520f4712.js",
    "revision": "60b6ca83468233e831aa8805520f4712"
  },
  {
    "url": "service-worker.js",
    "revision": "d78a43db7eeaa82c6a536bda90ee6c65"
  },
  {
    "url": "static/css/2.9616a389.chunk.css",
    "revision": "2ad0e2b87e73cb4c626100a85d077a43"
  },
  {
    "url": "static/css/main.03b406ac.chunk.css",
    "revision": "4feb0817ac2682004782d25960ff0c4f"
  },
  {
    "url": "static/js/2.11a008b0.chunk.js",
    "revision": "0e6aadafb8430a33e4fea9d1946f0f03"
  },
  {
    "url": "static/js/main.04761e2d.chunk.js",
    "revision": "0da58af4a7bfa2624489575b2792427a"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
