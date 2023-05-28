// https://nuxt.com/docs/api/configuration/nuxt-config
import { RuntimeConfig } from 'nuxt/schema';
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head:{
            title: "Nuxt Hero",
            meta:[
                { name: "description", content: "I wanna to be the hero of Nuxt 3 JS." },
                { name: "Author", content: "Nazmulcs42"}
            ],
            link:[
                { rel: "stylesheet", href: "./assets/css/custom.css" }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})
