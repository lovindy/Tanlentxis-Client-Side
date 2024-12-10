<!-- components/auth/LoadingScreen.vue -->
<template>
  <div
    class="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="flex flex-col items-center gap-6 p-8 rounded-lg">
      <!-- Loading Animation -->
      <div class="relative">
        <!-- Outer spinning circle -->
        <div
          class="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
        ></div>
        <!-- Inner pulsing circle -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- Loading Text -->
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-lg font-semibold text-gray-800">Loading</h3>
        <p class="text-sm text-gray-600">
          Please wait while we verify your session...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineComponent({
  name: "LoadingScreen",
});
</script>
