<template>
  <section class="l-Blog">
    <BlogNavbar/>
    <BlogHeader/>
    <FeaturedArticleForMain/>
    <FeaturedMiniArticleForMain/>
    <BlogSidebar/>
    <BlogCardVideos/>
    <Footer/>
            <a class="button-fluter" target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" 
            ><img
              src="~/assets/whatsapp.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="fluter"
          /></a>
  </section>
</template>

<style scoped>
 @font-face {
   font-family: Telegraf-Regular;
   src: url(./assets/tipografia/Telegraf-Regular.otf);
 }
.l-Blog{
  display: grid;
  grid-template-columns: 70% 30% ;
  grid-template-areas:
  "nav nav"
  "header header"
  "article article"
  "miniArticle miniArticle"
  "videos videos"
  "footer footer";
   background: #f8f8f8;
        overflow-x: hidden;


}
.info-bar{
  grid-area: nav;
}
.header{
  grid-area: header;
}
.article {
  grid-area: article;
}
.sidebar{
  grid-area: sidebar;
}
.miniArticle{
  grid-area: miniArticle;
}
.footer{
  grid-area: footer;

}
.videos {
  grid-area: videos;
}
 .button-floter, .fluter{
  display: block;
  position: fixed;
  top: 90%;
  right: 5%;
  z-index: 500;
}
.fluter{
  z-index: 100;
}
@media (min-width: 600px) {
  .l-Blog{
  display: grid;
  grid-template-columns: 80% 20% ;
  grid-template-areas:
  "nav nav"
  "header header"
  "article article"
  "miniArticle miniAraticle"
  "videos videos"
  "footer footer";
   background: #f8f8f8;

}
}
@media (min-width: 1100px) {
  .l-Blog{
  display: grid;
  grid-template-columns: 70% 30% ;
  grid-template-areas:
  "nav nav"
  "header header"
  "article sidebar"
  "miniArticle sidebar"
  "videos videos"
  "footer footer";
   background: #f8f8f8;

}
}
</style>
<script>
export default {

  head: {
    title: 'Blog | Miguel Ceccarelli',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Blog - Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta.",
        },
         { hid: "robots", name: "robots", content: "index, follow" },
      ],
    },
          }

</script>

