<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Organizations</h1>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
        @click="openCreateOrganizationModal"
      >
        <LucidePlus class="w-4 h-4 mr-2" />
        Add Organization
      </button>
    </div>

    <!-- Search and Table -->
    <div class="bg-white rounded-lg shadow">
      <!-- Search Input -->
      <div class="p-4 border-b">
        <div class="relative">
          <LucideSearch
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search organizations..."
            class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- Organizations Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Organization
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Owner
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Registration Number
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Created Date
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="org in filteredOrganizations" :key="org.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <LucideBuilding2 class="w-8 h-8 text-gray-400 mr-3" />
                  <div>
                    <div class="font-medium">{{ org.name }}</div>
                    <div class="text-sm text-gray-500">{{ org.address }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ org.owner.username }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ org.registrationNumber }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ formatDate(org.createdAt) }}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <div class="flex items-center space-x-2">
                  <button
                    @click="viewOrganizationDetails(org.id)"
                    class="text-blue-500 hover:text-blue-700"
                  >
                    <LucideEye class="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create Organization Modal -->
    <div
      v-if="showCreateModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-xl font-bold mb-4">Create New Organization</h2>
        <form @submit.prevent="submitCreateOrganization">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700"
              >Organization Name</label
            >
            <input
              v-model="newOrganization.name"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700"
              >Address</label
            >
            <input
              v-model="newOrganization.address"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700"
              >Registration Number</label
            >
            <input
              v-model="newOrganization.registrationNumber"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <div class="flex justify-end space-x-2">
            <button
              type="button"
              @click="closeCreateOrganizationModal"
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Organization Details Modal -->
    <div
      v-if="selectedOrganization"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-xl font-bold mb-4">Organization Details</h2>
        <div class="space-y-2">
          <p><strong>Name:</strong> {{ selectedOrganization.name }}</p>
          <p><strong>Address:</strong> {{ selectedOrganization.address }}</p>
          <p>
            <strong>Registration Number:</strong>
            {{ selectedOrganization.registrationNumber }}
          </p>
          <p>
            <strong>Created At:</strong>
            {{ formatDate(selectedOrganization.createdAt) }}
          </p>
          <p>
            <strong>Owner:</strong> {{ selectedOrganization.owner.username }}
          </p>
        </div>
        <div class="mt-6 flex justify-end">
          <button
            @click="selectedOrganization = null"
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  LucideSearch,
  LucidePlus,
  LucideBuilding2,
  LucideEye,
} from "lucide-vue-next";
import { useOrganization } from "@/composables/useOrganization";

// Destructure organization methods
const { getOrganizations, createOrganization, getOrganization } =
  useOrganization();

// State management
const organizations = ref([]);
const searchQuery = ref("");
const showCreateModal = ref(false);
const selectedOrganization = ref(null);

// New organization form data
const newOrganization = ref({
  name: "",
  address: "",
  registrationNumber: "",
});

// Fetch organizations on component mount
onMounted(async () => {
  await fetchOrganizations();
});

// Fetch organizations method
const fetchOrganizations = async () => {
  try {
    organizations.value = await getOrganizations();
  } catch (error) {
    console.error("Failed to fetch organizations:", error);
    // Optionally show error toast/notification
  }
};

// Filtered organizations based on search query
const filteredOrganizations = computed(() => {
  if (!searchQuery.value) return organizations.value;

  const query = searchQuery.value.toLowerCase();
  return organizations.value.filter(
    (org) =>
      org.name.toLowerCase().includes(query) ||
      org.registrationNumber.toLowerCase().includes(query)
  );
});

// Open create organization modal
const openCreateOrganizationModal = () => {
  showCreateModal.value = true;
};

// Close create organization modal
const closeCreateOrganizationModal = () => {
  showCreateModal.value = false;
  // Reset form
  newOrganization.value = {
    name: "",
    address: "",
    registrationNumber: "",
  };
};

// Submit create organization
const submitCreateOrganization = async () => {
  try {
    const createdOrg = await createOrganization(
      newOrganization.value.name,
      newOrganization.value.address,
      newOrganization.value.registrationNumber
    );

    if (createdOrg) {
      // Refresh organizations list
      await fetchOrganizations();
      // Close modal
      closeCreateOrganizationModal();
      // Optionally show success toast/notification
    }
  } catch (error) {
    console.error("Failed to create organization:", error);
    // Optionally show error toast/notification
  }
};

// View organization details
const viewOrganizationDetails = async (orgId) => {
  try {
    selectedOrganization.value = await getOrganization(orgId);
  } catch (error) {
    console.error("Failed to fetch organization details:", error);
    // Optionally show error toast/notification
  }
};

// Date formatting utility
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Set page layout metadata
definePageMeta({
  layout: "dashboard",
});
</script>
