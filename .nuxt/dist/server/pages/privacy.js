exports.ids = [19];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0fc05a26", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_id_1c86ebc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_id_1c86ebc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_id_1c86ebc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_id_1c86ebc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_id_1c86ebc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".privacy[data-v-1c86ebc1]{padding:0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy.vue?vue&type=template&id=1c86ebc1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"privacy"},[_vm._ssrNode("<h2 data-v-1c86ebc1>Política Privacidade</h2> <p data-v-1c86ebc1>\n    A sua privacidade é importante para nós. É política do Miguel Ceccarelli\n    respeitar a sua privacidade em relação a qualquer informação sua que\n    possamos coletar no site\n    <a href=\"www.miguelceccarelli.com\" data-v-1c86ebc1>Miguel Ceccarelli</a>, e outros sites\n    que possuímos e operamos.\n  </p> <p data-v-1c86ebc1>\n    Solicitamos informações pessoais apenas quando realmente precisamos delas\n    para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o\n    seu conhecimento e consentimento. Também informamos por que estamos\n    coletando e como será usado.\n  </p> <p data-v-1c86ebc1>\n    Apenas retemos as informações coletadas pelo tempo necessário para\n    fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro\n    de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.\n  </p> <p data-v-1c86ebc1>\n    Não compartilhamos informações de identificação pessoal publicamente ou\n    com terceiros, exceto quando exigido por lei.\n  </p> <p data-v-1c86ebc1>\n    O nosso site pode ter links para sites externos que não são operados por\n    nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas\n    desses sites e não podemos aceitar responsabilidade por suas respectivas\n    <a href=\"https://politicaprivacidade.com\" target=\"_BLANK\" data-v-1c86ebc1>políticas de privacidade</a>.\n  </p> <p data-v-1c86ebc1>\n    Você é livre para recusar a nossa solicitação de informações pessoais,\n    entendendo que talvez não possamos fornecer alguns dos serviços desejados.\n  </p> <p data-v-1c86ebc1>\n    O uso continuado de nosso site será considerado como aceitação de nossas\n    práticas em torno de privacidade e informações pessoais. Se você tiver\n    alguma dúvida sobre como lidamos com dados do usuário e informações\n    pessoais, entre em contacto connosco.\n  </p> <h2 data-v-1c86ebc1>Política de Cookies Miguel Ceccarelli</h2> <h3 data-v-1c86ebc1>O que são cookies?</h3> <p data-v-1c86ebc1>\n    Como é prática comum em quase todos os sites profissionais, este site usa\n    cookies, que são pequenos arquivos baixados no seu computador, para\n    melhorar sua experiência. Esta página descreve quais informações eles\n    coletam, como as usamos e por que às vezes precisamos armazenar esses\n    cookies. Também compartilharemos como você pode impedir que esses cookies\n    sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar'\n    certos elementos da funcionalidade do site.\n  </p> <h3 data-v-1c86ebc1>Como usamos os cookies?</h3> <p data-v-1c86ebc1>\n    Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na\n    maioria dos casos, não existem opções padrão do setor para desativar os\n    cookies sem desativar completamente a funcionalidade e os recursos que\n    eles adicionam a este site. É recomendável que você deixe todos os cookies\n    se não tiver certeza se precisa ou não deles, caso sejam usados ​​para\n    fornecer um serviço que você usa.\n  </p> <h3 data-v-1c86ebc1>Desativar cookies</h3> <p data-v-1c86ebc1>\n    Você pode impedir a configuração de cookies ajustando as configurações do\n    seu navegador (consulte a Ajuda do navegador para saber como fazer isso).\n    Esteja ciente de que a desativação de cookies afetará a funcionalidade\n    deste e de muitos outros sites que você visita. A desativação de cookies\n    geralmente resultará na desativação de determinadas funcionalidades e\n    recursos deste site. Portanto, é recomendável que você não desative os\n    cookies.\n  </p> <h3 data-v-1c86ebc1>Cookies que definimos</h3> <ul data-v-1c86ebc1><li data-v-1c86ebc1>\n      Cookies relacionados à conta<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Se você criar uma conta connosco, usaremos cookies para o gerenciamento\n      do processo de inscrição e administração geral. Esses cookies geralmente\n      serão excluídos quando você sair do sistema, porém, em alguns casos,\n      eles poderão permanecer posteriormente para lembrar as preferências do\n      seu site ao sair.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Cookies relacionados ao login<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Utilizamos cookies quando você está logado, para que possamos lembrar\n      dessa ação. Isso evita que você precise fazer login sempre que visitar\n      uma nova página. Esses cookies são normalmente removidos ou limpos\n      quando você efetua logout para garantir que você possa acessar apenas a\n      recursos e áreas restritas ao efetuar login.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Cookies relacionados a boletins por e-mail<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Este site oferece serviços de assinatura de boletim informativo ou\n      e-mail e os cookies podem ser usados ​​para lembrar se você já está\n      registrado e se deve mostrar determinadas notificações válidas apenas\n      para usuários inscritos / não inscritos.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Pedidos processando cookies relacionados<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Este site oferece facilidades de comércio eletrônico ou pagamento e\n      alguns cookies são essenciais para garantir que seu pedido seja lembrado\n      entre as páginas, para que possamos processá-lo adequadamente.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Cookies relacionados a pesquisas<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Periodicamente, oferecemos pesquisas e questionários para fornecer\n      informações interessantes, ferramentas úteis ou para entender nossa base\n      de usuários com mais precisão. Essas pesquisas podem usar cookies para\n      lembrar quem já participou numa pesquisa ou para fornecer resultados\n      precisos após a alteração das páginas.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Cookies relacionados a formulários<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Quando você envia dados por meio de um formulário como os encontrados\n      nas páginas de contacto ou nos formulários de comentários, os cookies\n      podem ser configurados para lembrar os detalhes do usuário para\n      correspondência futura.<br data-v-1c86ebc1><br data-v-1c86ebc1></li> <li data-v-1c86ebc1>\n      Cookies de preferências do site<br data-v-1c86ebc1><br data-v-1c86ebc1>\n      Para proporcionar uma ótima experiência neste site, fornecemos a\n      funcionalidade para definir suas preferências de como esse site é\n      executado quando você o usa. Para lembrar suas preferências, precisamos\n      definir cookies para que essas informações possam ser chamadas sempre\n      que você interagir com uma página for afetada por suas preferências.<br data-v-1c86ebc1></li></ul> <h3 data-v-1c86ebc1>Cookies de Terceiros</h3> <p data-v-1c86ebc1>\n    Em alguns casos especiais, também usamos cookies fornecidos por terceiros\n    confiáveis. A seção a seguir detalha quais cookies de terceiros você pode\n    encontrar através deste site.\n  </p> <ul data-v-1c86ebc1><li data-v-1c86ebc1>\n      Este site usa o Google Analytics, que é uma das soluções de análise mais\n      difundidas e confiáveis ​​da Web, para nos ajudar a entender como você\n      usa o site e como podemos melhorar sua experiência. Esses cookies podem\n      rastrear itens como quanto tempo você gasta no site e as páginas\n      visitadas, para que possamos continuar produzindo conteúdo atraente.\n    </li></ul> <p data-v-1c86ebc1>\n    Para mais informações sobre cookies do Google Analytics, consulte a página\n    oficial do Google Analytics.\n  </p> <ul data-v-1c86ebc1><li data-v-1c86ebc1>\n      As análises de terceiros são usadas para rastrear e medir o uso deste\n      site, para que possamos continuar produzindo conteúdo atrativo. Esses\n      cookies podem rastrear itens como o tempo que você passa no site ou as\n      páginas visitadas, o que nos ajuda a entender como podemos melhorar o\n      site para você.\n    </li> <li data-v-1c86ebc1>\n      Periodicamente, testamos novos recursos e fazemos alterações subtis na\n      maneira como o site se apresenta. Quando ainda estamos testando novos\n      recursos, esses cookies podem ser usados ​​para garantir que você receba\n      uma experiência consistente enquanto estiver no site, enquanto\n      entendemos quais otimizações os nossos usuários mais apreciam.\n    </li> <li data-v-1c86ebc1>\n      À medida que vendemos produtos, é importante entendermos as estatísticas\n      sobre quantos visitantes de nosso site realmente compram e, portanto,\n      esse é o tipo de dados que esses cookies rastrearão. Isso é importante\n      para você, pois significa que podemos fazer previsões de negócios com\n      precisão que nos permitem analizar nossos custos de publicidade e\n      produtos para garantir o melhor preço possível.\n    </li></ul> <h3 data-v-1c86ebc1>Compromisso do Usuário</h3> <p data-v-1c86ebc1>O usuário se compromete a fazer uso adequado dos conteúdos e da informação\n    que o Miguel Ceccarelli oferece no site e com caráter enunciativo, mas não\n    limitativo:\n  </p> <ul data-v-1c86ebc1><li data-v-1c86ebc1>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa\n      fé a à ordem pública;\n    </li> <li data-v-1c86ebc1>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,\n      ou casas de apostas legais (ex.:<a href=\"https://ondeapostar.pt/review/betano/\" data-v-1c86ebc1>Betano</a>), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de\n      apologia ao terrorismo ou contra os direitos humanos;\n    </li> <li data-v-1c86ebc1>C) Não causar danos aos sistemas físicos (hardwares) e lógicos\n      (softwares) do Miguel Ceccarelli, de seus fornecedores ou terceiros,\n      para introduzir ou disseminar vírus informáticos ou quaisquer outros\n      sistemas de hardware ou software que sejam capazes de causar danos\n      anteriormente mencionados.\n    </li></ul> <h3 data-v-1c86ebc1>Mais informações</h3> <p data-v-1c86ebc1>Esperemos que esteja esclarecido e, como mencionado anteriormente, se\n    houver algo que você não tem certeza se precisa ou não, geralmente é mais\n    seguro deixar os cookies ativados, caso interaja com um dos recursos que\n    você usa em nosso site.\n  </p> <h2 data-v-1c86ebc1>1. Termos</h2> <p data-v-1c86ebc1>Ao acessar ao site\n    <a href=\"www.miguelceccarelli.com\" data-v-1c86ebc1>Miguel Ceccarelli</a>, concorda em\n    cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis\n    ​​e concorda que é responsável pelo cumprimento de todas as leis locais\n    aplicáveis. Se você não concordar com algum desses termos, está proibido\n    de usar ou acessar este site. Os materiais contidos neste site são\n    protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.\n  </p> <h2 data-v-1c86ebc1>2. Uso de Licença</h2> <p data-v-1c86ebc1>\n    É concedida permissão para baixar temporariamente uma cópia dos materiais\n    (informações ou software) no site Miguel Ceccarelli , apenas para\n    visualização transitória pessoal e não comercial. Esta é a concessão de\n    uma licença, não uma transferência de título e, sob esta licença, você não\n    pode:\n  </p> <ol data-v-1c86ebc1><li data-v-1c86ebc1>modificar ou copiar os materiais;</li> <li data-v-1c86ebc1>\n      usar os materiais para qualquer finalidade comercial ou para exibição\n      pública (comercial ou não comercial);\n    </li> <li data-v-1c86ebc1>\n      tentar descompilar ou fazer engenharia reversa de qualquer software\n      contido no site Miguel Ceccarelli;\n    </li> <li data-v-1c86ebc1>\n      remover quaisquer direitos autorais ou outras notações de propriedade\n      dos materiais; ou\n    </li> <li data-v-1c86ebc1>\n      transferir os materiais para outra pessoa ou 'espelhe' os materiais em\n      qualquer outro servidor.\n    </li></ol> <p data-v-1c86ebc1>\n    Esta licença será automaticamente rescindida se você violar alguma dessas\n    restrições e poderá ser rescindida por Miguel Ceccarelli a qualquer\n    momento. Ao encerrar a visualização desses materiais ou após o término\n    desta licença, você deve apagar todos os materiais baixados em sua posse,\n    seja em formato eletrónico ou impresso.\n  </p> <h2 data-v-1c86ebc1>3. Isenção de responsabilidade</h2> <ol data-v-1c86ebc1><li data-v-1c86ebc1>\n      Os materiais no site da Miguel Ceccarelli são fornecidos 'como estão'.\n      Miguel Ceccarelli não oferece garantias, expressas ou implícitas, e, por\n      este meio, isenta e nega todas as outras garantias, incluindo, sem\n      limitação, garantias implícitas ou condições de comercialização,\n      adequação a um fim específico ou não violação de propriedade intelectual\n      ou outra violação de direitos.\n    </li> <li data-v-1c86ebc1>\n      Além disso, o Miguel Ceccarelli não garante ou faz qualquer\n      representação relativa à precisão, aos resultados prováveis ​​ou à\n      confiabilidade do uso dos materiais em seu site ou de outra forma\n      relacionado a esses materiais ou em sites vinculados a este site.\n    </li></ol> <h2 data-v-1c86ebc1>4. Limitações</h2> <p data-v-1c86ebc1>\n    Em nenhum caso o Miguel Ceccarelli ou seus fornecedores serão responsáveis\n    ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados\n    ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da\n    incapacidade de usar os materiais em Miguel Ceccarelli, mesmo que Miguel\n    Ceccarelli ou um representante autorizado da Miguel Ceccarelli tenha sido\n    notificado oralmente ou por escrito da possibilidade de tais danos. Como\n    algumas jurisdições não permitem limitações em garantias implícitas, ou\n    limitações de responsabilidade por danos conseqüentes ou incidentais,\n    essas limitações podem não se aplicar a você.\n  </p> <h2 data-v-1c86ebc1>5. Precisão dos materiais</h2> <p data-v-1c86ebc1>\n    Os materiais exibidos no site da Miguel Ceccarelli podem incluir erros\n    técnicos, tipográficos ou fotográficos. Miguel Ceccarelli não garante que\n    qualquer material em seu site seja preciso, completo ou atual. Miguel\n    Ceccarelli pode fazer alterações nos materiais contidos em seu site a\n    qualquer momento, sem aviso prévio. No entanto, Miguel Ceccarelli não se\n    compromete a atualizar os materiais.\n  </p> <h2 data-v-1c86ebc1>6. Links</h2> <p data-v-1c86ebc1>\n    O Miguel Ceccarelli não analisou todos os sites vinculados ao seu site e\n    não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de\n    qualquer link não implica endosso por Miguel Ceccarelli do site. O uso de\n    qualquer site vinculado é por conta e risco do usuário.\n  </p> <h3 data-v-1c86ebc1>Modificações</h3> <p data-v-1c86ebc1>\n    O Miguel Ceccarelli pode revisar estes termos de serviço do site a\n    qualquer momento, sem aviso prévio. Ao usar este site, você concorda em\n    ficar vinculado à versão atual desses termos de serviço.\n  </p> <h3 data-v-1c86ebc1>Lei aplicável</h3> <p data-v-1c86ebc1>\n    Estes termos e condições são regidos e interpretados de acordo com as leis\n    do Miguel Ceccarelli e você se submete irrevogavelmente à jurisdição\n    exclusiva dos tribunais naquele estado ou localidade.\n  </p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/privacy.vue?vue&type=template&id=1c86ebc1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var privacyvue_type_script_lang_js_ = ({
  head: {
    title: 'my website title',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'my website description'
    }]
  }
});
// CONCATENATED MODULE: ./pages/privacy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_privacyvue_type_script_lang_js_ = (privacyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/privacy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_privacyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c86ebc1",
  "22b77f84"
  
)

/* harmony default export */ var privacy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=privacy.js.map