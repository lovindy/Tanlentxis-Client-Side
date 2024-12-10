<!-- layouts/dashboard.vue -->

<script setup>
import LoadingScreen from "~/components/common/LoadingScreen.vue";
import {
  LucideHome,
  LucideUsers,
  LucideSettings,
  LucideLogOut,
} from "lucide-vue-next";

const router = useRouter();
const { $pinia } = useNuxtApp();
const auth = useAuthStore($pinia);
const { add: addToast } = useToast();
const isLoading = ref(false);

const redirectToUnauthorized = () => {
  router.push("/unauthorized");
};

const handleLogout = async () => {
  if (isLoading.value) return;
  try {
    isLoading.value = true;
    await auth.logout();
    addToast({
      title: "Logged Out",
      description: "You have been successfully logged out",
      color: "green",
    });
    await router.push("/auth/login");
  } catch (error) {
    console.error("Logout error:", error);
    addToast({
      title: "Logout Failed",
      description:
        error instanceof Error
          ? error.message
          : "An error occurred during logout",
      color: "red",
    });
  } finally {
    isLoading.value = false;
  }
};

// Watch authentication state for changes
watch(
  () => auth.isAuthenticated,
  (isAuthenticated) => {
    if (!isAuthenticated && !auth.isLoading) {
      redirectToUnauthorized();
    }
  }
);
</script>

<template>
  <ClientOnly>
    <LoadingScreen v-if="isLoading" />
    <div v-else-if="auth.isAuthenticated" class="min-h-screen flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white p-4">
        <div class="mb-8">
          <h1 class="text-xl font-bold">Tanlentexis</h1>
        </div>
        <nav class="space-y-2">
          <!-- Dashboard -->
          <NuxtLink
            to="/admin/dashboard"
            class="flex items-center px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            <LucideHome class="w-5 h-5 mr-3" />
            Dashboard
          </NuxtLink>
          <!-- Organization -->
          <NuxtLink
            to="/admin/organization"
            class="flex items-center px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            <LucideUsers class="w-5 h-5 mr-3" />
            Organization
          </NuxtLink>
          <!-- Settings -->
          <NuxtLink
            to="/admin/settings"
            class="flex items-center px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            <LucideSettings class="w-5 h-5 mr-3" />
            Settings
          </NuxtLink>
          <!-- Logout -->
          <button
            @click="handleLogout"
            :disabled="isLoading"
            class="flex items-center w-full text-left px-4 py-2 rounded hover:bg-gray-700 mt-8 text-red-400 disabled:opacity-50"
          >
            <LucideLogOut class="w-5 h-5 mr-3" />
            {{ isLoading ? "Logging out..." : "Logout" }}
          </button>
        </nav>
      </aside>
      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-100">
        <NuxtPage />
      </main>
    </div>
    <!-- Redirect if unauthenticated -->
    <div v-else>
      <ClientOnly>{{ redirectToUnauthorized() }}</ClientOnly>
    </div>
  </ClientOnly>
</template>
