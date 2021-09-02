<template>
  <section class="Blog article">
    <article class="blog__article">
      <input type="hidden" name="articleTitle" :value="slug" ref="articleTitle" id="articleTitle" />

      <div v-if="language == 'br' || language == undefined">

        <h2 class="blog__title">Principais / {{ title }}</h2>
        <img class="blog__img" :src="image" :alt="title">
        <p class="blog__text">{{ short }}</p>


        <NuxtLink
        class="blog__button"
        :to="localePath({name: 'blog-article-slug', params: {slug: slug}})"
        >
        Ler Mais
      </NuxtLink>

    </div>

    <div v-if="language == 'en'">

      <h2 class="blog__title">Principais / {{ titleEn }}</h2>
      <img class="blog__img" :src="image" :alt="titleEn">
      <p class="blog__text">{{ shortEn }}</p>


      <NuxtLink
      class="blog__button"
      :to="localePath({name: 'blog-article-slug', params: {slug: slug}})"
      >
      Ler Mais
    </NuxtLink>

  </div>

  <div v-else>

    <h2 class="blog__title">Principais / {{ titleEs }}</h2>
    <img class="blog__img" :src="image" :alt="titleEs">
    <p class="blog__text">{{ shortEs }}</p>


    <NuxtLink
    class="blog__button"
    :to="localePath({name: 'blog-article-slug', params: {slug: slug}})"
    >
    Ler Mais
  </NuxtLink>

</div>

<h3 class="miniArticle__title mb-2"> <span>{{date}}
</span>  Por Miguel Ceccarelli</h3>

</article>
</section>
</template>

<script>

import moment from 'moment'

export default {
  data(){
    return {
      subcategoryId: undefined,
      subcategoryName: undefined,
      category: undefined,
      title: undefined,
      short: undefined,
      titleEn: undefined,
      shortEn: undefined,
      titleEs: undefined,
      shortEs: undefined,
      image: undefined,
      slug: undefined,
      articleId: undefined,
      date: undefined,
      language: this.$nuxt.$i18n.locale,
      data: undefined
    }
  },

  created(){
    this.executeData()
  },

  methods: {
    async executeData(){

      await this.$axios.post('/article/new').then((data) => {

        if (!data['data']['data']['status']) {
          this.error = data['data']['data'][0]['message']
        }

        this.title = data['data']['data'][0]['title']
        this.titleEn = data['data']['data'][0]['titleEn']
        this.titleEs = data['data']['data'][0]['titleEs']
        this.short = data['data']['data'][0]['short']
        this.shortEn = data['data']['data'][0]['shortEn']
        this.shortEs = data['data']['data'][0]['shortEs']
        this.image = data['data']['data'][0]['image']
        this.date = moment(data['data']['data'][0]['createdAt']).format('DD/MM/YYYY')
        this.slug = data['data']['data'][0]['slug']
        this.articleId = data['data']['data'][0]['id']

      })
    }
  }
}
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.blog__article{
  padding: 2.125rem  1.25rem 0 1.25rem;
}
.blog__title{
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
  letter-spacing: 0.025rem;
  color: #A28A7F;
}
.blog__img{
  max-width: clamp(290px, 450px, 60%);
  display: grid;
  margin: auto;
}
.blog__text{
  color: #575757;
  font-family: Telegraf-Regular;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
  letter-spacing: 0px;
  padding: 1.25rem 0;
  text-align: center;

}
.blog__button{
  text-decoration: none;
  background: #7A695F;
  width: 100px;
  padding: 0.9375rem;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  display: grid;
  margin: auto;
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
</style>
