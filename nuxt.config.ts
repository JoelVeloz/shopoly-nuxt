// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@components": "./components",
    "@assets": "./assets",
  },
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt", 'nuxt-swiper'],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
