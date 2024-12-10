export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  compatibilityDate: "2024-12-02",
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:8080/api/v1",
    },
  },
  devtools: { enabled: true },
  experimental: {
    typedPages: true,
  },
  // App Configuration
  app: {
    // Configure app head metadata
    head: {
      title: "Talentexis",
      titleTemplate: "%s - Talentexis",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Talentexis" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Add any external fonts here
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  // CSS Configuration
  css: [
    // Global CSS files
    "@/assets/css/main.css",
    "@/assets/css/smooth-scroll.css",
  ],

  // Build Configuration
  build: {
    transpile: ["vue-toastification", "@studio-freight/lenis"],
  },

  components: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "LoadingScreen",
    },
  },
});
