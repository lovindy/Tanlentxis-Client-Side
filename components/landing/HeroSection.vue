<!-- components/landing/HeroSection.vue -->
<template>
  <section id="hero" class="relative overflow-hidden bg-white py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1
            class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            {{ title }}
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ description }}
          </p>
          <div class="flex space-x-4">
            <NuxtLink
              :to="primaryButtonLink"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 ease-in-out"
            >
              {{ primaryButtonText }}
            </NuxtLink>
            <NuxtLink
              :to="secondaryButtonLink"
              class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out"
            >
              {{ secondaryButtonText }}
            </NuxtLink>
          </div>
        </div>
        <div class="relative">
          <div
            class="absolute -inset-2 bg-green-100/50 rounded-xl blur-xl opacity-75"
          ></div>
          <img
            :src="heroImage"
            :alt="imageAlt"
            class="relative z-10 rounded-xl shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Streamline Your Employee Management",
  },
  description: {
    type: String,
    default:
      "Empower your HR processes with our intelligent employee management system. Track, analyze, and optimize your workforce effortlessly.",
  },
  primaryButtonText: {
    type: String,
    default: "Get Started",
  },
  primaryButtonLink: {
    type: String,
    default: "/admin/dashboard",
  },
  secondaryButtonText: {
    type: String,
    default: "Request Demo",
  },
  secondaryButtonLink: {
    type: String,
    default: "/demo",
  },
  heroImage: {
    type: String,
    default: "../../assets/images/hero.png",
  },
  imageAlt: {
    type: String,
    default: "Employee Management Dashboard",
  },
});
</script>
