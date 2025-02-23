import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Email configuration
  mail: {
    message: {
      to: 'hello@vitamanprime.co.uk',
    },
    smtp: {
      host: 'smtp.ionos.co.uk',
      port: 465,
      auth: {
        user: 'hello@vitamanprime.co.uk',
        pass: process.env.EMAIL_PASSWORD, // Use the environment variable
      },
      secure: true, // Use SSL/TLS for secure connection
    },
  },

  // Server configuration
  server: {
    host: '0.0.0.0' // This allows connections from any IP address
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.PUBLIC_STRAPI_BASE_URL,
      dataUrl: '/data/vitaman-page-data.json'
    },
  },

  // Vite configuration
  vite: {
    plugins: [
      svgLoader(),
    ],
  },

  // Layout configuration
  layout: 'default',

  // Build modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],

  // Google Fonts configuration
  googleFonts: {
    Roboto: true,
    Inter: [300, 500, 700],
    Quicksand: [300, 500, 700],
  },

  // Head configuration
  head: {
    title: 'Vitaman Prime | Premium Vitamin Injections for Health and Wellness',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vitaman Prime offers high-quality vitamin injections targeting specific health needs. Our services include gym-based sessions and home visits in Newcastle.' },
      { name: 'keywords', content: 'vitamin injections, health and wellness, Newcastle, gym sessions, home visits' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Modules
  modules: ['@nuxtjs/tailwindcss', 'nuxt-mail'],

  // Style resources configuration
  styleResources: {
    scss: [
      '~assets/style/_transitions.scss',
      '~assets/style/main.scss'
    ]
  },

  // CSS configuration
  css: [
    '~/assets/style/main.scss',
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    viewer: true,
  },

  // PostCSS configuration
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  // Plugins configuration
  plugins: [
    '~/plugins/details.js', // This will run on both client and server by default
  ],
}
