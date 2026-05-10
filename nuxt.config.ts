// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
