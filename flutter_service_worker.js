'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d458b54cc73dd275b9235c85adfdfa99",
".git/config": "d20c5aef3b88023cc75a1de8c562cf02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f93fed18506ad9373dca3fa77cfc8018",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cfca4ba5f157d87985c405aaadf66f17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "359f0e7ea646cf4d3e9a370c572c50c3",
".git/logs/refs/heads/main": "359f0e7ea646cf4d3e9a370c572c50c3",
".git/logs/refs/remotes/origin/HEAD": "7ae4bf19a798a6d8e197671c2c92c24a",
".git/logs/refs/remotes/origin/main": "0b90ef528704766d162e6f2d7aa2ae8d",
".git/objects/00/8470496f93658e3cf5f7a8d659f42bbe94d59d": "2c0862854f81d971fd7e525f8e9b9f90",
".git/objects/0d/ec2c49a0046c5d8b1c29734816fba01423a379": "e97aba2eced0b177e2716df40f8636e5",
".git/objects/10/2c0927cbe4ac54c4aa396d6dc91ac252278b31": "3f14c4108191a50a1c78b9311767f3d9",
".git/objects/1b/d4ded9484e672bece032717bc4de7858579637": "6249e3deb4c13fb37d0540c38c1a840a",
".git/objects/26/bb50d8b9bef6e728516c292fca312ec47663f4": "995d1a097c26c10ee5c0e8870d5c7349",
".git/objects/2c/bbdb512da6ba3e5772171912c6fcc88609a709": "bf6d6556c60c3a8a06cdcdc5ae222c1a",
".git/objects/32/0c55dcb9428668310ada03e2aec8c9894cddb7": "7ef9d44f5d2f0bce4a8fb4e1204fbaa5",
".git/objects/34/a91587cb8e66c4b4540278db374089b789f1e7": "052088217625d59edf770c276a4d6432",
".git/objects/3d/a4de06110b215b9c6a900e335bf6c063593392": "5840c08ecef54749b807486f17ad52e1",
".git/objects/72/f247a09e4ffe8bd2d0f9852cf66c94494804b6": "4909046fd4d6977751c41ed429833907",
".git/objects/74/2da77a88218060139ee9ff490b9a8e4c14ba2f": "8b8f5aa1a1a89942f59a7b770885ab0d",
".git/objects/7c/4aab1f5603e94f4a04564381440bedcdbb0a1a": "43c403843d88028d41ec699d2a9ae520",
".git/objects/7f/b85365b0b2ef3a2fa010640aad8e6d289bb77c": "0ab6a08cfa3fc28a0ad6d96450d9e480",
".git/objects/8c/5f5c4345b03cdb19d857d6dcadbbd1c85b4119": "b1c218a445a22f621983b5532ac2ede1",
".git/objects/99/a464c4b32376947fd711917587c6f202c43f6d": "d10b0aed8e8b076e9d7e8709d0df96e8",
".git/objects/a7/dcc15d334afeb0caec6859351646a803094f0c": "a03b95d91020f8249c68f80c3023b1ae",
".git/objects/ac/bfc2fe702883e60ad109981036db3f1d71acf4": "a525eea18753bbd3cb9ea75bf57918f2",
".git/objects/b2/2306a611eda5dbfe7a6b61dbc4309c85c0130e": "ec9a32c5db47fed631b2f817b8d27e61",
".git/objects/cd/c204eee20448787704404b4d0226bbb84dea1b": "148326fd47bfbe525980fb31bb3171e2",
".git/objects/da/8634b401de0d7f92c5dd3f8086089582d5c86c": "a9f89ba559abcfbef28bb3c90e59e5f8",
".git/objects/e2/4dc5c7ece0bc30fae11507c6159f9e8bb3232c": "e95f13e30281ab85fa86169fccf2af3a",
".git/objects/fd/c82c830f3d429b8bb2c26a7acad1e3a697922e": "4d64698aba3db3be0e82ee67828e4e41",
".git/objects/pack/pack-be98ac184628dd1d0b69379aa8212920508649c0.idx": "33431e284f35e0e726a4ef3de4e524df",
".git/objects/pack/pack-be98ac184628dd1d0b69379aa8212920508649c0.pack": "be8bbf8d5f1cc42fdd6dc050ac9f1d87",
".git/packed-refs": "af4d07320d73771dfe395c467d660d5a",
".git/refs/heads/main": "ff2152301fbb8dbc7cad2841251842f6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ff2152301fbb8dbc7cad2841251842f6",
"assets/AssetManifest.json": "d1d92e3879344bff420b7ffc3df29629",
"assets/assets/delivery_man.png": "2ea967f6fd5e56c78d2d827a8d8b8045",
"assets/assets/hamburger.png": "9ff92f1f0d8ac16f114a96d2e3dc8183",
"assets/assets/largePizza.png": "21d0c20b4bd596699fdd81c79cde911e",
"assets/assets/Pizza.png": "2bd4d7edf7e87b04e71ededb97e9571d",
"assets/assets/Pizza2.png": "2b37f42f5192ed43edd1a487a00609e0",
"assets/assets/Pizza3.png": "305006ecf3d650d763b8d3ac390ffc82",
"assets/assets/pizza4.jpg": "cead941f89077c06ec37a293fae81d1c",
"assets/assets/Scorpion.png": "4417e0d75079cb7b761ca6093a8ebe22",
"assets/assets/sushi_pic.jpg": "7dd1680b9094d99d90a0dfb1320bd402",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b289d9b2a657a6fc9bd40c185af24a1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index%20copy.html": "7273adb3bc7cc59500575c6cfb44b9b0",
"index.html": "9746871968352df779b0e967b007a48d",
"/": "9746871968352df779b0e967b007a48d",
"index_old.html": "7273adb3bc7cc59500575c6cfb44b9b0",
"main.dart.js": "8e8f1e811793ef3ef2a89f1bef386edc",
"manifest.json": "f1802148efc2cf1288fc1ac1a19f08ce",
"version.json": "15de732365aca93168912a516609375d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
