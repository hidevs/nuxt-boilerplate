require("dotenv").config()
import colors from "vuetify/es5/util/colors"

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.APP_NAME,
    titleTemplate: "%s | " + process.env.APP_TAB_PREFIX,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "NuxtJs Boilerplate by JalalLinuX" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/assets/fonts/vazir.css" },
      { rel: "stylesheet", href: "/assets/fonts/fontawesome.css" },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/customize.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/mixins/validation.js",
    "~/plugins/mixins/helpers.js",
    "~/plugins/axios.js",
    { src: "~/plugins/plyr.js", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    // https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // https://github.com/nuxt-community/laravel-echo
    "@nuxtjs/laravel-echo",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://auth.nuxtjs.org/
    "@nuxtjs/auth-next",
    // https://gitlab.com/sweetgum/nuxt-izitoast
    "nuxt-izitoast",
  ],

  publicRuntimeConfig: {
    apiHost: process.env.API_HOST_URL,
  },

  router: {
    // middleware: ["auth", "clearValidationErrors"]
    middleware: ["clearValidationErrors"]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_HOST_URL + "/api",
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    rtl: true,
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.teal.accent4,
          secondary: colors.pink.darken1,
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent3,
          success: colors.green.accent3
        }
      }
    }
  },

  auth: {
    resetOnError: true,
    defaultStrategy: "laravelJWT",
    scopeKey: "rules",
    vuex: {
      namespace: "auth", // Vuex store namespace for keeping state.
    },
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url: process.env.API_HOST_URL + "/api",
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          refresh: { url: "/auth/refresh", method: "get" },
          logout: { url: "/auth/logout", method: "get" },
          user: { url: "/auth/me", method: "get" }
        },
        token: {
          property: "token",
        },
        user: {
          property: "user",
        },
      },
    },
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/"
    },
  },

  izitoast: {
    position: "topCenter",
    transitionIn: "bounceInDown",
    transitionOut: "fadeOutUp",
    rtl: true,
    theme: "light",
  },

  echo: {
    authModule: true,
    connectOnLogin: true,
    disconnectOnLogout: true,
    broadcaster: process.env.BROADCAST_DRIVER,
    key: process.env.PUSHER_APP_KEY,
    cluster: process.env.PUSHER_APP_CLUSTER,
    authEndpoint: process.env.API_HOST_URL + "/api/broadcasting/auth",
    forceTLS: true,
  },

  pwa: {
    manifest: {
      name: process.env.PWA_NAME,
      short_name: process.env.PWA_SHORT_NAME,
      lang: process.env.PWA_LANG,
      description: process.env.PWA_DESCRIPTION,
      theme_color: process.env.PWA_THEME_COLOR,
      background_color: process.env.PWA_BACKGROUND_COLOR,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
