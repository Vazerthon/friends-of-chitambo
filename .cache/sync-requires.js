// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vallis/Projects/friends-of-chitambo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/vallis/Projects/friends-of-chitambo/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vallis/Projects/friends-of-chitambo/src/pages/index.js"))
}

