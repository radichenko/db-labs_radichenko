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
    "revision": "13f5509c0e96aa36aaa0688a816e3e65"
  },
  {
    "url": "assets/css/0.styles.5a05792e.css",
    "revision": "f6da2df42d4d36fa91299a60013fb6e0"
  },
  {
    "url": "assets/img/1.1a34c747.png",
    "revision": "1a34c7473db1d93795676a4dd68aa2f8"
  },
  {
    "url": "assets/img/2.d8b2eecf.png",
    "revision": "d8b2eecfb81cd541592a9ccb2a885d20"
  },
  {
    "url": "assets/img/3.2dc1e7ef.png",
    "revision": "2dc1e7ef6049af2d78c20c6f11ca5c1e"
  },
  {
    "url": "assets/img/4.1ffa668e.png",
    "revision": "1ffa668ee2401be4f75d1d67191507b0"
  },
  {
    "url": "assets/img/5.95cf3e14.png",
    "revision": "95cf3e14175db7a5cdbd1d30702ff96c"
  },
  {
    "url": "assets/img/6.f4bc3fab.png",
    "revision": "f4bc3fab9b2e7d85a70efc5a7ad271bd"
  },
  {
    "url": "assets/img/7.80820a68.png",
    "revision": "80820a68ee6d99ca5339d3f6283301fd"
  },
  {
    "url": "assets/img/relationalSchema.3a2a4fde.png",
    "revision": "3a2a4fdeff9e9713d6425c71e25a45b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.745f80a6.js",
    "revision": "8d5be7a26341eafd3ff560de1e605d64"
  },
  {
    "url": "assets/js/10.948183e6.js",
    "revision": "86fd54a9b9468e82e289df749a0ba3ab"
  },
  {
    "url": "assets/js/13.4916ac0a.js",
    "revision": "b32064227c08b75df5aa422bb000a3d8"
  },
  {
    "url": "assets/js/14.45d86d25.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.d06781af.js",
    "revision": "a7d94031e33e503881fdcad5cbae306a"
  },
  {
    "url": "assets/js/16.c015110e.js",
    "revision": "e26076354809ad2f56f784f5281b83e3"
  },
  {
    "url": "assets/js/17.3598a4d0.js",
    "revision": "2c91e186b4a218fb3eff5f30f9989617"
  },
  {
    "url": "assets/js/18.43c7427c.js",
    "revision": "4890ba84d0c32770029643c0ca905f9b"
  },
  {
    "url": "assets/js/19.cf4c0059.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.b6b75046.js",
    "revision": "84c76b1e4564537ecf75ee813da757a1"
  },
  {
    "url": "assets/js/20.73f68287.js",
    "revision": "3aa58c88e3fae58e06749bdcb0162f25"
  },
  {
    "url": "assets/js/21.9840ee13.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.04214989.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.d4a0c6ec.js",
    "revision": "dc31d58d6e3668268597f5850edafa96"
  },
  {
    "url": "assets/js/25.acae8e0e.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.abc960b8.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.d3ab8c50.js",
    "revision": "9df4303a41b263805701fda97eb669eb"
  },
  {
    "url": "assets/js/28.974476ae.js",
    "revision": "d4743c3825785ccb0343eccbe68c1954"
  },
  {
    "url": "assets/js/29.0b7ce706.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.b08aed10.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.29cdf8fc.js",
    "revision": "4d2442c0f5abfbef50bb0f288d27f2de"
  },
  {
    "url": "assets/js/31.129e178e.js",
    "revision": "6ff431f876439132272d7d4422e02b31"
  },
  {
    "url": "assets/js/32.453f2a3b.js",
    "revision": "bec4afa0ad6168dd2d28848a73aad78e"
  },
  {
    "url": "assets/js/33.307a470a.js",
    "revision": "47ccd597e658940e975354a40d6b4fe8"
  },
  {
    "url": "assets/js/34.3c8cb625.js",
    "revision": "6234e61c95d58a3ee6b942d12e0e5dd4"
  },
  {
    "url": "assets/js/35.44a167a7.js",
    "revision": "1fe8d43a8457e576f2c346d7ac551233"
  },
  {
    "url": "assets/js/36.fa8c0d11.js",
    "revision": "985ee92d9404c0a5714d25f9876532f2"
  },
  {
    "url": "assets/js/37.f2a51b09.js",
    "revision": "d29ca1ff95c4e0721ebab48e130c4d08"
  },
  {
    "url": "assets/js/38.5a465111.js",
    "revision": "cbbe25051e4ada78d400488ab6aa9167"
  },
  {
    "url": "assets/js/39.6d109da2.js",
    "revision": "f7e21e16b562dac7200fa6573d59c23f"
  },
  {
    "url": "assets/js/4.a59abcde.js",
    "revision": "10965e7469bf0dd894b984e4e3e8e142"
  },
  {
    "url": "assets/js/41.e4305d7f.js",
    "revision": "088ea98ae2f8644fa8a1b2851bc8b79a"
  },
  {
    "url": "assets/js/5.054c9b45.js",
    "revision": "58045dcf9ac4b03b2a14aaa219930234"
  },
  {
    "url": "assets/js/6.24d3ccc4.js",
    "revision": "714608105943644cf0d200d91d517202"
  },
  {
    "url": "assets/js/7.28eef1c6.js",
    "revision": "4b3f4289f8e7256c5ab3a85cba006730"
  },
  {
    "url": "assets/js/8.7dbf7a17.js",
    "revision": "4d5c2db4c20aa0b69ffc55ffc805ecd1"
  },
  {
    "url": "assets/js/9.c9fb63ec.js",
    "revision": "9471790a37289ad866d6c93125d47e53"
  },
  {
    "url": "assets/js/app.14a538d6.js",
    "revision": "f1c5b3ff5eda37699b20c2a14b657c25"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "conclusion/index.html",
    "revision": "58d15df044a4c498084d4477535117f6"
  },
  {
    "url": "design/index.html",
    "revision": "dc1c4165c0b6b25a89366804dd30b934"
  },
  {
    "url": "index.html",
    "revision": "fb6b990007327bf4ef146ee0881ed07a"
  },
  {
    "url": "intro/index.html",
    "revision": "c2b1e0ba6bea499a158476228edbf2be"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "dfe851521fd70b3c003868b756bac199"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "83383b2b4c0b3163f2ed5f02cd5d00a8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c074b344318804d4f6885327c80d59c0"
  },
  {
    "url": "software/index.html",
    "revision": "762bbafc075a1106938039ba86f78ac6"
  },
  {
    "url": "test/index.html",
    "revision": "bccf6232acfef20b564c6adfa13eebd9"
  },
  {
    "url": "use cases/index.html",
    "revision": "63335b4f3796386cc54a8541efda5c3b"
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
