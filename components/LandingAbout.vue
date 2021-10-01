<template>
  <section class="about" id="about">
    <div class="about__content">
      <img
        src="~/assets/miguel.png"
        class="about__img"
        alt="Dermatologista - Miguel Ceccarelli"
      />
      <div class="about__text-container">
        <h2 class="about__title">{{ $t("aboutMe") }}</h2>
        <p class="about__text">
          {{ $t("lanAboutText") }}
        </p>
        <NuxtLink
          :to="localePath({ name: 'blog-category-id', params: { id: 1 } })"
          class="about__link"
          >{{ $t("lanAboutLink") }}</NuxtLink
        >
      </div>
    </div>
    <div class="about__personal-data">
     

      <ul class="about__data">
        <li class="about__soci">
          <img class="about__img__s" src="../assets/sbd2.png" alt="" srcset="" />
          <p class="about__text--soci">
                        {{ $t("Sbd") }}

          </p>
        </li>
        <li class="about__soci">
           <img class="about__img__s" src="../assets/ens.jpeg" alt="" srcset="" />
          <p class="about__text--soci">
                        {{ $t("Ens") }}

          </p>

        </li>
        <li class="about__soci">
                  <img class="about__img__s" src="../assets/eadv.png" alt="" srcset="" />
          <p class="about__text--soci">
            {{ $t("Eadv") }}
          </p>

        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  component: true,
};
</script>

<style scoped>
* {
  font-family: Telegraf-Regular, sans-serif;
}
.about__content {
  background: #7a695f;
  display: grid;
}
.about__text-container {
  max-width: 600px;
  padding: 0 10px;
  color: #fde6dc;
  margin: 0 auto;
}
.about__img {
  display: grid;
  margin: 0 auto;
  width: 100%;
}
.about__title {
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 3.375rem;
  letter-spacing: 0em;
  margin: 15px 0;
  text-align: center;
}
.about__text {
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: center;
}

.about__link {
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0px;
  color: #fff;
  text-decoration: none;
  margin: 20px 0;
  transition: 0.4s ease-in-out;
  display: grid;
  justify-content: end;
}
.about__link:hover {
  text-decoration: underline;
}
.about__personal-data {
    background: #404041;

  color: #fde6dc;
  padding: 10px;
  /* border-top: solid #404041 3px;
  border-bottom: solid #404041 3px; */
  
}
.about__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.25rem;
  gap: 10px;
}
.about__data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  list-style: none;
  max-width: 90%;
  margin: 0 auto;

}
.about__data-title {
  font-size: 1.875rem;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  line-height: 4rem;
  letter-spacing: 0em;
}
.about__data-text {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: 0em;
}

.about__img__s {
  max-width: 100%;
}
.about__text--soci {
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: center;
}

@media (min-width: 768px) {
  .about__content {
    background: #7a695f;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .about__img {
    padding: 0 10px 0 20px;
    width: initial;
  }
  .about__text-container {
    max-width: 600px;
    color: #fde6dc;
  }
  .about__text,
  .about__title {
    text-align: initial;
  }

  .about__data-title {
    font-size: 2.5rem;
  }
}
@media (min-width: 900px) {
    .about__data {
    flex-direction: row;
    

  }
  .about__soci{
       height: 320px;
  display: grid; 
align-items: center;
  }
.about__img__s {
  display: grid;
  margin: 0 auto;
  align-self: flex-end;

}
.about__text--soci {
  align-self: flex-end;
}
}
</style>
