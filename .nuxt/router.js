import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d928ea1a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2f3f48d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _cb9726ea = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _d997b6fa = () => interopDefault(import('..\\pages\\blog\\article\\_slug.vue' /* webpackChunkName: "pages/blog/article/_slug" */))
const _1b84e7c6 = () => interopDefault(import('..\\pages\\blog\\category\\_id.vue' /* webpackChunkName: "pages/blog/category/_id" */))
const _5b7018a0 = () => interopDefault(import('..\\pages\\blog\\search\\_query.vue' /* webpackChunkName: "pages/blog/search/_query" */))
const _eb9743aa = () => interopDefault(import('..\\pages\\blog\\subcategory\\_id.vue' /* webpackChunkName: "pages/blog/subcategory/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _d928ea1a,
    name: "blog___br"
  }, {
    path: "/en",
    component: _2f3f48d6,
    name: "index___en"
  }, {
    path: "/es",
    component: _2f3f48d6,
    name: "index___es"
  }, {
    path: "/privacy",
    component: _cb9726ea,
    name: "privacy___br"
  }, {
    path: "/en/blog",
    component: _d928ea1a,
    name: "blog___en"
  }, {
    path: "/en/privacy",
    component: _cb9726ea,
    name: "privacy___en"
  }, {
    path: "/es/blog",
    component: _d928ea1a,
    name: "blog___es"
  }, {
    path: "/es/privacy",
    component: _cb9726ea,
    name: "privacy___es"
  }, {
    path: "/en/blog/article/:slug?",
    component: _d997b6fa,
    name: "blog-article-slug___en"
  }, {
    path: "/en/blog/category/:id?",
    component: _1b84e7c6,
    name: "blog-category-id___en"
  }, {
    path: "/en/blog/search/:query?",
    component: _5b7018a0,
    name: "blog-search-query___en"
  }, {
    path: "/en/blog/subcategory/:id?",
    component: _eb9743aa,
    name: "blog-subcategory-id___en"
  }, {
    path: "/es/blog/article/:slug?",
    component: _d997b6fa,
    name: "blog-article-slug___es"
  }, {
    path: "/es/blog/category/:id?",
    component: _1b84e7c6,
    name: "blog-category-id___es"
  }, {
    path: "/es/blog/search/:query?",
    component: _5b7018a0,
    name: "blog-search-query___es"
  }, {
    path: "/es/blog/subcategory/:id?",
    component: _eb9743aa,
    name: "blog-subcategory-id___es"
  }, {
    path: "/blog/article/:slug?",
    component: _d997b6fa,
    name: "blog-article-slug___br"
  }, {
    path: "/blog/category/:id?",
    component: _1b84e7c6,
    name: "blog-category-id___br"
  }, {
    path: "/blog/search/:query?",
    component: _5b7018a0,
    name: "blog-search-query___br"
  }, {
    path: "/blog/subcategory/:id?",
    component: _eb9743aa,
    name: "blog-subcategory-id___br"
  }, {
    path: "/",
    component: _2f3f48d6,
    name: "index___br"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
