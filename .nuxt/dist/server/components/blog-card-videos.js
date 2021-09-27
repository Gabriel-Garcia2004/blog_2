exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=blog-card-videos.js.map