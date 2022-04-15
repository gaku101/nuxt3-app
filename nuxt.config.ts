import { defineNuxtConfig } from "nuxt3"
const { BASE_URL, API_KEY } = process.env

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
})
