exports.ids = [15,2,5,6];
exports.modules = {

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e2f2512", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedArticleForMain.vue?vue&type=template&id=66d42d5b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"Blog article"},[_vm._ssrNode("<article class=\"blog__article\" data-v-66d42d5b>","</article>",[_vm._ssrNode("<input type=\"hidden\" name=\"articleTitle\" id=\"articleTitle\""+(_vm._ssrAttr("value",_vm.slug))+" data-v-66d42d5b> "),(_vm.language == 'br' || _vm.language == undefined)?_vm._ssrNode("<div data-v-66d42d5b>","</div>",[_vm._ssrNode("<h2 class=\"blog__title\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.$t('Main'))+"Principais / "+_vm._s(_vm.title))+"</h2> <img"+(_vm._ssrAttr("src",_vm.image))+(_vm._ssrAttr("alt",_vm.title))+" class=\"blog__img\" data-v-66d42d5b> <p class=\"blog__text\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.short))+"</p> "),_c('NuxtLink',{staticClass:"blog__button",attrs:{"to":_vm.localePath({name: 'blog-article-slug', params: {slug: _vm.slug}})}},[_vm._v("\n        "+_vm._s(_vm.$t('ReadMore'))+"\n      ")])],2):_vm._e(),_vm._ssrNode(" "),(_vm.language == 'en')?_vm._ssrNode("<div data-v-66d42d5b>","</div>",[_vm._ssrNode("<h2 class=\"blog__title\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.$t('Main'))+" "+_vm._s(_vm.titleEn))+"</h2> <img"+(_vm._ssrAttr("src",_vm.image))+(_vm._ssrAttr("alt",_vm.titleEn))+" class=\"blog__img\" data-v-66d42d5b> <p class=\"blog__text\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.shortEn))+"</p> "),_c('NuxtLink',{staticClass:"blog__button",attrs:{"to":_vm.localePath({name: 'blog-article-slug', params: {slug: _vm.slug}})}},[_vm._v("\n              "+_vm._s(_vm.$t('ReadMore'))+"\n\n    ")])],2):_vm._ssrNode("<div data-v-66d42d5b>","</div>",[_vm._ssrNode("<h2 class=\"blog__title\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.$t('Main'))+" "+_vm._s(_vm.titleEs))+"</h2> <img"+(_vm._ssrAttr("src",_vm.image))+(_vm._ssrAttr("alt",_vm.titleEs))+" class=\"blog__img\" data-v-66d42d5b> <p class=\"blog__text\" data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.shortEs))+"</p> "),_c('NuxtLink',{staticClass:"blog__button",attrs:{"to":_vm.localePath({name: 'blog-article-slug', params: {slug: _vm.slug}})}},[_vm._v("\n            "+_vm._s(_vm.$t('ReadMore'))+"\n\n  ")])],2),_vm._ssrNode(" <h3 class=\"miniArticle__title mb-2\" data-v-66d42d5b><span data-v-66d42d5b>"+_vm._ssrEscape(_vm._s(_vm.date)+"\n")+"</span>  Por Miguel Ceccarelli</h3>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeaturedArticleForMain.vue?vue&type=template&id=66d42d5b&scoped=true&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(76);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedArticleForMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FeaturedArticleForMainvue_type_script_lang_js_ = ({
  data() {
    return {
      subcategoryId: undefined,
      subcategoryName: undefined,
      category: undefined,
      title: undefined,
      short: undefined,
      titleEn: undefined,
      shortEn: undefined,
      titleEs: undefined,
      shortEs: undefined,
      image: undefined,
      slug: undefined,
      articleId: undefined,
      date: undefined,
      language: this.$nuxt.$i18n.locale,
      data: undefined
    };
  },

  created() {
    this.executeData();
  },

  methods: {
    async executeData() {
      await this.$axios.post('/article/new').then(data => {
        if (!data['data']['data']['status']) {
          this.error = data['data']['data'][0]['message'];
        }

        this.title = data['data']['data'][0]['title'];
        this.titleEn = data['data']['data'][0]['titleEn'];
        this.titleEs = data['data']['data'][0]['titleEs'];
        this.short = data['data']['data'][0]['short'];
        this.shortEn = data['data']['data'][0]['shortEn'];
        this.shortEs = data['data']['data'][0]['shortEs'];
        this.image = data['data']['data'][0]['image'];
        this.date = external_moment_default()(data['data']['data'][0]['createdAt']).format('DD/MM/YYYY');
        this.slug = data['data']['data'][0]['slug'];
        this.articleId = data['data']['data'][0]['id'];
      });
    }

  }
});
// CONCATENATED MODULE: ./components/FeaturedArticleForMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedArticleForMainvue_type_script_lang_js_ = (FeaturedArticleForMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeaturedArticleForMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeaturedArticleForMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66d42d5b",
  "512449d4"
  
)

/* harmony default export */ var FeaturedArticleForMain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfaf8716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfaf8716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfaf8716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfaf8716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfaf8716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".l-Blog[data-v-dfaf8716]{display:grid;grid-template-columns:70% 30%;grid-template-areas:\"nav nav\" \"header header\" \"article article\" \"miniArticle miniArticle\" \"videos videos\" \"footer footer\";background:#f8f8f8;overflow-x:hidden}.info-bar[data-v-dfaf8716]{grid-area:nav}.header[data-v-dfaf8716]{grid-area:header}.article[data-v-dfaf8716]{grid-area:article}.sidebar[data-v-dfaf8716]{grid-area:sidebar}.miniArticle[data-v-dfaf8716]{grid-area:miniArticle}.footer[data-v-dfaf8716]{grid-area:footer}.videos[data-v-dfaf8716]{grid-area:videos}@media (min-width:600px){.l-Blog[data-v-dfaf8716]{display:grid;grid-template-columns:80% 20%;grid-template-areas:\"nav nav\" \"header header\" \"article article\" \"miniArticle miniAraticle\" \"videos videos\" \"footer footer\";background:#f8f8f8}}@media (min-width:1100px){.l-Blog[data-v-dfaf8716]{display:grid;grid-template-columns:70% 30%;grid-template-areas:\"nav nav\" \"header header\" \"article sidebar\" \"miniArticle sidebar\" \"videos videos\" \"footer footer\";background:#f8f8f8}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=dfaf8716&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"l-Blog"},[_c('BlogNavbar'),_vm._ssrNode(" "),_c('BlogHeader'),_vm._ssrNode(" "),_c('FeaturedArticleForMain'),_vm._ssrNode(" "),_c('FeaturedMiniArticleForMain'),_vm._ssrNode(" "),_c('BlogSidebar'),_vm._ssrNode(" "),_c('BlogCardVideos'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=dfaf8716&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  head: {
    title: 'Blog | Miguel Ceccarelli',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: "Blog - Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta."
    }, {
      hid: "robots",
      name: "robots",
      content: "index, follow"
    }]
  }
});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dfaf8716",
  "50522d42"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogNavbar: __webpack_require__(33).default,BlogHeader: __webpack_require__(34).default,FeaturedArticleForMain: __webpack_require__(129).default,FeaturedMiniArticleForMain: __webpack_require__(95).default,BlogSidebar: __webpack_require__(35).default,BlogCardVideos: __webpack_require__(81).default,Footer: __webpack_require__(22).default})


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6e169528", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCardVideos_vue_vue_type_style_index_0_id_0e1e0abc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCardVideos_vue_vue_type_style_index_0_id_0e1e0abc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCardVideos_vue_vue_type_style_index_0_id_0e1e0abc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCardVideos_vue_vue_type_style_index_0_id_0e1e0abc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCardVideos_vue_vue_type_style_index_0_id_0e1e0abc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0e1e0abc]{font-family:Telegraf-Regular,sans-serif}.videos[data-v-0e1e0abc]{display:grid;padding:.625rem 0}.videos-container[data-v-0e1e0abc]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:20px;gap:20px}.card-video[data-v-0e1e0abc]{box-shadow:0 2px 4px 0 rgba(0,0,0,.14118);box-shadow:0 3px 4px 0 rgba(0,0,0,.12157);box-shadow:0 1px 5px 0 rgba(0,0,0,.2);padding:10px 0}.card-video__description[data-v-0e1e0abc]{max-width:290px;padding:.3125rem}.card-video__title[data-v-0e1e0abc]{font-size:1.25rem;font-style:normal;font-weight:500;line-height:1.875rem;letter-spacing:.0094rem;color:rgba(0,0,0,.87059);padding:0 .3125rem;max-width:290px}.card-video__subtitle[data-v-0e1e0abc]{font-size:.875rem;font-style:normal;font-weight:400;line-height:1.3125rem;letter-spacing:.0156rem;color:rgba(0,0,0,.6);padding:.3125rem;max-width:290px}@media (min-width:600px){.videos-container[data-v-0e1e0abc]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCardVideos.vue?vue&type=template&id=0e1e0abc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"videos"},[_vm._ssrNode("<div class=\"videos-container\" data-v-0e1e0abc>"+(_vm._ssrList((_vm.data),function(video){return ("<div class=\"card-video\" data-v-0e1e0abc><h2 class=\"card-video__title\" data-v-0e1e0abc>Dr. Miguel Ceccarelli</h2> <h3 class=\"card-video__subtitle\" data-v-0e1e0abc>"+_vm._ssrEscape(_vm._s(video.title))+"</h3> <iframe max-width=\"300\" height=\"200\""+(_vm._ssrAttr("src",video.url))+(_vm._ssrAttr("title",video.title))+" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\" alt=\"Vídeo do Dermatologista Miguel Ceccarelli\" data-v-0e1e0abc></iframe> <p class=\"card-video__description\" data-v-0e1e0abc>"+_vm._ssrEscape(_vm._s(video.short))+"</p></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogCardVideos.vue?vue&type=template&id=0e1e0abc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCardVideos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogCardVideosvue_type_script_lang_js_ = ({
  data() {
    return {
      data: undefined,
      error: undefined
    };
  },

  created: async function () {
    await this.$axios.post('/videos/all').then(data => {
      if (!data['data']['data']['status']) {
        this.error = data['data']['data']['message'];
      }

      this.data = data['data']['data'];
    });
  }
});
// CONCATENATED MODULE: ./components/BlogCardVideos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogCardVideosvue_type_script_lang_js_ = (BlogCardVideosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogCardVideos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogCardVideosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e1e0abc",
  "50c770f8"
  
)

/* harmony default export */ var BlogCardVideos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("13da9863", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("703c0b80", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedMiniArticleForMain_vue_vue_type_style_index_0_id_17a0f68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedMiniArticleForMain_vue_vue_type_style_index_0_id_17a0f68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedMiniArticleForMain_vue_vue_type_style_index_0_id_17a0f68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedMiniArticleForMain_vue_vue_type_style_index_0_id_17a0f68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedMiniArticleForMain_vue_vue_type_style_index_0_id_17a0f68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif}.miniArticle[data-v-17a0f68e]{padding:.875rem}.miniArticle__title[data-v-17a0f68e]{font-size:1.125rem;font-style:italic;font-weight:700;line-height:.9375rem;letter-spacing:.025rem;color:#a28a7f;padding-bottom:1.875rem;border-bottom:.125rem double #42494f;position:relative}.miniArticle__title[data-v-17a0f68e]:after{content:\"\";position:absolute;bottom:-.9375rem;left:0;width:100%;height:.125rem;background-color:#42494f}.miniArticle__title>span[data-v-17a0f68e]{color:rgba(0,0,0,.4)}.miniArticle__article-box[data-v-17a0f68e]{background-color:#fafafa;display:grid;grid-gap:0 .3125rem;gap:0 .3125rem;grid-template-areas:\"img title button\" \"img title button\" \"img title button\";min-width:300px;grid-template-columns:1fr 3fr 1fr;border-radius:.5rem 0 0 .5rem;box-shadow:0 2px 4px 0 rgba(0,0,0,.14118);box-shadow:0 3px 4px 0 rgba(0,0,0,.12157);box-shadow:0 1px 5px 0 rgba(0,0,0,.2)}.miniArticle__subtitle[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif;font-style:normal;font-weight:700;font-size:1.125rem;line-height:.9375rem;margin:1.5rem 0!important;letter-spacing:.025rem;color:#a28a7f;grid-area:info}.miniArticle__img[data-v-17a0f68e]{grid-area:img;border-radius:.5rem 0 0 .5rem;max-width:100%;display:grid;margin:0;-o-object-fit:contain;object-fit:contain;background-color:#404042}.object-fit[data-v-17a0f68e]{-o-object-fit:contain!important;object-fit:contain!important}.miniArticle__articleInfos[data-v-17a0f68e]{grid-area:title;padding:.25rem}.miniArticle__author[data-v-17a0f68e]{font-size:1.2rem;line-height:2rem;letter-spacing:0;color:rgba(0,0,0,.87059)}.miniArticle__author[data-v-17a0f68e],.miniArticle__description[data-v-17a0f68e]{font-style:normal;font-weight:400;margin:0;font-family:Telegraf-Regular}.miniArticle__description[data-v-17a0f68e]{font-size:.875rem;line-height:1.3125rem;letter-spacing:.0156rem;color:rgba(0,0,0,.6)}.miniArticle__button[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif;grid-area:button;font-size:.875rem;font-style:normal;font-weight:700;line-height:1.25rem;letter-spacing:0;text-align:center;color:#42494f;border:1px solid #42494f;border-radius:.2rem;display:grid;margin:.625rem;padding:.3125rem;text-decoration:none;transition:.4s ease;max-height:50px;align-items:center}.miniArticle__button--gray[data-v-17a0f68e]:hover,.miniArticle__button[data-v-17a0f68e]:hover{border:1px solid rgba(0,0,0,.9)}.miniArticle__button--gray[data-v-17a0f68e]{display:grid;background:#e5e5e5;border-radius:.5rem;font-size:.875rem;font-style:normal;font-weight:700;line-height:1.25rem;letter-spacing:0;text-align:center;padding:10px;max-width:200px;margin:15px auto;color:rgba(0,0,0,.87059);text-decoration:none;border:1px solid #e5e5e5;transition:.4s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedMiniArticleForMain.vue?vue&type=template&id=17a0f68e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"miniArticle"},_vm._l((_vm.data),function(article){return _vm._ssrNode("<div class=\"miniArticle__article\" data-v-17a0f68e>","</div>",[_vm._ssrNode("<h4 class=\"miniArticle__subtitle\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(_vm.$t('HighlightOfTheDay')))+"</h4> "),_vm._ssrNode("<div class=\"miniArticle__article-box\" data-v-17a0f68e>","</div>",[_vm._ssrNode("<figure class=\"miniArticle__img\" data-v-17a0f68e><img"+(_vm._ssrAttr("src",article.image))+(_vm._ssrAttr("alt",article.short))+" class=\"miniArticle__img object-fit\" data-v-17a0f68e></figure> "+((_vm.language == 'br' || _vm.language == undefined)?("<div class=\"miniArticle__articleInfos\" data-v-17a0f68e><h5 class=\"miniArticle__author\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.title))+"</h5> <p class=\"miniArticle__description\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.short)+" ")+"</p></div>"):(_vm.language == 'en')?("<div class=\"miniArticle__articleInfos\" data-v-17a0f68e><h5 class=\"miniArticle__author\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.titleEn))+"</h5> <p class=\"miniArticle__description\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.shortEn)+" ")+"</p></div>"):("<div class=\"miniArticle__articleInfos\" data-v-17a0f68e><h5 class=\"miniArticle__author\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.titleEs))+"</h5> <p class=\"miniArticle__description\" data-v-17a0f68e>"+_vm._ssrEscape(_vm._s(article.shortEs)+" ")+"</p></div>"))+" "),_c('NuxtLink',{staticClass:"miniArticle__button",attrs:{"to":_vm.localePath({ name: 'blog-article-slug', params: { slug: article.slug } })}},[_vm._v(_vm._s(_vm.$t('ReadMore')))])],2)],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeaturedMiniArticleForMain.vue?vue&type=template&id=17a0f68e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedMiniArticleForMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeaturedMiniArticleForMainvue_type_script_lang_js_ = ({
  data() {
    return {
      article: this.$route.params.slug || undefined,
      language: this.$nuxt.$i18n.locale,
      data: undefined
    };
  },

  head() {
    return {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
      }],
      title: this.subcategory,
      meta: [{
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: "Blog - Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta."
      }, {
        hid: "robots",
        name: "robots",
        content: "index, follow"
      }]
    };
  },

  created() {
    this.executeData();
  },

  methods: {
    upperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    async executeData() {
      await this.$axios.post('article/without').then(data => {
        if (!data['data']['status']) {
          this.error = data['data']['data'];
        }

        if (this.article != undefined) {
          this.data = data['data']['data'].filter(item => {
            return item.slug.toLowerCase() !== String(this.article).toLowerCase();
          });
        } else {
          this.data = data['data']['data'].filter(item => {
            return item.slug.toLowerCase() != String(this.$refs['articleTitle']).toLowerCase();
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/FeaturedMiniArticleForMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedMiniArticleForMainvue_type_script_lang_js_ = (FeaturedMiniArticleForMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeaturedMiniArticleForMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeaturedMiniArticleForMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17a0f68e",
  "19c92aea"
  
)

/* harmony default export */ var FeaturedMiniArticleForMain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticleForMain_vue_vue_type_style_index_0_id_66d42d5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticleForMain_vue_vue_type_style_index_0_id_66d42d5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticleForMain_vue_vue_type_style_index_0_id_66d42d5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticleForMain_vue_vue_type_style_index_0_id_66d42d5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticleForMain_vue_vue_type_style_index_0_id_66d42d5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-66d42d5b]{font-family:Telegraf-Regular,sans-serif}.blog__article[data-v-66d42d5b]{padding:2.125rem 1.25rem 0}.blog__title[data-v-66d42d5b]{font-size:1.125rem;font-style:normal;font-weight:700;line-height:.9375rem;letter-spacing:.025rem;color:#a28a7f}.blog__img[data-v-66d42d5b]{max-width:clamp(290px,450px,60%);display:grid;margin:auto}.blog__text[data-v-66d42d5b]{color:#575757;font-family:Telegraf-Regular;font-size:.875rem;font-style:normal;font-weight:400;line-height:1.5625rem;letter-spacing:0;padding:1.25rem 0;text-align:center}.blog__button[data-v-66d42d5b]{text-decoration:none;background:#7a695f;width:100px;padding:.9375rem;color:#fff;text-align:center;border-radius:.5rem;display:grid;margin:auto}.miniArticle__title[data-v-66d42d5b]{font-size:1.125rem;font-style:italic;font-weight:700;line-height:.9375rem;letter-spacing:.025rem;color:#a28a7f;padding-bottom:1.875rem;border-bottom:.125rem double #42494f;position:relative}.miniArticle__title[data-v-66d42d5b]:after{content:\"\";position:absolute;bottom:-.9375rem;left:0;width:100%;height:.125rem;background-color:#42494f}.miniArticle__title>span[data-v-66d42d5b]{color:rgba(0,0,0,.4)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map