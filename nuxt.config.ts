// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export default {
      mail: {
        message: {
          to: 'hello@brandbadger.co.uk',
        },
        smtp: {
          host: "smtp.ionos.co.uk",
          port: 465,
          auth: {
            user: "hello@brandbadger.co.uk",
            pass: process.env.EMAIL_PASSWORD, // Use the environment variable
          },
          secure: true, // Use SSL/TLS for secure connection
        },
      },
    server: {
        host: '0.0.0.0' // This allows connections from any IP address
      },
    runtimeConfig: {
        public: {
          strapiBaseUrl: process.env.PUBLIC_STRAPI_BASE_URL,
        },
      },
    vite: {
        plugins: [
          require('vite-svg-loader')(),
        ],
      },
    layout: 'default',
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        // display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
        families: {
            Roboto: true,
            Inter: [300, 500, 700],
            Quicksand: [300, 500, 700],
        }
    },
    head: {
      title: 'Brand Badger | Web Development & Branding Solutions for UK Businesses',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Brand Badger specializes in bespoke web development and branding solutions tailored for startups, small to medium businesses, and tradespeople in North Tyneside and across the UK.' },
        { name: 'keywords', content: 'web development, branding, digital solutions, North Tyneside, UK businesses, startup support, tradespeople, bespoke design' },
        // Add more meta tags as needed
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Add other links as needed
      ],
      // Add script tags if needed
    },

    modules: ['@nuxtjs/tailwindcss','nuxt-mail'],
    styleResources: {
        scss: [
            '~assets/style/_transitions.scss',
            '~assets/style/main.scss'
        ]
    },
    css: [
        '~/assets/style/main.scss',
    ],

    tailwindcss: {
      cssPath: '~/assets/css/tailwind.css',
      // The `injectPosition` and additional options should be removed if not used correctly
      configPath: 'tailwind.config.js',
      viewer: true,
    },
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
    plugins: [
        '~/plugins/details.js', // This will run on both client and server by default
      ],
      
}
