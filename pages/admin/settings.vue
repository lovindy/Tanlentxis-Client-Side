<!-- pages/admin/settings.vue -->
<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Settings</h1>
      <button
        @click="handleSave"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
      >
        <LucideSave class="w-4 h-4 mr-2" />
        Save Changes
      </button>
    </div>

    <!-- Settings Sections -->
    <div class="grid grid-cols-1 gap-6">
      <!-- Notification Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center mb-4">
          <LucideBell class="w-5 h-5 text-gray-400 mr-2" />
          <h2 class="text-lg font-semibold">Notification Preferences</h2>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <label class="font-medium">Email Notifications</label>
              <p class="text-sm text-gray-500">
                Receive email updates about your account
              </p>
            </div>
            <input
              v-model="settings.notifications.email"
              type="checkbox"
              class="rounded text-blue-500 focus:ring-blue-500"
            />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <label class="font-medium">Push Notifications</label>
              <p class="text-sm text-gray-500">
                Receive push notifications on your device
              </p>
            </div>
            <input
              v-model="settings.notifications.push"
              type="checkbox"
              class="rounded text-blue-500 focus:ring-blue-500"
            />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <label class="font-medium">Weekly Reports</label>
              <p class="text-sm text-gray-500">
                Receive weekly summary reports
              </p>
            </div>
            <input
              v-model="settings.notifications.weekly_reports"
              type="checkbox"
              class="rounded text-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center mb-4">
          <LucideShield class="w-5 h-5 text-gray-400 mr-2" />
          <h2 class="text-lg font-semibold">Security Settings</h2>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <label class="font-medium">Two-Factor Authentication</label>
              <p class="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <input
              v-model="settings.security.two_factor"
              type="checkbox"
              class="rounded text-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="font-medium block mb-2"
              >Session Timeout (minutes)</label
            >
            <select
              v-model="settings.security.session_timeout"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
            </select>
          </div>
          <div>
            <label class="font-medium block mb-2">Password Expiry (days)</label>
            <select
              v-model="settings.security.password_expiry"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LucideSave, LucideBell, LucideShield } from "lucide-vue-next";

// Static settings data
const settings = ref({
  notifications: {
    email: true,
    push: false,
    weekly_reports: true,
  },
  security: {
    two_factor: false,
    session_timeout: "30",
    password_expiry: "90",
  },
});

// Handle save settings
const handleSave = () => {
  // TODO: Implement API call
  console.log("Settings saved:", settings.value);
};

// Layout configuration
definePageMeta({
  layout: "dashboard",
});
</script>
