exports.ids = [10];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-64f3f938]{font-family:Telegraf-Regular,sans-serif}.header[data-v-64f3f938]{background:#404041;color:#fde6dc;display:grid}.header__item[data-v-64f3f938]{list-style:none;display:flex;padding:1.25rem;grid-area:nav;align-items:center}.header__list+.header__list[data-v-64f3f938]{margin-left:10px}.header__link[data-v-64f3f938]{font-family:Telegraf-Regular;text-decoration:none;font-size:1rem;font-style:normal;font-weight:700;line-height:1.25rem;letter-spacing:0;color:#fde6dc;transition:.4s ease-in-out}.header__link[data-v-64f3f938]:hover{color:#e9cdc1}.header__img[data-v-64f3f938]{align-self:flex-end;justify-self:center;grid-area:img;position:absolute;top:0;right:40px}.header__infos[data-v-64f3f938]{grid-area:text;display:grid;align-self:center;margin:auto;max-width:400px;padding:.9375rem}.header__title[data-v-64f3f938]{font-size:2.4rem}.header__subtitle[data-v-64f3f938],.header__title[data-v-64f3f938]{font-family:Telegraf-Regular;margin:0;font-style:normal;font-weight:800;line-height:4rem;letter-spacing:0;text-align:center;min-width:200px}.header__subtitle[data-v-64f3f938]{font-size:1.5rem}.header__text[data-v-64f3f938]{font-size:1.125rem;font-weight:400;line-height:2rem;padding:.3125rem 0}.header__button[data-v-64f3f938],.header__text[data-v-64f3f938]{font-style:normal;letter-spacing:0;text-align:center}.header__button[data-v-64f3f938]{font-family:Telegraf-Regular;text-decoration:none;background:#fde6dc;border-radius:.5rem;width:120px;padding:.625rem;font-size:1.25rem;font-weight:700;line-height:1.875rem;color:#000;transition:.4s ease-in-out;margin:.625rem auto}.header__button[data-v-64f3f938]:hover{background:#e9cdc1}.header__illustration[data-v-64f3f938]{grid-area:illustration;display:none;justify-content:end}.header__img-illustration[data-v-64f3f938]{max-width:100%;grid-column:1;grid-row:1/1}.header__item--illustration[data-v-64f3f938]{list-style:none;display:flex;padding:.9375rem;align-items:center;max-height:50px;grid-column:1;grid-row:1/1;justify-content:center}.header__link--img[data-v-64f3f938],.header__list[data-v-64f3f938]{color:#fff;z-index:20000;display:block}.header__link--img[data-v-64f3f938]:hover{opacity:.6}.header__translate[data-v-64f3f938]{display:flex;align-items:center;justify-content:center;grid-gap:5px;gap:5px;margin:10px;font-size:1.125rem;font-style:normal;font-weight:400;line-height:2rem;letter-spacing:0}.header__link--translate[data-v-64f3f938]{font-family:Telegraf-Regular;text-decoration:none;font-size:1.125rem;color:#fde6dc;transition:.4s ease-in-out}.header__link--translate[data-v-64f3f938]:hover{color:#e9cdc1}@media (min-width:768px){.header[data-v-64f3f938]{background:#404041;display:grid;grid-template-columns:60% 40%;grid-template-areas:\"content illustration\";color:#fde6dc;padding-bottom:1.25rem}.header__content[data-v-64f3f938]{grid-area:content;display:grid;grid-template-rows:3.125rem 1fr;grid-template-columns:1fr minmax(50px,200px);grid-template-areas:\"nav img\" \"text .\"}.header__title[data-v-64f3f938]{font-size:3.5rem}.header__subtitle[data-v-64f3f938],.header__title[data-v-64f3f938]{text-align:left;text-align:initial}.header__subtitle[data-v-64f3f938]{font-size:2rem}.header__text[data-v-64f3f938]{font-size:1.125rem;text-align:left;text-align:initial}.header__button[data-v-64f3f938]{margin:10px 0}.header__illustration[data-v-64f3f938]{display:grid;grid-area:illustration;grid-row:1/1}.header__img[data-v-64f3f938]{position:static}}@media (min-width:1024px){.header[data-v-64f3f938]{grid-template-rows:700px;padding-bottom:0}.header__text[data-v-64f3f938]{padding:.625rem 0}.header__button[data-v-64f3f938]{margin:.625rem 0}}@media (min-width:1300px){.header__item[data-v-64f3f938]{justify-content:center;margin-left:-320px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingHeader.vue?vue&type=template&id=64f3f938&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_vm._ssrNode("<div class=\"header__content\" data-v-64f3f938>","</div>",[_vm._ssrNode("<ul class=\"header__item\" data-v-64f3f938>","</ul>",[_vm._ssrNode("<p class=\"header__translate\" data-v-64f3f938>","</p>",[_vm._ssrNode("Traduções:         "),_vm._l((_vm.availableLocales),function(locale){return _c('nuxt-link',{key:locale.code,staticClass:"header__link--translate",attrs:{"to":_vm.switchLocalePath(locale.code)}},[_vm._v(_vm._s(locale.name))])})],2)]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":_vm.localePath('/blog')}},[_c('img',{staticClass:"header__img",attrs:{"src":__webpack_require__(86),"alt":"ícone dermatologista, Miguel ceccarelli"}})]),_vm._ssrNode(" <div class=\"header__infos\" data-v-64f3f938><h1 class=\"header__title\" data-v-64f3f938><br data-v-64f3f938>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('lanHTitle1')))+"</h1> <h1 class=\"header__title\" data-v-64f3f938>"+_vm._ssrEscape(_vm._s(_vm.$t('dermatologist')))+"</h1> <h2 class=\"header__subtitle\" data-v-64f3f938>"+_vm._ssrEscape(_vm._s(_vm.$t('lanHTitle2')))+"</h2> <p class=\"header__text\" data-v-64f3f938>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('headerText'))+"\n      ")+"</p> <a title=\"agendar consulta com Dr. Miguel Ceccarelli\" href=\"#appointment\" class=\"header__button\" data-v-64f3f938>"+_vm._ssrEscape(_vm._s(_vm.$t('headerButton')))+"</a></div>")],2),_vm._ssrNode(" <div class=\"header__illustration\" data-v-64f3f938><ul class=\"header__item--illustration\" data-v-64f3f938><li class=\"header__list\" data-v-64f3f938><a target=\"_blank\" href=\"https://mobile.twitter.com/migueldermato\" class=\"header__link--img\" data-v-64f3f938><img"+(_vm._ssrAttr("src",__webpack_require__(11)))+" alt=\"Twitter do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-64f3f938></a></li> <li class=\"header__list\" data-v-64f3f938><a target=\"_blank\" href=\"https://www.instagram.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-64f3f938><img"+(_vm._ssrAttr("src",__webpack_require__(12)))+" alt=\"Instagram do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-64f3f938></a></li> <li class=\"header__list\" data-v-64f3f938><a target=\"_blank\" href=\"https://m.facebook.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-64f3f938><img"+(_vm._ssrAttr("src",__webpack_require__(13)))+" alt=\"Facebook do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-64f3f938></a></li> <li class=\"header__list\" data-v-64f3f938><a target=\"_blank\" href=\"https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ\" class=\"header__link--img\" data-v-64f3f938><img"+(_vm._ssrAttr("src",__webpack_require__(14)))+" alt=\"Youtube do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-64f3f938></a></li> <li class=\"header__list\" data-v-64f3f938><a target=\"_blank\" href=\"https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli\" class=\"header__link--img\" data-v-64f3f938><img"+(_vm._ssrAttr("src",__webpack_require__(15)))+" alt=\"Whatsapp do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-64f3f938></a></li></ul> <img"+(_vm._ssrAttr("src",__webpack_require__(98)))+" alt=\"ilustação Dermatologista\" class=\"header__img-illustration\" data-v-64f3f938></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LandingHeader.vue?vue&type=template&id=64f3f938&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var LandingHeadervue_type_script_lang_js_ = ({
  component: true,

  head() {
    return {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
      }],
      script: [{
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
      }]
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }

  }
});
// CONCATENATED MODULE: ./components/LandingHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LandingHeadervue_type_script_lang_js_ = (LandingHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LandingHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64f3f938",
  "766cd48c"
  
)

/* harmony default export */ var LandingHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.834af73.svg";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2d1a1674", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjEwIiBoZWlnaHQ9IjY0MCIgdmlld0JveD0iMCAwIDYxMCA2NDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzcwIiBjeT0iMjcwIiByPSIzNzAiIGZpbGw9IiNGREU2REMiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingHeader_vue_vue_type_style_index_0_id_64f3f938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingHeader_vue_vue_type_style_index_0_id_64f3f938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingHeader_vue_vue_type_style_index_0_id_64f3f938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingHeader_vue_vue_type_style_index_0_id_64f3f938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingHeader_vue_vue_type_style_index_0_id_64f3f938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=landing-header.js.map