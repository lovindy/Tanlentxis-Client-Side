<!-- pages/unauthorized.vue -->
<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <div class="max-w-lg w-full mx-4">
      <!-- Error Card -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <!-- Top Color Bar -->
        <div class="h-2 bg-red-500"></div>

        <div class="p-8">
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="p-3 bg-red-100 rounded-full">
              <LucideLock class="w-12 h-12 text-red-500" />
            </div>
          </div>

          <!-- Content -->
          <h1
            class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2"
          >
            Access Denied
          </h1>

          <p class="text-gray-600 text-center mb-8">
            You don't have permission to access this page. Please contact your
            administrator if you believe this is an error.
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
              @click="handleContactSupport"
              color="red"
              variant="soft"
              icon="i-lucide-mail"
            >
              Contact Support
            </UButton>
          </div>
        </div>
      </div>

      <!-- Additional Help Text -->
      <p class="text-sm text-gray-500 text-center mt-6">
        Error Code: 403 | If you continue to experience issues, please email
        <a
          href="mailto:support@talentexis.com"
          class="text-red-600 hover:text-red-700"
        >
          support@talentexis.com
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { LucideLock } from "lucide-vue-next";

const { $pinia } = useNuxtApp();
const auth = useAuthStore($pinia);
const { add: addToast } = useToast();

const handleReturn = () => {
  navigateTo(auth.getDashboardRoute);
};

const handleContactSupport = () => {
  // Implement this to either:
  // 1. Open a support ticket modal
  // 2. Navigate to a contact form
  // 3. Open email client

  window.location.href =
    "mailto:support@talentexis.com?subject=Access%20Required%20-%20Unauthorized%20Access";

  addToast({
    title: "Support Email",
    description: "Opening your email client to contact support",
    color: "gray",
  });
};

// Set the layout to none to remove navigation and footer
definePageMeta({
  layout: false,
});
</script>
