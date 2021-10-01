<template>
  <header class="header">
    <div class="header__content">
      <ul class="header__item">
        <!-- <li class="header__list">
          <a href="#about" class="header__link">{{ $t('about') }}</a>
        </li>
        <li class="header__list">
          <a href="#blog" class="header__link">{{$t('blog')}}</a>
        </li>
        <li class="header__list">
          <a href="#appointment" class="header__link">{{ $t('contact') }}</a>
        </li>
        <li class="header__list"> -->
          <p class="header__translate"><nuxt-link class="header__link--translate"
  v-for="locale in availableLocales"
  :key="locale.code"
  :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link></p>

      

      </ul>
      <NuxtLink :to="localePath('/blog')">
      <img
        src="~/assets/icon.svg"
        class="header__img"
        alt="ícone dermatologista, Miguel ceccarelli"
      />
      </NuxtLink>
      <div class="header__infos">
        <h1 class="header__title"><br> {{$t('lanHTitle1')}}</h1>
        <h1 class="header__title">{{$t('dermatologist')}}</h1>
        <h2 class="header__subtitle">{{$t('lanHTitle2')}}</h2>
        <p class="header__text" >
          {{$t('headerText')}}
        </p>
        <a
          title="agendar consulta com Dr. Miguel Ceccarelli"
          href="#appointment"
          class="header__button"
          >{{ $t('headerButton')}}</a>
      </div>
    </div>
    <div class="header__illustration">
      <ul class="header__item--illustration">
        <li class="header__list">
          <a
            target="_blank"
            href="https://mobile.twitter.com/migueldermato"
            class="header__link--img"
            ><img
              src="~/assets/twitter-icon.svg"
              alt="Twitter do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
         <li class="header__list">
          <a target="_blank" href="https://www.instagram.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/instagram-icon.svg"
              alt="Instagram do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
          <li class="header__list">
          <a target="_blank" href="https://m.facebook.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/facebook-icon.svg"
              alt="Facebook do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
        <li class="header__list">
          <a target="_blank" href="https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ" class="header__link--img"
            ><img
              src="~/assets/youtube-icon.svg"
              alt="Youtube do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
         <li class="header__list">
          <a target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" class="header__link--img"
            ><img
              src="~/assets/whatsapp-icon.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
      </ul>
      <img
        src="~/assets/circle.svg"
        class="header__img-illustration"
        alt="ilustação Dermatologista"
      />
    </div>
  </header>
</template>

<script>

export default {
  component: true,
      head() {
      return {

        link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' }],
    script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }],

          }
    },
  computed: {
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
}
}

</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif ;
}
.header {
  background: #404041;
  color: #fde6dc;
  display: grid;
}

.header__item {
  list-style: none;
  display: flex;
  padding: 1.25rem;
  grid-area: nav;
  align-items: center;
}
.header__list + .header__list {
  margin-left: 10px;
}
.header__link {
  font-family: Telegraf-Regular  ;
  text-decoration: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  color: #fde6dc;
  transition: 0.4s ease-in-out;
}
.header__link:hover {
  color: #e9cdc1;
}
.header__img {
  align-self: flex-end;
  justify-self: center;
  grid-area: img;
  position: absolute;
  top: 0px;
  right: 40px;
}
.header__infos {
  grid-area: text;
  display: grid;
  align-self: center;
  margin: auto;
  max-width: 400px;
  padding: 0.9375rem;
}
.header__title {
  font-family: Telegraf-Regular  ;
  font-size: 2.4rem ;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  line-height: 4rem;
  letter-spacing: 0em;
  text-align: center;
  min-width: 200px;
}
.header__subtitle{
  font-family: Telegraf-Regular  ;

  margin: 0;

    font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 4rem;
  letter-spacing: 0em;
  text-align: center;
min-width: 200px;
}
.header__text {
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: center;
  padding: 0.3125rem 0rem;
}
.header__button {
  font-family: Telegraf-Regular  ;
  text-decoration: none;
  background: #fde6dc;
  border-radius: 0.5rem;
  width: 120px;
  padding: 0.625rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  transition: 0.4s ease-in-out;
  margin: 0.625rem auto;
}
.header__button:hover {
  background: #e9cdc1;
}
.header__illustration {
  grid-area: illustration;
  display: none;
  justify-content: end;
}
.header__img-illustration {
  max-width: 100%;
  grid-column: 1;
  grid-row: 1/1;
}
.header__item--illustration {
  list-style: none;
  display: flex;
  padding: 0.9375rem;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  grid-column: 1;
  grid-row: 1/1;
  justify-content: center;
}
.header__list,
.header__link--img {
  color: #fff;
  z-index: 20000;
  display: block;
}
.header__link--img:hover {
  opacity: 0.6;
}
.header__translate{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 10px;
    font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
}
.header__link--translate{
  font-family: Telegraf-Regular  ;
  text-decoration: none;
  font-size: 1.125rem;
  color: #fde6dc;
  transition: 0.4s ease-in-out;
}
.header__link--translate:hover {
  color: #e9cdc1;
}
@media (max-width:500px) {
  .header__img{
    display: none;
  }
  .header__translate{
    margin: 10px auto;
  }
}
@media (min-width: 768px) {
  .header {
    background: #404041;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: "content illustration";
    color: #fde6dc;
    padding-bottom: 1.25rem;
  }
  .header__content {
    grid-area: content;
    display: grid;
    grid-template-rows: 3.125rem 1fr;
    grid-template-columns: 1fr minmax(50px, 200px);
    grid-template-areas:
      "nav img"
      "text .";
  }
  .header__title {
    font-size: 3.5rem;
    text-align: initial;
  }
  .header__subtitle {
    font-size: 2rem;
    text-align: initial  ;
  }
  .header__text {
    font-size: 1.125rem;
    text-align: initial;
  }
  .header__button {
    margin: 10px 0;
  }
  .header__illustration {
    display: grid;
    grid-area: illustration;
    grid-row: 1/1;
  }
  .header__img {
    position: initial;

  }
}
@media (min-width: 1024px) {
  .header {
    grid-template-rows: 700px;
    padding-bottom: 0;
  }
  .header__text {
    padding: 0.625rem 0rem;
  }
  .header__button {
    margin: 0.625rem 0rem;
  }
}
@media (min-width: 1300px) {
  .header__item {
    justify-content: center;
    margin-left: -320px;
  }
}
</style>
