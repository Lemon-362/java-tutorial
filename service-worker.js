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
    "revision": "189021db450888d814493823f021e537"
  },
  {
    "url": "assets/css/0.styles.f5761aea.css",
    "revision": "3d4d01b37047a8fa45741af292ec2426"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.62a4f39b.js",
    "revision": "6308a4ef84021cd8354e15368f7950e1"
  },
  {
    "url": "assets/js/11.66647aca.js",
    "revision": "71e87280a12b3e82a69c7d4b7503516b"
  },
  {
    "url": "assets/js/12.4f2beda0.js",
    "revision": "fd41839d0b95d0936b250a07f1f68189"
  },
  {
    "url": "assets/js/13.e2d48271.js",
    "revision": "8692b36f7941af5ad1d2a26ede03abf0"
  },
  {
    "url": "assets/js/14.c9bed7d6.js",
    "revision": "ee27d32b9270a896dba96cb1c4730b26"
  },
  {
    "url": "assets/js/15.be95e54d.js",
    "revision": "fc313d2550e2eaffde7109493de45127"
  },
  {
    "url": "assets/js/16.2d74e192.js",
    "revision": "85378f7b433ff5c422ce1bfbff2dda32"
  },
  {
    "url": "assets/js/17.8e5558bb.js",
    "revision": "6821003a32a1c5a2c50da0ea4ef153b7"
  },
  {
    "url": "assets/js/18.5c75a63f.js",
    "revision": "ca0f59dadeec28512a0b9840fc91259a"
  },
  {
    "url": "assets/js/19.43b79b23.js",
    "revision": "0060b3459a663397b7743c2b902ca15b"
  },
  {
    "url": "assets/js/20.1fadde36.js",
    "revision": "af6912acb05948411a3abc74a6ba08c2"
  },
  {
    "url": "assets/js/21.83d03b8e.js",
    "revision": "b143e69213d80482c1910e3efded1397"
  },
  {
    "url": "assets/js/22.bdda1f0b.js",
    "revision": "f44e8c855ba8714d87eb711b3a05e8ee"
  },
  {
    "url": "assets/js/23.971d5faa.js",
    "revision": "e853842eb08170eb4192ef969bea2adc"
  },
  {
    "url": "assets/js/24.f500f4f6.js",
    "revision": "5e0112b0af6b0a099c34af6df4393697"
  },
  {
    "url": "assets/js/25.f127a04c.js",
    "revision": "7c4936ed6e5942da47bc30ffaad5ef57"
  },
  {
    "url": "assets/js/26.b7ddf614.js",
    "revision": "542f1ca35b9f4093385fc8745a860f55"
  },
  {
    "url": "assets/js/27.107bd179.js",
    "revision": "aacfb5ea0ecd53d034ba3cc9f57a88b4"
  },
  {
    "url": "assets/js/28.ebe3e266.js",
    "revision": "2840f1eaaeefd60dbeb9b84b4bf8e4a9"
  },
  {
    "url": "assets/js/29.8b391e70.js",
    "revision": "c874d7d5e6624768d2dc26b00f8e4d39"
  },
  {
    "url": "assets/js/30.b92ad15e.js",
    "revision": "654ee448da20511fdf5f5b4a41c560fe"
  },
  {
    "url": "assets/js/31.f171c929.js",
    "revision": "c4c5513905243aabf5c71e7a38e10dea"
  },
  {
    "url": "assets/js/32.2a2264df.js",
    "revision": "96156c23b3d8755707a8bb761ec15062"
  },
  {
    "url": "assets/js/33.06f72232.js",
    "revision": "8c44eb1c0cd3fad5644b00a678e194b7"
  },
  {
    "url": "assets/js/34.1d2f317b.js",
    "revision": "3ed374bb09d02bd9b7f6e20e0aae1ccc"
  },
  {
    "url": "assets/js/35.30564451.js",
    "revision": "535f4a27a9cb69493fc72ca5915e48ec"
  },
  {
    "url": "assets/js/36.4ed4420a.js",
    "revision": "aab15838f2ba7da627ee9a3fd3b9cd59"
  },
  {
    "url": "assets/js/4.b8e9d2d7.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/5.c338e437.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/6.5f99cd32.js",
    "revision": "57691ae62554558f32496919dbb5b81e"
  },
  {
    "url": "assets/js/7.9e1f57f7.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.398f6786.js",
    "revision": "a0de3d954f923b7a947eb396bb9bf86a"
  },
  {
    "url": "assets/js/9.5c95409b.js",
    "revision": "2f06a341d22bb96cb01ecb33c6319948"
  },
  {
    "url": "assets/js/app.5a2fbda3.js",
    "revision": "4193dd1b328ef8f5ca5c115b9f46ffdb"
  },
  {
    "url": "assets/js/vendors~flowchart.0faa5ee3.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.9d6c9654.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "b6f0860a654dff84f86ec1c119f62edf"
  },
  {
    "url": "javaee/index.html",
    "revision": "47065bfb1c18469ea110618d2e4eacf9"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "1909fadbf919c45857cb59d7cd802659"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "d1b24a09701d4536d191a480cf36e6f8"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "cc9240b76b346d9deb7257c8fde9abcf"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "beb653249075acc14f09e0284364a316"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "89a81a368bdef0b9988a9d418d2f9c63"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "4c94d9b8089e52a65c9cb849a8b20c16"
  },
  {
    "url": "javatool/build/gradle.html",
    "revision": "022787558f650f1e7d6cf63529c10fae"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "802db5554024040a45715f4b06a56c61"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "fcb05a1d38c05f03b591599da54f891b"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "b773ad9d99de1a797a3dada2237708f3"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "64913418d2711fcb8badb41e6dc140db"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "1f22cac06ca236ea9bba7d589bec1061"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "616baae36cc711a0c505499e9d24ab6f"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "da917aa2caca75de9e0383855b621712"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "2cf671db4a0e5c85e2127a7e2a727338"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "7ac7ab71d47fa99f980b82c05ba8d928"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "044f79511291f97503d454061a09216c"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "4bfceedcc0ff70c82d7d6234425bcc61"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "ea83c944a949a753b21127bbe9a6404d"
  },
  {
    "url": "javatool/index.html",
    "revision": "46adcedb01d653dd97b99bb99c22b99c"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "843c115620cbaf1a56b6756521501432"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "211d1ffc412ecacacfabd1892ef69e67"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "d4a5880ae16daba13a0ab41cbd7b8562"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "58098b1a5bc9ebb7246f55c03e145e0c"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "3153df7a83e0845fee0fbd460a753dc3"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "598faa3adcc6c61754634e70c39a2a5f"
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
