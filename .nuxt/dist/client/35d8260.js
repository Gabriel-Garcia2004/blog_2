(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(t,e,l){var content=l(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(56).default)("51191417",content,!0,{sourceMap:!1})},495:function(t,e,l){"use strict";l(341)},496:function(t,e,l){var r=l(55)(!1);r.push([t.i,'*[data-v-1d646abb]{font-family:Telegraf-Regular,sans-serif}.blog[data-v-1d646abb]{background:#404041;padding:40px 20px}.grid-blog[data-v-1d646abb]{max-width:80%;margin:0 auto;display:flex;flex-direction:column;grid-gap:10px;gap:10px;align-items:center;justify-content:center}.blog__title[data-v-1d646abb]{font-family:Telegraf-Regular;font-size:48px;font-style:normal;font-weight:800;line-height:64px;letter-spacing:0;color:#fde6dc;text-align:center;grid-area:title}.blog__card-img[data-v-1d646abb]{display:block}.blog__card-title[data-v-1d646abb]{font-family:Telegraf-Regular;color:#fde6dc;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:0;text-decoration:none;margin:10px 0;display:block}.blog__card-title[data-v-1d646abb]:hover{color:rgba(253,230,220,.8)}.blog__card[data-v-1d646abb]{display:block;margin:0 auto;max-width:350px}.blog__img[data-v-1d646abb]{max-width:100%}@media (min-width:500px){.grid-blog[data-v-1d646abb]{display:flex;grid-template-columns:repeat(2,1fr);grid-template-areas:"title title" "artigo artigo" "artigo artigo";grid-gap:20px;gap:20px}}@media (min-width:768px){.grid-blog[data-v-1d646abb]{display:grid;grid-template-columns:repeat(4,minmax(200px,400px));grid-template-areas:"title title title title" "artigo artigo artigo artigo";grid-gap:20px;gap:20px}}',""]),t.exports=r},520:function(t,e,l){"use strict";l.r(e);var r,o=l(4),n=(l(22),{data:function(){return{error:void 0,data:void 0,language:this.$nuxt.$i18n.locale}},created:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("/category/home").then((function(data){data.data.status||(e.error=data.data.data),e.data=data.data.data}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),d=(l(495),l(17)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"blog",attrs:{id:"blog"}},[l("div",{staticClass:"grid-blog"},[l("h2",{staticClass:"blog__title"},[l("NuxtLink",{staticClass:"blog__title",attrs:{to:t.localePath("/blog")}},[t._v(t._s(t.$t("LanBlogTitle"))+"\n\t\t")])],1),t._v(" "),l("h3",{directives:[{name:"show",rawName:"v-show",value:null!=t.error,expression:"error != undefined"}],staticClass:"blog__title"},[t._v(t._s(t.error))]),t._v(" "),t._l(t.data,(function(e){return l("div",{key:e.id,staticClass:"blog__card"},[l("NuxtLink",{staticClass:"blog__card-img",attrs:{to:t.localePath({name:"blog-category-id",params:{id:e.id}})}},["br"==t.language||null==t.language?l("img",{staticClass:"blog__img",attrs:{src:e.image,alt:e.title}}):"en"==t.language?l("img",{staticClass:"blog__img",attrs:{src:e.image,alt:e.titleEn}}):l("img",{staticClass:"blog__img",attrs:{src:e.image,alt:e.titleEs}})]),t._v(" "),"br"==t.language||null==t.language?l("h3",{staticClass:"blog__title"},[l("NuxtLink",{staticClass:"blog__card-title",attrs:{to:t.localePath({name:"blog-category-id",params:{id:e.id}})}},[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")])],1):"en"==t.language?l("h3",{staticClass:"blog__title"},[l("NuxtLink",{staticClass:"blog__card-title",attrs:{to:t.localePath({name:"blog-category-id",params:{id:e.id}})}},[t._v("\n\t\t\t\t"+t._s(e.titleEn)+"\n\t\t\t")])],1):l("h3",{staticClass:"blog__title"},[l("NuxtLink",{staticClass:"blog__card-title",attrs:{to:t.localePath({name:"blog-category-id",params:{id:e.id}})}},[t._v("\n\t\t\t\t"+t._s(e.titleEs)+"\n\t\t\t")])],1)],1)}))],2)])}),[],!1,null,"1d646abb",null);e.default=component.exports}}]);