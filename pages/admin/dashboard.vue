<!-- pages/admin/dashboard.vue -->
<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <div class="text-sm text-gray-500">Last updated: Just now</div>
    </div>

    <!-- User ID -->
    <div class="text-black">
      <p v-if="hydrated && user">User ID: {{ user.id }}</p>
      <p v-else-if="!hydrated">Loading...</p>
      <p v-else>Error loading user data</p>
    </div>

    <!-- Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="bg-white p-6 rounded-lg shadow"
      >
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-gray-500">{{ metric.title }}</p>
            <p class="text-2xl font-bold mt-1">{{ metric.value }}</p>
          </div>
          <div
            :class="`p-2 rounded-full ${
              metric.increasing ? 'bg-green-100' : 'bg-red-100'
            }`"
          >
            <component :is="metric.icon" class="w-5 h-5" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <component
            :is="
              metric.increasing ? 'LucideArrowUpRight' : 'LucideArrowDownRight'
            "
            :class="`w-4 h-4 ${
              metric.increasing ? 'text-green-500' : 'text-red-500'
            }`"
          />
          <span
            :class="`ml-1 text-sm ${
              metric.increasing ? 'text-green-500' : 'text-red-500'
            }`"
          >
            {{ metric.change }}
          </span>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div
          v-for="activity in recentActivity"
          :key="activity.id"
          class="flex items-center justify-between border-b pb-4 last:border-0"
        >
          <div>
            <p class="font-medium">{{ activity.action }}</p>
            <p class="text-sm text-gray-500">{{ activity.organization }}</p>
          </div>
          <span class="text-sm text-gray-500">{{ activity.timestamp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/composables/useAuth";
import {
  LucideUser,
  LucideBuilding,
  LucideArrowUpRight,
  LucideArrowDownRight,
} from "lucide-vue-next";

// Static metrics data
const metrics = ref([
  {
    title: "Total Users",
    value: "1,234",
    change: "+12.3%",
    increasing: true,
    icon: LucideUser,
  },
  {
    title: "Active Organizations",
    value: "56",
    change: "+5.2%",
    increasing: true,
    icon: LucideBuilding,
  },
]);

// Static activity data
const recentActivity = ref([
  {
    id: 1,
    action: "New organization joined",
    organization: "Tech Corp Inc.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    action: "User profile updated",
    organization: "Digital Solutions Ltd",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    action: "New user registered",
    organization: "Innovate Co",
    timestamp: "1 day ago",
  },
]);

// State to track hydration
const hydrated = ref(false);

// Access user data and authentication functions
const { user, checkAuth } = useAuthStore();

// Set page layout metadata
definePageMeta({
  layout: "dashboard",
});

// Ensure authentication check runs after component mounts
onMounted(async () => {
  await checkAuth();
  hydrated.value = true;
});
</script>
