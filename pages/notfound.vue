<!-- pages/notfound.vue -->
<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <div class="max-w-lg w-full mx-4">
      <!-- Error Card -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <!-- Top Color Bar -->
        <div class="h-2 bg-blue-500"></div>

        <div class="p-8">
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="p-3 bg-blue-100 rounded-full">
              <LucideSearch class="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <!-- Content -->
          <h1
            class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2"
          >
            Page Not Found
          </h1>

          <p class="text-gray-600 text-center mb-8">
            The page you are looking for doesn't exist or has been moved. Check
            the URL or try navigating back.
          </p>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              @click="handleReturn"
              color="gray"
              variant="solid"
              icon="i-lucide-arrow-left"
            >
              Return to Dashboard
            </UButton>

            <UButton
              @click="handleReport"
              color="blue"
              variant="soft"
              icon="i-lucide-flag"
            >
              Report Issue
            </UButton>
          </div>
        </div>
      </div>

      <!-- Additional Help Text -->
      <p class="text-sm text-gray-500 text-center mt-6">
        Error Code: 404 | If you believe this is a mistake, please
        <a
          href="mailto:support@talentexis.com"
          class="text-blue-600 hover:text-blue-700"
        >
          let us know
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { LucideSearch } from "lucide-vue-next";

const { $pinia } = useNuxtApp();
const auth = useAuthStore($pinia);
const { add: addToast } = useToast();

const handleReturn = () => {
  navigateTo(auth.getDashboardRoute);
};

const handleReport = () => {
  window.location.href =
    "mailto:support@talentexis.com?subject=404%20Error%20Report";

  addToast({
    title: "Report Issue",
    description: "Opening your email client to report the issue",
    color: "gray",
  });
};

// Set the layout to none to remove navigation and footer
definePageMeta({
  layout: false,
});
</script>
