<template>
  <section>
    <LandingNavbar />
    <LandingHeader/>
    <LandingAbout/>
    <LandingAppointment/>
    <LandingBlog/>
    <Footer/>
        <a class="button-fluter" target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" 
            ><img
              src="~/assets/whatsapp.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="fluter"
          /></a>
  </section> 
</template>
<style >
 @font-face {
   font-family: Telegraf-Regular;
   src: url(./assets/tipografia/Telegraf-Regular.otf);
 }
 *{
   padding: 0;
   margin: 0;
 }

 .button-floter, .fluter{
  display: block;
  position: fixed;
  top: 90%;
  right: 5%;
  z-index: 50000;
}
</style>
<script>
export default{

  head: {
    title: 'Miguel Ceccarelli | Médico dermatologista no Rio de Janeiro',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Dr. Miguel Ceccarelli, Médico dermatologista no Rio de Janeiro, especialista em tratamentos (unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas e cabelos). Agende sua consulta.",
        },
        {
          
          }
      ],
    },
          }
</script>

