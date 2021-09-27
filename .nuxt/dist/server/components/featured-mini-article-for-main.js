exports.ids = [6];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=featured-mini-article-for-main.js.map