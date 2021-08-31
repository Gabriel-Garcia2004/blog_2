
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
              greeting: 'Olá mundo!'
            },

            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
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
