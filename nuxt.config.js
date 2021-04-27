export default {
  server: {
    port: 8000,
    timing: false
  },
  head: {
    title: "모이자",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~layouts/global.css"],
  plugins: ["@/plugins/fontawesome.ts"],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {},
  serverMiddleware: ["~server/index.ts"],
  vuetify: {}
};
