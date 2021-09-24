import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ArticleContent: () => import('../..\\components\\ArticleContent.vue' /* webpackChunkName: "components/article-content" */).then(c => wrapFunctional(c.default || c)),
  BlogCardVideos: () => import('../..\\components\\BlogCardVideos.vue' /* webpackChunkName: "components/blog-card-videos" */).then(c => wrapFunctional(c.default || c)),
  BlogFeaturedMiniArticle: () => import('../..\\components\\BlogFeaturedMiniArticle.vue' /* webpackChunkName: "components/blog-featured-mini-article" */).then(c => wrapFunctional(c.default || c)),
  BlogHeader: () => import('../..\\components\\BlogHeader.vue' /* webpackChunkName: "components/blog-header" */).then(c => wrapFunctional(c.default || c)),
  BlogNavbar: () => import('../..\\components\\BlogNavbar.vue' /* webpackChunkName: "components/blog-navbar" */).then(c => wrapFunctional(c.default || c)),
  BlogSidebar: () => import('../..\\components\\BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => wrapFunctional(c.default || c)),
  CategoryFeatured: () => import('../..\\components\\CategoryFeatured.vue' /* webpackChunkName: "components/category-featured" */).then(c => wrapFunctional(c.default || c)),
  FeaturedArticleForMain: () => import('../..\\components\\FeaturedArticleForMain.vue' /* webpackChunkName: "components/featured-article-for-main" */).then(c => wrapFunctional(c.default || c)),
  FeaturedMiniArticleForMain: () => import('../..\\components\\FeaturedMiniArticleForMain.vue' /* webpackChunkName: "components/featured-mini-article-for-main" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  LandingAbout: () => import('../..\\components\\LandingAbout.vue' /* webpackChunkName: "components/landing-about" */).then(c => wrapFunctional(c.default || c)),
  LandingAppointment: () => import('../..\\components\\LandingAppointment.vue' /* webpackChunkName: "components/landing-appointment" */).then(c => wrapFunctional(c.default || c)),
  LandingBlog: () => import('../..\\components\\LandingBlog.vue' /* webpackChunkName: "components/landing-blog" */).then(c => wrapFunctional(c.default || c)),
  LandingHeader: () => import('../..\\components\\LandingHeader.vue' /* webpackChunkName: "components/landing-header" */).then(c => wrapFunctional(c.default || c)),
  LandingNavBar: () => import('../..\\components\\LandingNavBar.vue' /* webpackChunkName: "components/landing-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  SearchResult: () => import('../..\\components\\SearchResult.vue' /* webpackChunkName: "components/search-result" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
