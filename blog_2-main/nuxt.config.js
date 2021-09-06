
export default {

  head: {

    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "keywords", name: "keywords", content: "dermatologista, clínica dermatológica, unhas, diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas, cabelos, consulta com dermatologista, dermatologista no Rio de Janeiro" },
      { hid: "robots", name: "robots", content: "index, follow" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // './generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
      ['nuxt-leaflet', { /* module options */ }],


    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: 'br',
            iso: 'pt-BR',
            name: 'Português'
          },
          {
            code: 'en',
            iso: 'en-US',
            name: 'Inglês'
          },
          {
            code: 'es',
            iso: 'es',
            name: 'Espanhol'
          }
        ],

        baseUrl: 'https://miguelceccarelli.com',
        defaultLocale: 'br',

        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },

        vueI18n: {
          fallbackLocale: 'br',

          messages: {
            br: {
              about: 'Sobre',
              blog: 'Blog',
              contact: 'Contato',
              lanHTitle1: 'Dr. Miguel Ceccarelli',
              dermatologist: 'Dermatologista',
              lanHTitle2: 'no Rio de Janeiro',
              headerText: 'Cuidar das unhas e pele é cuidar de si mesmo, agende uma consulta e vamos resgatar o que há de melhor em você.',
              headerButton: 'Agendar',
              aboutMe: 'Sobre mim',
              lanAboutText:  'Olá, sou dermatologista (CRMRJ 52-0109245-6 / RQE 34414) e estou especializado em doenças das unhas e procedimentos de estética. Atendo presencialmente pacientes no meu consultório no Rio de Janeiro, e por telemedicina na Brasil e fora do país (atendo em português, espanhol e inglês).',
              lanAboutLink: 'Saber mais →'
            },

            en: {
              about: 'About',
              blog: 'Blog',
              contact: 'Contact',
              lanHTitle1: 'Dr. Miguel Ceccarelli',
              dermatologist: 'Dermatologist',
              lanHTitle2: 'in Rio de Janeiro',
              headerText: 'Taking care of your skin and nails, because if there was ever a time to be kind to yourself, it is now. Allow me to be your guide to the clear and healthy skin and nails you have always wanted.',
              headerButton: 'Schedule',
              aboutMe: 'About me',
              lanAboutText: 'Hello, I am a board-certified dermatologist by the Brazilian Society of Dermatology (CRMRJ 52-0109245-6 / RQE 34414) specialized in skin, hair, and nail diseases, as well as cosmetic procedures. My medical and aesthetics practice is located in Rio de Janeiro. I am passionate about giving an appropriately qualified experience. I can communicate effectively in English, Spanish and Portuguese.',
              lanAboutLink: 'to know more →'



            },
            es: {
              about: 'Sobre',
              blog: 'Blog',
              contact: 'Contacto',
              lanHTitle1: 'Dr. Miguel Ceccarelli',
              dermatologist: 'Dermatólogo',
              lanHTitle2: 'en Rio de Janeiro',
              headerText: 'Cuidamos de tu piel, uñas y cabellos. Permítame ser su guía para una piel saludable y feliz.',
              headerButton: 'Programar',
              aboutMe: 'Sobre mí',
              lanAboutText: 'Hola, soy un dermatólogo certificado por la Sociedad Brasileña de Dermatología (CRMRJ 52-0109245-6 / RQE 34414) y estoy especializado en enfermedades de la piel, uñas y cabello, así como procedimientos cosméticos. Atiendo pacientes en mi consultorio en Rio de Janeiro, y por telemedicina en Brasil y en el exterior (atiendo en portugués, español e inglés).',
              lanAboutLink: 'saber mas →'


            }
          }
        }
      }
    ]
  ],
  plugins: [{ src: '~plugins/leaflet.js', ssr: false }],

  sitemap: {
    hostname: 'https://www.miguelceccarelli.com',
    path: '/sitemap.xml',
    routes: [
      '/', '/blog', '/privacy'
    ],
    sitemaps: [
      {
        path: '/sitemap1.xml'
      },
      { /* Categorias */
        path: '/categorias.xml',
        exclude: [],
        routes: async () => {
          let result = await axios.post('https://miguelblog-api.glitch.me/api/v2/category/all')
          return result.data.data.map(v => `/blog/category/${v.id}`)
        }
      },
      { /* SubCategorias */
        path: '/subcategorias.xml',
        exclude: [],
        routes: async () => {
          let result = await axios.post('https://miguelblog-api.glitch.me/api/v2/subcategory/all')
          return result.data.data.map(v => `/blog/subcategory/${v.id}`)
        }
      },
      { /* Artigos */
        path: '/artigos.xml',
        exclude: [],
        routes: async () => {
          let result = await axios.post('https://miguelblog-api.glitch.me/api/v2/article/all')
          return result.data.data.map(v => `/blog/article/${v.id}`)
        }
      },
    ],

    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://miguelblog-api.glitch.me/api/v2/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty',
        }
      }
    }
  },

  target: 'server',

  generate: {
    crawler: false // default - true
  }
};
