exports.ids = [11];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f9fcf052", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingNavBar_vue_vue_type_style_index_0_id_00bd76a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingNavBar_vue_vue_type_style_index_0_id_00bd76a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingNavBar_vue_vue_type_style_index_0_id_00bd76a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingNavBar_vue_vue_type_style_index_0_id_00bd76a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingNavBar_vue_vue_type_style_index_0_id_00bd76a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-00bd76a8]{font-family:Telegraf-Regular,sans-serif}image[data-v-00bd76a8]{max-width:100%}.info-bar[data-v-00bd76a8]{padding:.3125rem 0 .375rem;width:100%;grid-area:info-bar;background:#40494f;margin-bottom:-1px;z-index:190;position:fixed}.info-bar__container[data-v-00bd76a8]{max-width:95%;display:flex;align-items:center;justify-content:space-between;margin:0 auto}.info-bar__item[data-v-00bd76a8]{list-style:none;display:flex;align-items:center;justify-content:center;grid-gap:.3125rem;gap:.3125rem;margin:0}.info-bar__img[data-v-00bd76a8],.info-bar__link[data-v-00bd76a8]{display:block}.menu__img[data-v-00bd76a8]{width:50px;height:50px}.search-container[data-v-00bd76a8]{padding:.3125rem;background:#fff;opacity:1;border-radius:.25rem;display:flex}.search__img[data-v-00bd76a8],.search__label[data-v-00bd76a8]{display:block;padding:.125rem;color:#3d3d3d}.search__input[data-v-00bd76a8]{background:none;border:none;max-width:150px;padding:0 .3125rem;color:#3d3d3d}.menu-mobile[data-v-00bd76a8]{background:#40494f;display:none;margin:0}.menu-mobile-img__container[data-v-00bd76a8]{display:none;cursor:pointer}.menu__card[data-v-00bd76a8]{max-width:80px;min-width:50px;width:80px;height:auto;display:grid;align-content:center;justify-content:center;place-content:center}.menu__link[data-v-00bd76a8]{display:flex;align-items:center;grid-gap:.625rem;gap:.625rem;padding:.625rem;transition:.4s ease;text-align:center;font-size:.875rem;width:140px}.menu__link[data-v-00bd76a8],.menu__link[data-v-00bd76a8]:hover{color:#fff;text-decoration:none}.menu__card[data-v-00bd76a8]:hover{background:#404041}.menu__text[data-v-00bd76a8]{margin:0!important;font-size:1rem}.nav-icon[data-v-00bd76a8]{display:none}.menu-mobile__link[data-v-00bd76a8]{width:40px;height:40px}@media (max-width:600px){.info-bar__item[data-v-00bd76a8]{display:none}.info-bar__container[data-v-00bd76a8]{display:grid;grid-template-columns:1fr 2fr 1fr}.menu-mobile[data-v-00bd76a8]{display:block}.menu-mobile__container[data-v-00bd76a8]{right:-200px;transition:all .6s ease-in-out;z-index:100}.menu-mobile__container[data-v-00bd76a8],.menu-mobile__container.active[data-v-00bd76a8]{position:fixed;top:0;width:200px;height:100vh;display:grid;grid-template-rows:10% 75% 5% 10%;grid-template-areas:\".\" \"menu\" \".\" \"links\"}.menu-mobile__container.active[data-v-00bd76a8]{background:#404041;right:0}.menu-mobile-img__container[data-v-00bd76a8]{display:grid;align-items:center;margin:0}.menu-mobile__img[data-v-00bd76a8]{height:40px;width:40px;display:grid;align-self:center}.menu-mobile__menu[data-v-00bd76a8]{grid-area:menu;flex-direction:column;justify-content:space-evenly}.info-bar__item--mobile[data-v-00bd76a8],.menu-mobile__menu[data-v-00bd76a8]{display:flex;align-items:center;margin:0;padding:0}.info-bar__item--mobile[data-v-00bd76a8]{grid-area:links;list-style:none;justify-content:center;grid-gap:.3125rem;gap:.3125rem}.info-bar__img[data-v-00bd76a8]{width:25px;height:25px}.nav-icon[data-v-00bd76a8]{font-size:2rem;display:grid;align-items:center;justify-content:flex-end;align-self:center;justify-self:flex-end;margin:0;color:#fff}.fa-times[data-v-00bd76a8],.nav-icon[data-v-00bd76a8]{z-index:200}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingNavBar.vue?vue&type=template&id=00bd76a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"info-bar"},[_vm._ssrNode("<div class=\"info-bar__container\" data-v-00bd76a8>","</div>",[_vm._ssrNode("<figure class=\"menu-mobile-img__container\" data-v-00bd76a8>","</figure>",[_c('NuxtLink',{staticClass:"menu-mobile__link",attrs:{"to":_vm.localePath('/')}},[_c('img',{staticClass:"menu-mobile__img",attrs:{"src":__webpack_require__(86)}})])],1),_vm._ssrNode(" <ul class=\"info-bar__item\" data-v-00bd76a8><li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://mobile.twitter.com/migueldermato\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(11)))+" alt=\"Twitter do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://www.instagram.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(12)))+" alt=\"Instagram do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://m.facebook.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(13)))+" alt=\"Facebook do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(14)))+" alt=\"Youtube do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(15)))+" alt=\"Whatsapp do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li></ul> "+((!_vm.closeNav)?("<p class=\"nav-icon\" data-v-00bd76a8><i class=\"fas fa-bars\" data-v-00bd76a8></i></p>"):"<!---->")+" "+((_vm.closeNav)?("<p class=\"nav-icon\" data-v-00bd76a8><i class=\"fas fa-times\" data-v-00bd76a8></i></p>"):"<!---->")+" "),_vm._ssrNode("<nav class=\"menu-mobile \" data-v-00bd76a8>","</nav>",[_vm._ssrNode("<div class=\"menu-mobile__container\" data-v-00bd76a8>","</div>",[_vm._ssrNode("<ul class=\"menu-mobile__menu\" data-v-00bd76a8>","</ul>",[_vm._ssrNode("<li class=\"menu__card\" data-v-00bd76a8>","</li>",[_c('NuxtLink',{staticClass:"menu__link",attrs:{"to":_vm.localePath('/')}},[_c('img',{staticClass:"menu__img",attrs:{"alt":"Ilustração do Dermatologista, Miguel Ceccarelli","src":__webpack_require__(23)}}),_vm._v(" "),_c('p',{staticClass:"menu__text"},[_vm._v("Home")])])],1),_vm._ssrNode(" "),_vm._l((_vm.data),function(category){return _vm._ssrNode("<li class=\"menu__card\" data-v-00bd76a8>","</li>",[_c('NuxtLink',{staticClass:"menu__link",attrs:{"to":_vm.localePath(("/blog/category/" + (category.id)))}},[_c('img',{staticClass:"menu__img",attrs:{"alt":"Ilustração do Dermatologista, Miguel Ceccarelli","src":category.image}}),_vm._v(" "),_c('h2',{staticClass:"menu__text"},[_vm._v(_vm._s(category.title))])])],1)})],2),_vm._ssrNode(" <ul class=\"info-bar__item--mobile\" data-v-00bd76a8><li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://mobile.twitter.com/migueldermato\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(11)))+" alt=\"Twitter do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://www.instagram.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(12)))+" alt=\"Instagram do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://m.facebook.com/dr.miguelceccarelli/\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(13)))+" alt=\"Facebook do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(14)))+" alt=\"Youtube do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li> <li class=\"info-bar__list\" data-v-00bd76a8><a target=\"_blank\" href=\"https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli\" class=\"header__link--img\" data-v-00bd76a8><img"+(_vm._ssrAttr("src",__webpack_require__(15)))+" alt=\"Whatsapp do Dermatologista Miguel Ceccarelli\" class=\"info-bar__img\" data-v-00bd76a8></a></li></ul>")],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LandingNavBar.vue?vue&type=template&id=00bd76a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingNavBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LandingNavBarvue_type_script_lang_js_ = ({
  component: true,

  data() {
    return {
      data: undefined,
      subcategories: undefined,
      error: undefined,
      search: undefined,
      closeNav: false
    };
  },

  created: async function () {
    await this.$axios.post('/category/all').then(data => {
      if (!data["data"]["status"]) {
        this.error = data["data"]["data"];
      }

      this.data = data["data"]["data"];
    });
  },
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
    }]
  },
  methods: {
    onEnter: function () {
      this.$router.push(this.localePath({
        name: 'blog-search-query',
        params: {
          query: this.search
        }
      }));
    },

    toggleNav() {
      this.closeNav = !this.closeNav;
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    }

  }
});
// CONCATENATED MODULE: ./components/LandingNavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LandingNavBarvue_type_script_lang_js_ = (LandingNavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LandingNavBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingNavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00bd76a8",
  "b4fc24c6"
  
)

/* harmony default export */ var LandingNavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.834af73.svg";

/***/ })

};;
//# sourceMappingURL=landing-nav-bar.js.map