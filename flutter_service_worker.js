'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8b0272c9e8749a24694099bbfeb14e65",
"assets/assets/calendars/graz_islamischesKulturzentrumGraz.json": "7069dd22ad756ea826d24a41ea26cfe1",
"assets/assets/fonts/FjallaOne.ttf": "1a17c9c21cc3d9c7bb1ccd06d7830b75",
"assets/assets/fonts/Forque.ttf": "d5526cbef97d91401d9418097a466ef2",
"assets/assets/images/asr.svg": "7a747995dc46ad9e080a0697c6ee9617",
"assets/assets/images/back.svg": "4f34b4f86cc5f3ec530055e86ba2262d",
"assets/assets/images/bg.jpg": "52a834b359cf654f1400b82db2efb0a4",
"assets/assets/images/bosnia.svg": "6a34b7fc3003b1fd1ed8057a62decc6a",
"assets/assets/images/calendar.svg": "b7f8f25f0ec710c7e8221940d6f7ed52",
"assets/assets/images/check.svg": "056c2ca6c29ac0475b5622d643e54ed7",
"assets/assets/images/color_scheme.svg": "2d723387d617a708e7248a124e9fa3ee",
"assets/assets/images/color_schemes.svg": "481085b32ed26be16c326428f2ac3365",
"assets/assets/images/dhuhr.svg": "db0cde2c0c7f9dca316ea6bff3300fa8",
"assets/assets/images/email.svg": "533ef4409c9d13d26042aa12e9db8d1a",
"assets/assets/images/fajr.svg": "2eb7f22b378d00b9ce58398ea28302e8",
"assets/assets/images/germany.svg": "fcc503a6bff405675c9d04a5737c0726",
"assets/assets/images/info.svg": "ad941fd727f0e901de51872008dbfb85",
"assets/assets/images/internet.svg": "5f6070d486f56ccf43436b1179b8cc5d",
"assets/assets/images/ishaa.svg": "24e3ed30a17ee637d68e20abb85670d8",
"assets/assets/images/languages.svg": "07edf7de71e6e63cacdfa788a9f52623",
"assets/assets/images/ligature_allah.svg": "74ab97da9c70a50b52e391bd6b8897a3",
"assets/assets/images/logo.svg": "4917c568be1815d9bc79fc522ec9b351",
"assets/assets/images/logo_dark.svg": "f51fd2c13bf16878a71d09e371fa1b8a",
"assets/assets/images/maghrib.svg": "31f886e860a31b6a3ce804fef86e8066",
"assets/assets/images/menu.svg": "06753cf55d4cf6f339c4866d899e1633",
"assets/assets/images/menu2.svg": "41550861abd4f6c98349fe68225cf14c",
"assets/assets/images/more.svg": "1fa25c1cbe405e62cfdce0b45426a3af",
"assets/assets/images/mosque.svg": "918ce5b750fa47351a1559e2780c2873",
"assets/assets/images/mosque_dome.svg": "a6bd62764bd320279cce6d20b665458e",
"assets/assets/images/notifications.svg": "7a347b9c23dc16ff18f0fe2bacf0823c",
"assets/assets/images/prayer_mat.svg": "701d15c582e2ecfc087d3b472a96325a",
"assets/assets/images/rate.svg": "c60b8f3e4a272c969cf0937bf1cd7c0a",
"assets/assets/images/saudi_arabia.svg": "f1ee792851209e34619aec78fc681183",
"assets/assets/images/settings.svg": "f3f7ce79e1efd720c0633711a3fb47d2",
"assets/assets/images/sunrise.svg": "09ef6b0f1d94e623100341961fcc51b6",
"assets/assets/images/theme.svg": "93c8ebc07d5538b1f07346476f53b06f",
"assets/assets/images/united_kingdom.svg": "6b957ab44bdca467d337c34389986277",
"assets/assets/images/x.svg": "62cbab07fa7b6e593dc8edb87103ba69",
"assets/FontManifest.json": "0061a1a9b2432c41cd73298d90be1a97",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "064c3e941c3d5242b66ebf91f7ade60a",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0eac89b421f8cda3cba0328363fedff6",
"/": "0eac89b421f8cda3cba0328363fedff6",
"main.dart.js": "064028a4c11524398da027f3a5e39ccd",
"manifest.json": "b05c9271e27267fc6533ebdf1a672226",
"version.json": "a2217aa99f6875728830824c1ab0e8cd"
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
