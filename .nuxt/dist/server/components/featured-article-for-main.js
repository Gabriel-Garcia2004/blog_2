exports.ids = [5];
exports.modules = {

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
//# sourceMappingURL=featured-article-for-main.js.map