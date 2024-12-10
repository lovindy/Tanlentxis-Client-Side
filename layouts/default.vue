<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "~/components/layouts/AppHeader.vue";
import AppFooter from "~/components/layouts/AppFooter.vue";
</script>
