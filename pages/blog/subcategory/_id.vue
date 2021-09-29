<template>
  <section class="l-Blog">
    <BlogNavbar />
    <BlogHeader />
    <BlogFeaturedMiniArticle />
    <BlogSidebar />
    <Footer />
        <a class="button-fluter" target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" 
            ><img
              src="~/assets/whatsapp.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="fluter"
          /></a>
  </section>
</template>

<style scoped>
.l-Blog{
  display: grid;
  grid-template-columns: 70% 30% ;
  grid-template-areas:
  "nav nav"
  "header header"
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
  "miniArticle sidebar"
  "videos videos"
  "footer footer";
   background: #f8f8f8;

}
}
</style>
