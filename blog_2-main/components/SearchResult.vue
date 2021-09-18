<template>
  <section class="miniArticle">

    <h4 class="miniArticle__article" :v-show="error">{{ error }}</h4>
    <div class="miniArticle__article" v-for="article in data" :key="article.id">
      <h4 class="miniArticle__subtitle">{{$t('HighlightOfTheDay')}}</h4>
      <div class="miniArticle__article-box">
        <figure class="miniArticle__img">

          <img :src="article.image" :alt="article.short" class="miniArticle__img object-fit">
        </figure>
        <div class="miniArticle__articleInfos" v-if="language == 'br' || language == undefined">
          <h5 class="miniArticle__author">{{ article.title }}</h5>
          <p class="miniArticle__description">{{ article.short }} </p>
        </div>
        <div class="miniArticle__articleInfos" v-else-if="language == 'en'">
          <h5 class="miniArticle__author">{{ article.titleEn }}</h5>
          <p class="miniArticle__description">{{ article.shortEn }} </p>
        </div>
        <div class="miniArticle__articleInfos" v-else>
          <h5 class="miniArticle__author">{{ article.titleEs }}</h5>
          <p class="miniArticle__description">{{ article.shortEs }} </p>
        </div>

        <NuxtLink class="miniArticle__button" :to="localePath({ name: 'blog-article-slug', params: { slug: article.slug } })">{{$t('ReadMore')}}</NuxtLink>

      </div>
    </div>

  </section>
</template>

<script>

export default {
  data(){
    return {
      data: undefined,
      error: undefined,
      language: this.$nuxt.$i18n.locale || 'br',
      search: this.$route.params.query
    }
  },

  head() {

    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {

      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },

      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },...i18nHead.link],
      title: `Buscando por: ${this.search}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Blog - Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta."
        },
        { hid: "robots", name: "robots", content: "index, follow" },
        ...i18nHead.meta
      ],
    }
  },

  created() {
    this.executeData()
  },

  methods: {
    async executeData(){

      await this.$axios.post('/article/search', { query: this.search, lang: this.language }).then((result) => {

        if (result != undefined) {
          this.data = result['data']['data']
          this.error = undefined
        } else {
          switch (this.language) {
            case "br":
              this.error = "O artigo " + "'" + this.search + "'" + " não pôde ser encontrado!"
              break;
            case "en":
              this.error = "The article " + "'" + this.search + "'" + " could not be found."
              break;
            case "es":
              this.error = "No se pudo encontrar el artículo " + "'" + this.search + "'"
              break;
            default:
              this.error = "O artigo " + "'" + this.search + "'" + " não pôde ser encontrado!"
              break;
          }
        }

      }).catch(() => {

        switch (this.language) {
          case "br":
            this.error = "O artigo " + "'" + this.search + "'" + " não pôde ser encontrado!"
            break;
          case "en":
            this.error = "The article " + "'" + this.search + "'" + " could not be found."
            break;
          case "es":
            this.error = "No se pudo encontrar el artículo " + "'" + this.search + "'"
            break;
          default:
            this.error = "O artigo " + "'" + this.search + "'" + " não pôde ser encontrado!"
            break;
        }

        this.data = undefined
      })

    }
  }
}
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif ;
}
.miniArticle{
  padding:.875rem;
}

.miniArticle__title{
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 700;
  line-height: 0.9375rem;
  letter-spacing: 0.025rem;
  color: #A28A7F;
  padding-bottom: 1.875rem;
  border-bottom: 0.125rem double #42494F;
  position: relative;

}
.miniArticle__title::after {
  content: "";
  position: absolute;
  bottom: -0.9375rem;
  left: 0px;
  width: 100%;
  height: 0.125rem;
  background-color: #42494F;
}
.miniArticle__title > span {
  color: rgba(0, 0, 0, 0.4);
}
.miniArticle__article-box{
  background-color: #fafafa;;
  display: grid;
  gap: 0 0.3125rem;
  grid-template-areas:
  "img title button"
  "img title button"
  "img title button"
  ;
  min-width: 300px;
  grid-template-columns: 1fr 3fr 1fr;
  border-radius: .5rem 0 0 .5rem ;

  box-shadow: 0px 2px 4px 0px #00000024;

  box-shadow: 0px 3px 4px 0px #0000001F;

  box-shadow: 0px 1px 5px 0px #00000033;

}
.miniArticle__subtitle{
  font-family: Telegraf-Regular ;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 0.9375rem;
  margin: 1.5rem 0 1.5rem 0 !important;
  letter-spacing: 0.025rem;

  color: #A28A7F;
  grid-area: info;

}
.miniArticle__img{
  grid-area: img;
  border-radius: .5rem 0 0 .5rem ;
  max-width: 100%;
  object-fit: contain;
  background-color: #404042;
  display: grid;
  margin: 0;

}
.object-fit{
  object-fit: contain !important;

}
.miniArticle__articleInfos{
  grid-area: title;
  padding: 0.625rem;
}
.miniArticle__author{
  font-family: Telegraf-Regular ;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
  letter-spacing: 0rem;
  color: #000000DE;


}
.miniArticle__description{
  font-family: Telegraf-Regular;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: 0.0156rem;
  color: #00000099;

}
.miniArticle__button{
  grid-area: button;
  font-family: Telegraf-Regular ;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0px;
  text-align: center;
  color: #42494F;
  max-height: 50px;

  border:1px solid #42494F
  ;
  border-radius: .2rem;
  display: grid;
  margin: 0.625rem;
  padding: 0.3125rem;
  text-decoration: none;
  transition: .4s ease ;
  align-items: center;
}
.miniArticle__button:hover, .miniArticle__button--gray:hover{
  border: 1px solid rgba(0,0,0, .9);
}
.miniArticle__button--gray {
  display: grid;
  background: #E5E5E5;
  border-radius: 0.5rem;
  font-family: Telegraf-Regular ;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0px;
  text-align: center;
  padding: 10px;
  max-width: 200px;
  margin: 15px auto;
  color: #000000DE;
  text-decoration: none;
  border:1px solid #E5e5e5;
  transition: .4s ease ;

}

</style>
