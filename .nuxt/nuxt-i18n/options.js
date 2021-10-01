

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"br","messages":{"br":{"about":"Sobre","blog":"Blog","contact":"Contato","lanHTitle1":"Dr. Miguel Ceccarelli","dermatologist":"Dermatologista","lanHTitle2":"no Rio de Janeiro","headerText":"Cuidar das unhas e pele é cuidar de si mesmo, agende uma consulta e vamos resgatar o que há de melhor em você.","headerButton":"Agendar","aboutMe":"Sobre mim","lanAboutText":"Olá, sou dermatologista (CRMRJ 52-0109245-6 / RQE 34414) e estou especializado em doenças das unhas e procedimentos de estética. Atualmente trabalho como o preceptor do Ambulatório de Doenças das Unhas do serviço de Dermatologia do Hospital Universitário Pedro Ernesto - UERJ, e estou envolvido ativamente em pesquisa clínica e revisão de artigos científicos para revistas científicas internacionais. Atendo presencialmente pacientes no meu consultório no Rio de Janeiro, e por telemedicina no Brasil e fora do país (português, espanhol e inglês).","lanAboutLink":"Saber mais →","LanAppointmentTitle":"Dermatologista - Miguel Ceccarelli","LanAppointmentText":"Ciência dermatológica para o cuidado de suas unhas, pele e cabelo.","LanAppointmentTextAd":"Endereços:","LanAppointmentTell1":"Telefone: (21) 2527-2103","LanAppointmentTell2":"Telefone: (21) 3094-2453","LanAppointmentWhats1":"Whatsapp: (21) 99302-1903","LanAppointmentWhats2":"Whatsapp: (21) 99218-9718   ","LanBlogTitle":"Visite nosso blog","BlogHighlighted":"Em destaque /","CopyLink":"Copiar link","ReadMore":"Ler mais ➔","Main":"Principais /","HighlightOfTheDay":"Destaque do dia","UsefulLinks":"Links úteis","Schedules":"Agendamentos","PrivacyPolicy":"Política de privacidade","Eadv":"European Academy of Dermatology and Venereology","Ens":"European Nail Society","Sbd":"Sociedade Brasileira de Dermatologia "},"en":{"about":"About","blog":"Blog","contact":"Contact","lanHTitle1":"Dr. Miguel Ceccarelli","dermatologist":"Dermatologist","lanHTitle2":"in Rio de Janeiro","headerText":"Taking care of your skin and nails, because if there was ever a time to be kind to yourself, it is now. Allow me to be your guide to the clear and healthy skin and nails you have always wanted.","headerButton":"Schedule","aboutMe":"About me","lanAboutText":"Hello, I am a board-certified dermatologist by the Brazilian Society of Dermatology (CRMRJ 52-0109245-6 / RQE 34414) specialized in skin, hair, and nail diseases, as well as cosmetic procedures. My medical and aesthetics practice is located in Rio de Janeiro. I am passionate about giving an appropriately qualified experience. I can communicate effectively in English, Spanish and Portuguese.","lanAboutLink":"to know more →","LanAppointmentTitle":"Dermatologist - Miguel Ceccarelli","LanAppointmentText":"Dermatological science for the care of your nails, skin, and hair.","LanAppointmentTextAd":"Seeking a consultation in Rio de Janeiro:","LanAppointmentTell1":"Telephone: (21) 2527-2103","LanAppointmentTell2":"Telephone: (21) 3094-2453","LanAppointmentWhats1":"Whatsapp: (21) 99302-1903","LanAppointmentWhats2":"Whatsapp: (21) 99218-9718   ","LanBlogTitle":"Visit our blog","BlogHighlighted":"Highlighted /","CopyLink":"Copy link","ReadMore":"Read more ➔","Main":"Main /","HighlightOfTheDay":"Highlight of the day","UsefulLinks":"Useful links","Schedules":"Schedules","PrivacyPolicy":"Privacy Policy","Eadv":"European Academy of Dermatology and Venereology","Ens":"European Nail Society","Sbd":"Sociedade Brasileira de Dermatologia"},"es":{"about":"Sobre","blog":"Blog","contact":"Contacto","lanHTitle1":"Dr. Miguel Ceccarelli","dermatologist":"Dermatólogo","lanHTitle2":"en Rio de Janeiro","headerText":"Cuidamos de tu piel, uñas y cabellos. Permítame ser su guía para una piel saludable y feliz.","headerButton":"Agendar","aboutMe":"Sobre mí","lanAboutText":"Hola, soy un dermatólogo certificado por la Sociedad Brasileña de Dermatología (CRMRJ 52-0109245-6 / RQE 34414) y estoy especializado en enfermedades de la piel, uñas y cabello, así como procedimientos cosméticos. Atiendo pacientes en mi consultorio en Rio de Janeiro, y por telemedicina en Brasil y en el exterior (atiendo en portugués, español e inglés).","lanAboutLink":"saber mas →","LanAppointmentTitle":"Dermatólogo - Miguel Ceccarelli","LanAppointmentText":"Ciencia dermatológica para el cuidado de tus uñas, piel y cabello.","LanAppointmentTextAd":"Dirección y números de contacto:","LanAppointmentTell1":"Teléfono: (21) 2527-2103","LanAppointmentTell2":"Teléfono: (21) 3094-2453","LanAppointmentWhats1":"Whatsapp: (21) 99302-1903","LanAppointmentWhats2":"Whatsapp: (21) 99218-9718   ","LanBlogTitle":"Visita nuestro blog","BlogHighlighted":"Destacado /","CopyLink":"Copiar link","ReadMore":"Leer más ➔","Main":"Principal /","HighlightOfTheDay":"Lo más destacado del día","UsefulLinks":"Enlaces útiles","Schedules":"Horarios","PrivacyPolicy":"Política de privacidad","Societies":"Sociedades en las que participo","Eadv":"European Academy of Dermatology and Venereology.","Ens":"European Nail Society","Sbd":"Sociedade Brasileira de Dermatologia"}}},
  vueI18nLoader: false,
  locales: [{"code":"br","iso":"pt-BR","name":"Português"},{"code":"en","iso":"en-US","name":"Inglês"},{"code":"es","iso":"es","name":"Espanhol"}],
  defaultLocale: "br",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "https://miguelceccarelli.com",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"br","iso":"pt-BR","name":"Português"},{"code":"en","iso":"en-US","name":"Inglês"},{"code":"es","iso":"es","name":"Espanhol"}],
  localeCodes: ["br","en","es"],
}

export const localeMessages = {}
