<template>
  <section class="Blog article">
    <article class="blog__article">

      <div v-if="language == 'br' || language == undefined">

        <h2 class="blog__title">{{$t('BlogHighlighted')}} {{ title }}</h2>
        <img class="blog__img" :src="image" :alt="title">

        <p class="blog__text">{{ short }}</p>

        <div id="container" class="article__container" v-html="body">

        </div>

      </div>
      <div v-else-if="language == 'en'">

        <h2 class="blog__title">{{$t('BlogHighlighted')}} {{ titleEn }}</h2>
        <img class="blog__img" :src="image" :alt="titleEn">

        <p class="blog__text">{{ shortEn }}</p>

        <div id="container" class="article__container" v-html="bodyEn">

        </div>

      </div>
      <div v-else>

        <h2 class="blog__title">{{$t('BlogHighlighted')}} {{ titleEs }}</h2>
        <img class="blog__img" :src="image" :alt="titleEs">

        <p class="blog__text">{{ shortEs }}</p>

        <div id="container" class="article__container" v-html="bodyEs">

        </div>

      </div>

      <a type="button" v-bind:href="socialmedias.whatsapp" class="btn btn-outline-success mr-2">Whatsapp</a>
      <a type="button" target="blank" v-bind:href="socialmedias.facebook" class="btn btn-outline-primary mr-2">Facebook</a>
      <a type="button" target="blank" v-bind:href="socialmedias.twitter" class="btn btn-outline-secondary mr-2">Twitter</a>
      <button class="btn btn-outline-warning mr-2" @click="copyToClipBoard">{{$t('CopyLink')}}</button>

    </article>
  </section>
</template>

<script>

export default {
  data(){
    return {
      articleSlug: this.$route.params.slug,
      language: this.$nuxt.$i18n.locale,
      short: undefined,
      shortEn: undefined,
      shortEs: undefined,
      image: undefined,
      slug: undefined,
      tags: undefined,
      body: undefined,
      bodyEn: undefined,
      bodyEs: undefined,
      data: undefined,
      title: undefined,
      titleEn: undefined,
      titleEs: undefined,
      socialmedias: {
        facebook: `http://www.facebook.com/sharer.php?u=https://miguelceccarelli.com${this.$route.path}`,
        twitter: `http://twitter.com/intent/tweet/?url=https://miguelceccarelli.com${this.$route.path}`,
        link: `https://miguelceccarelli.com${this.$route.fullPath}`,
        whatsapp: undefined
      }
    }
  },

  created(){
    this.executeData()
  },

  head() {

    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {

      title: this.title,
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.short,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.tags,
        },
        { hid: "robots", name: "robots", content: "index, follow" },
      ],
    }
  },

  methods: {
    async executeData(){

      await this.$axios.post('/article/slug', { slug: this.articleSlug }).then((data) => {

        if (!data['data']['data']['status']) {
          this.error = data['data']['data']['message']
        }

        this.title = data['data']['data']['title']
        this.titleEn = data['data']['data']['titleEn']
        this.titleEs = data['data']['data']['titleEs']
        this.body = data['data']['data']['body']
        this.bodyEn = data['data']['data']['bodyEn']
        this.bodyEs = data['data']['data']['bodyEs']
        this.short = data['data']['data']['short']
        this.image = data['data']['data']['image']
        this.slug = data['data']['data']['slug']
        this.tags = data['data']['data']['tags']
        this.tags = data['data']['data']['tags']

        this.socialmedias.whatsapp = `whatsapp://send?text=*Dermatologista Dr. Miguel Ceccarelli*%0a%0a
        ${data['data']['data']['short']}%0a%0aVeja este meu artigo sobre *${data['data']['data']['title']}* clicando no link abaixo. Não se esqueça de ver meus outros artigos, você vai se interessar!%0a%0a*Acesse:* https://miguelceccarelli.com${this.$route.fullPath}
        `

      })

    },

    copyToClipBoard(){
      navigator.clipboard.writeText(this.socialmedias.link)
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
#container.article__container  h2  span{
  font-size: 37px !important;
  font-style: normal;
  font-weight: 400;

}

</style>
