const env = require("dotenv").config();

export default {
  env: env.parsed,
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/scss/global/fonts.scss"
  ],

  styleResources: {
    scss: ['./assets/scss/global/colors.scss', './assets/scss/global/mixins.scss']
  },

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/bus",
    "~/plugins/swiper",
    "~/plugins/moment",
    "~/plugins/skeleton"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', "@nuxtjs/axios", "@nuxtjs/toast", "nuxt-webfontloader"],

  toast: {
    position: "top-center",
    duration: 5000
  },

  webfontloader: {
    google: {
      families: [
        "Montserrat:100,200,300,400,500,600,700,800,900",
        "Robot:100,300,400,500,700,900"
      ]
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    // cssSourceMap: process.env.NODE_ENV == 'production',
    // extractCSS: process.env.NODE_ENV == 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    }
  }
};
