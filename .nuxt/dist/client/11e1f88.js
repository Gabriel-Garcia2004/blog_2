(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,4,8],{326:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("6e169528",content,!0,{sourceMap:!1})},327:function(t,e,r){"use strict";r(326)},328:function(t,e,r){var o=r(55)(!1);o.push([t.i,"*[data-v-0e1e0abc]{font-family:Telegraf-Regular,sans-serif}.videos[data-v-0e1e0abc]{display:grid;padding:.625rem 0}.videos-container[data-v-0e1e0abc]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:20px;gap:20px}.card-video[data-v-0e1e0abc]{box-shadow:0 2px 4px 0 rgba(0,0,0,.14118);box-shadow:0 3px 4px 0 rgba(0,0,0,.12157);box-shadow:0 1px 5px 0 rgba(0,0,0,.2);padding:10px 0}.card-video__description[data-v-0e1e0abc]{max-width:290px;padding:.3125rem}.card-video__title[data-v-0e1e0abc]{font-size:1.25rem;font-style:normal;font-weight:500;line-height:1.875rem;letter-spacing:.0094rem;color:rgba(0,0,0,.87059);padding:0 .3125rem;max-width:290px}.card-video__subtitle[data-v-0e1e0abc]{font-size:.875rem;font-style:normal;font-weight:400;line-height:1.3125rem;letter-spacing:.0156rem;color:rgba(0,0,0,.6);padding:.3125rem;max-width:290px}@media (min-width:600px){.videos-container[data-v-0e1e0abc]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center}}",""]),t.exports=o},329:function(t,e,r){"use strict";r.r(e);var o,n=r(4),l=(r(22),{data:function(){return{data:void 0,error:void 0}},created:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("/videos/all").then((function(data){data.data.data.status||(e.error=data.data.data.message),e.data=data.data.data}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}),c=(r(327),r(17)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"videos"},[r("div",{staticClass:"videos-container"},t._l(t.data,(function(video){return r("div",{key:video.id,staticClass:"card-video"},[r("h2",{staticClass:"card-video__title"},[t._v("Dr. Miguel Ceccarelli")]),t._v(" "),r("h3",{staticClass:"card-video__subtitle"},[t._v(t._s(video.title))]),t._v(" "),r("iframe",{attrs:{"max-width":"300",height:"200",src:video.url,title:video.title,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",alt:"Vídeo do Dermatologista Miguel Ceccarelli"}}),t._v(" "),r("p",{staticClass:"card-video__description"},[t._v(t._s(video.short))])])})),0)])}),[],!1,null,"0e1e0abc",null);e.default=component.exports},330:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("13da9863",content,!0,{sourceMap:!1})},331:function(t,e,r){"use strict";var o=r(3),n=r(332);o({target:"String",proto:!0,forced:r(333)("link")},{link:function(t){return n(this,"a","href",t)}})},332:function(t,e,r){var o=r(33),n=/"/g;t.exports=function(t,e,r,l){var c=String(o(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(n,"&quot;")+'"'),d+">"+c+"</"+e+">"}},333:function(t,e,r){var o=r(6);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},335:function(t,e,r){"use strict";r(330)},336:function(t,e,r){var o=r(55)(!1);o.push([t.i,'*[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif}.miniArticle[data-v-17a0f68e]{padding:.875rem}.miniArticle__title[data-v-17a0f68e]{font-size:1.125rem;font-style:italic;font-weight:700;line-height:.9375rem;letter-spacing:.025rem;color:#a28a7f;padding-bottom:1.875rem;border-bottom:.125rem double #42494f;position:relative}.miniArticle__title[data-v-17a0f68e]:after{content:"";position:absolute;bottom:-.9375rem;left:0;width:100%;height:.125rem;background-color:#42494f}.miniArticle__title>span[data-v-17a0f68e]{color:rgba(0,0,0,.4)}.miniArticle__article-box[data-v-17a0f68e]{background-color:#fafafa;display:grid;grid-gap:0 .3125rem;gap:0 .3125rem;grid-template-areas:"img title button" "img title button" "img title button";min-width:300px;grid-template-columns:1fr 3fr 1fr;border-radius:.5rem 0 0 .5rem;box-shadow:0 2px 4px 0 rgba(0,0,0,.14118);box-shadow:0 3px 4px 0 rgba(0,0,0,.12157);box-shadow:0 1px 5px 0 rgba(0,0,0,.2)}.miniArticle__subtitle[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif;font-style:normal;font-weight:700;font-size:1.125rem;line-height:.9375rem;margin:1.5rem 0!important;letter-spacing:.025rem;color:#a28a7f;grid-area:info}.miniArticle__img[data-v-17a0f68e]{grid-area:img;border-radius:.5rem 0 0 .5rem;max-width:100%;display:grid;margin:0;-o-object-fit:contain;object-fit:contain;background-color:#404042}.object-fit[data-v-17a0f68e]{-o-object-fit:contain!important;object-fit:contain!important}.miniArticle__articleInfos[data-v-17a0f68e]{grid-area:title;padding:.25rem}.miniArticle__author[data-v-17a0f68e]{font-size:1.2rem;line-height:2rem;letter-spacing:0;color:rgba(0,0,0,.87059)}.miniArticle__author[data-v-17a0f68e],.miniArticle__description[data-v-17a0f68e]{font-style:normal;font-weight:400;margin:0;font-family:Telegraf-Regular}.miniArticle__description[data-v-17a0f68e]{font-size:.875rem;line-height:1.3125rem;letter-spacing:.0156rem;color:rgba(0,0,0,.6)}.miniArticle__button[data-v-17a0f68e]{font-family:Telegraf-Regular,sans-serif;grid-area:button;font-size:.875rem;font-style:normal;font-weight:700;line-height:1.25rem;letter-spacing:0;text-align:center;color:#42494f;border:1px solid #42494f;border-radius:.2rem;display:grid;margin:.625rem;padding:.3125rem;text-decoration:none;transition:.4s ease;max-height:50px;align-items:center}.miniArticle__button--gray[data-v-17a0f68e]:hover,.miniArticle__button[data-v-17a0f68e]:hover{border:1px solid rgba(0,0,0,.9)}.miniArticle__button--gray[data-v-17a0f68e]{display:grid;background:#e5e5e5;border-radius:.5rem;font-size:.875rem;font-style:normal;font-weight:700;line-height:1.25rem;letter-spacing:0;text-align:center;padding:10px;max-width:200px;margin:15px auto;color:rgba(0,0,0,.87059);text-decoration:none;border:1px solid #e5e5e5;transition:.4s ease}',""]),t.exports=o},342:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("c75654a4",content,!0,{sourceMap:!1})},481:function(t,e,r){"use strict";r.r(e);var o=r(4),n=(r(22),r(40),r(32),{data:function(){return{article:this.$route.params.slug||void 0,language:this.$nuxt.$i18n.locale,data:void 0}},head:function(){return{link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}],title:this.subcategory,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Blog - Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta."},{hid:"robots",name:"robots",content:"index, follow"}]}},created:function(){this.executeData()},methods:{upperCase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},executeData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("article/without").then((function(data){data.data.status||(t.error=data.data.data),null!=t.article?t.data=data.data.data.filter((function(e){return e.slug.toLowerCase()!==String(t.article).toLowerCase()})):t.data=data.data.data.filter((function(e){return e.slug.toLowerCase()!=String(t.$refs.articleTitle).toLowerCase()}))}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=(r(335),r(17)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"miniArticle"},t._l(t.data,(function(article){return r("div",{key:article.id,staticClass:"miniArticle__article"},[r("h4",{staticClass:"miniArticle__subtitle"},[t._v(t._s(t.$t("HighlightOfTheDay")))]),t._v(" "),r("div",{staticClass:"miniArticle__article-box"},[r("figure",{staticClass:"miniArticle__img"},[r("img",{staticClass:"miniArticle__img object-fit",attrs:{src:article.image,alt:article.short}})]),t._v(" "),"br"==t.language||null==t.language?r("div",{staticClass:"miniArticle__articleInfos"},[r("h5",{staticClass:"miniArticle__author"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"miniArticle__description"},[t._v(t._s(article.short)+" ")])]):"en"==t.language?r("div",{staticClass:"miniArticle__articleInfos"},[r("h5",{staticClass:"miniArticle__author"},[t._v(t._s(article.titleEn))]),t._v(" "),r("p",{staticClass:"miniArticle__description"},[t._v(t._s(article.shortEn)+" ")])]):r("div",{staticClass:"miniArticle__articleInfos"},[r("h5",{staticClass:"miniArticle__author"},[t._v(t._s(article.titleEs))]),t._v(" "),r("p",{staticClass:"miniArticle__description"},[t._v(t._s(article.shortEs)+" ")])]),t._v(" "),r("NuxtLink",{staticClass:"miniArticle__button",attrs:{to:t.localePath({name:"blog-article-slug",params:{slug:article.slug}})}},[t._v(t._s(t.$t("ReadMore")))])],1)])})),0)}),[],!1,null,"17a0f68e",null);e.default=component.exports},497:function(t,e,r){"use strict";r(342)},498:function(t,e,r){var o=r(55)(!1);o.push([t.i,"*[data-v-76469fa0]{font-family:Telegraf-Regular,sans-serif}.blog__article[data-v-76469fa0]{padding:2.125rem 1.25rem 0}.blog__title[data-v-76469fa0]{font-size:1.125rem;font-style:normal;font-weight:700;line-height:.9375rem;letter-spacing:.025rem;color:#a28a7f}.blog__img[data-v-76469fa0]{max-width:clamp(290px,450px,60%);display:grid;margin:auto}.blog__text[data-v-76469fa0]{color:#575757;font-size:.875rem;font-style:normal;font-weight:400;line-height:1.5625rem;letter-spacing:0;padding:1.25rem 0;text-align:center}.blog__button[data-v-76469fa0]{text-decoration:none;background:#7a695f;width:100px;padding:.9375rem;color:#fff;text-align:center;border-radius:.5rem;display:grid;margin:auto}#container.article__container h2 span[data-v-76469fa0]{font-size:37px!important;font-style:normal;font-weight:400}",""]),t.exports=o},511:function(t,e,r){var content=r(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("4db4091f",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";r.r(e);r(28),r(18),r(32),r(45),r(27),r(46);var o=r(4),n=r(11);r(22),r(44),r(331);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{articleSlug:this.$route.params.slug,language:this.$nuxt.$i18n.locale,short:void 0,shortEn:void 0,shortEs:void 0,image:void 0,slug:void 0,tags:void 0,body:void 0,bodyEn:void 0,bodyEs:void 0,data:void 0,title:void 0,titleEn:void 0,titleEs:void 0,socialmedias:{facebook:"http://www.facebook.com/sharer.php?u=https://miguelceccarelli.com".concat(this.$route.path),twitter:"http://twitter.com/intent/tweet/?url=https://miguelceccarelli.com".concat(this.$route.path),link:"https://miguelceccarelli.com".concat(this.$route.fullPath),whatsapp:void 0}}},created:function(){this.executeData()},head:function(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:this.title,htmlAttrs:c({},t.htmlAttrs),meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.short},{hid:"keywords",name:"keywords",content:this.tags},{hid:"robots",name:"robots",content:"index, follow"}]}},methods:{executeData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/article/slug",{slug:t.articleSlug}).then((function(data){data.data.data.status||(t.error=data.data.data.message),t.title=data.data.data.title,t.titleEn=data.data.data.titleEn,t.titleEs=data.data.data.titleEs,t.body=data.data.data.body,t.bodyEn=data.data.data.bodyEn,t.bodyEs=data.data.data.bodyEs,t.short=data.data.data.short,t.image=data.data.data.image,t.slug=data.data.data.slug,t.tags=data.data.data.tags,t.tags=data.data.data.tags,t.socialmedias.whatsapp="whatsapp://send?text=*Dermatologista Dr. Miguel Ceccarelli*%0a%0a\n        ".concat(data.data.data.short,"%0a%0aVeja este meu artigo sobre *").concat(data.data.data.title,"* clicando no link abaixo. Não se esqueça de ver meus outros artigos, você vai se interessar!%0a%0a*Acesse:* https://miguelceccarelli.com").concat(t.$route.fullPath,"\n        ")}));case 2:case"end":return e.stop()}}),e)})))()},copyToClipBoard:function(){navigator.clipboard.writeText(this.socialmedias.link)}}},f=(r(497),r(17)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Blog article"},[r("article",{staticClass:"blog__article"},["br"==t.language||null==t.language?r("div",[r("h2",{staticClass:"blog__title"},[t._v(t._s(t.$t("BlogHighlighted"))+" "+t._s(t.title))]),t._v(" "),r("img",{staticClass:"blog__img",attrs:{src:t.image,alt:t.title}}),t._v(" "),r("p",{staticClass:"blog__text"},[t._v(t._s(t.short))]),t._v(" "),r("div",{staticClass:"article__container",attrs:{id:"container"},domProps:{innerHTML:t._s(t.body)}})]):"en"==t.language?r("div",[r("h2",{staticClass:"blog__title"},[t._v(t._s(t.$t("BlogHighlighted"))+" "+t._s(t.titleEn))]),t._v(" "),r("img",{staticClass:"blog__img",attrs:{src:t.image,alt:t.titleEn}}),t._v(" "),r("p",{staticClass:"blog__text"},[t._v(t._s(t.shortEn))]),t._v(" "),r("div",{staticClass:"article__container",attrs:{id:"container"},domProps:{innerHTML:t._s(t.bodyEn)}})]):r("div",[r("h2",{staticClass:"blog__title"},[t._v(t._s(t.$t("BlogHighlighted"))+" "+t._s(t.titleEs))]),t._v(" "),r("img",{staticClass:"blog__img",attrs:{src:t.image,alt:t.titleEs}}),t._v(" "),r("p",{staticClass:"blog__text"},[t._v(t._s(t.shortEs))]),t._v(" "),r("div",{staticClass:"article__container",attrs:{id:"container"},domProps:{innerHTML:t._s(t.bodyEs)}})]),t._v(" "),r("a",{staticClass:"btn btn-outline-success mr-2",attrs:{type:"button",href:t.socialmedias.whatsapp}},[t._v("Whatsapp")]),t._v(" "),r("a",{staticClass:"btn btn-outline-primary mr-2",attrs:{type:"button",target:"blank",href:t.socialmedias.facebook}},[t._v("Facebook")]),t._v(" "),r("a",{staticClass:"btn btn-outline-secondary mr-2",attrs:{type:"button",target:"blank",href:t.socialmedias.twitter}},[t._v("Twitter")]),t._v(" "),r("button",{staticClass:"btn btn-outline-warning mr-2",on:{click:t.copyToClipBoard}},[t._v(t._s(t.$t("CopyLink")))])])])}),[],!1,null,"76469fa0",null);e.default=component.exports},532:function(t,e,r){"use strict";r(511)},533:function(t,e,r){var o=r(55)(!1);o.push([t.i,'.l-Blog[data-v-8f1b053c]{display:grid;grid-template-columns:70% 30%;grid-template-areas:"nav nav" "header header" "article article" "miniArticle miniArticle" "videos videos" "footer footer";background:#f8f8f8;overflow-x:hidden}.info-bar[data-v-8f1b053c]{grid-area:nav}.header[data-v-8f1b053c]{grid-area:header}.article[data-v-8f1b053c]{grid-area:article}.sidebar[data-v-8f1b053c]{grid-area:sidebar}.miniArticle[data-v-8f1b053c]{grid-area:miniArticle}.footer[data-v-8f1b053c]{grid-area:footer}.videos[data-v-8f1b053c]{grid-area:videos}@media (min-width:600px){.l-Blog[data-v-8f1b053c]{display:grid;grid-template-columns:80% 20%;grid-template-areas:"nav nav" "header header" "article article" "miniArticle miniAraticle" "videos videos" "footer footer";background:#f8f8f8}}@media (min-width:1100px){.l-Blog[data-v-8f1b053c]{display:grid;grid-template-columns:80% 20%;grid-template-areas:"nav nav" "header header" "article sidebar" "miniArticle sidebar" "videos videos" "footer footer";background:#f8f8f8}}',""]),t.exports=o},549:function(t,e,r){"use strict";r.r(e);r(532);var o=r(17),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"l-Blog"},[r("BlogNavbar"),t._v(" "),r("BlogHeader"),t._v(" "),r("ArticleContent"),t._v(" "),r("FeaturedMiniArticleForMain"),t._v(" "),r("BlogSidebar"),t._v(" "),r("BlogCardVideos"),t._v(" "),r("Footer")],1)}),[],!1,null,"8f1b053c",null);e.default=component.exports;installComponents(component,{BlogNavbar:r(203).default,BlogHeader:r(204).default,ArticleContent:r(521).default,FeaturedMiniArticleForMain:r(481).default,BlogSidebar:r(205).default,BlogCardVideos:r(329).default,Footer:r(146).default})}}]);