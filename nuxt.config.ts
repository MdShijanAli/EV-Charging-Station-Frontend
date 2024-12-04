// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  head: {
    script: [
      { src: '/assets/js/config.js', type: 'text/javascript', defer: true }
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  css: [
    '~/assets/scss/app.scss',
    '~/assets/scss/config/_theme-config.scss',
    '~/assets/css/app.min.css',
    '~/assets/css/icons.min.css',
    '~/assets/js/config.js',
    'simplebar/dist/simplebar.min.css',
  ]
})