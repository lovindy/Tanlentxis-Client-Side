<template>
  <div class="bg-white min-h-screen antialiased">
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <HowItWorksSection />
    <FAQSection />
  </div>
</template>

<script setup>
import HeroSection from "~/components/landing/HeroSection.vue";
import FeaturesSection from "~/components/landing/FeaturesSection.vue";
import PricingSection from "~/components/landing/PricingSection.vue";
import HowItWorksSection from "~/components/landing/HowItWorksSection.vue";
import FAQSection from "~/components/landing/FAQSection.vue";

import Lenis from "@studio-freight/lenis";
import { onMounted, onUnmounted } from "vue";

// Initialize Lenis scrolling
const lenis = ref(null);

onMounted(() => {
  lenis.value = new Lenis({
    smooth: true,
    smoothTouch: true,
    duration: 0.5, // Slow down the scrolling duration
    easing: (t) => t * (1 - t), // Ease-out for natural deceleration
    gestureMultiplier: 1, // Adjust sensitivity to make scrolling consistent
  });

  // Start the animation loop
  function raf(time) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});

onUnmounted(() => {
  // Clean up Lenis instance on component unmount
  if (lenis.value) {
    lenis.value.destroy();
  }
});
</script>

<style>
html,
body {
  overscroll-behavior: none; /* Prevent snap-back behavior */
  scroll-behavior: smooth; /* Default smooth scrolling for fallback */
}
</style>
