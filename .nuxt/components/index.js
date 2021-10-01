import { wrapFunctional } from './utils'

export { default as ArticleContent } from '../../components/ArticleContent.vue'
export { default as BlogCardVideos } from '../../components/BlogCardVideos.vue'
export { default as BlogFeaturedMiniArticle } from '../../components/BlogFeaturedMiniArticle.vue'
export { default as BlogHeader } from '../../components/BlogHeader.vue'
export { default as BlogNavbar } from '../../components/BlogNavbar.vue'
export { default as BlogSidebar } from '../../components/BlogSidebar.vue'
export { default as CategoryFeatured } from '../../components/CategoryFeatured.vue'
export { default as FeaturedArticleForMain } from '../../components/FeaturedArticleForMain.vue'
export { default as FeaturedMiniArticleForMain } from '../../components/FeaturedMiniArticleForMain.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as LandingAbout } from '../../components/LandingAbout.vue'
export { default as LandingAppointment } from '../../components/LandingAppointment.vue'
export { default as LandingBlog } from '../../components/LandingBlog.vue'
export { default as LandingHeader } from '../../components/LandingHeader.vue'
export { default as SearchResult } from '../../components/SearchResult.vue'

export const LazyArticleContent = import('../../components/ArticleContent.vue' /* webpackChunkName: "components/article-content" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogCardVideos = import('../../components/BlogCardVideos.vue' /* webpackChunkName: "components/blog-card-videos" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogFeaturedMiniArticle = import('../../components/BlogFeaturedMiniArticle.vue' /* webpackChunkName: "components/blog-featured-mini-article" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogHeader = import('../../components/BlogHeader.vue' /* webpackChunkName: "components/blog-header" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogNavbar = import('../../components/BlogNavbar.vue' /* webpackChunkName: "components/blog-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogSidebar = import('../../components/BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyCategoryFeatured = import('../../components/CategoryFeatured.vue' /* webpackChunkName: "components/category-featured" */).then(c => wrapFunctional(c.default || c))
export const LazyFeaturedArticleForMain = import('../../components/FeaturedArticleForMain.vue' /* webpackChunkName: "components/featured-article-for-main" */).then(c => wrapFunctional(c.default || c))
export const LazyFeaturedMiniArticleForMain = import('../../components/FeaturedMiniArticleForMain.vue' /* webpackChunkName: "components/featured-mini-article-for-main" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingAbout = import('../../components/LandingAbout.vue' /* webpackChunkName: "components/landing-about" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingAppointment = import('../../components/LandingAppointment.vue' /* webpackChunkName: "components/landing-appointment" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingBlog = import('../../components/LandingBlog.vue' /* webpackChunkName: "components/landing-blog" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingHeader = import('../../components/LandingHeader.vue' /* webpackChunkName: "components/landing-header" */).then(c => wrapFunctional(c.default || c))
export const LazySearchResult = import('../../components/SearchResult.vue' /* webpackChunkName: "components/search-result" */).then(c => wrapFunctional(c.default || c))
