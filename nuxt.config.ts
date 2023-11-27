// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@components/*": "./components/*",
    "@assets/*": "./assets/*",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
