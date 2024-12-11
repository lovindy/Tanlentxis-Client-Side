<!-- pages/admin/organization.vue -->
<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Organizations</h1>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
        @click="createOrganization"
      >
        <LucidePlus class="w-4 h-4 mr-2" />
        Add Organization
      </button>
    </div>

    <!-- Search and Table -->
    <div class="bg-white rounded-lg shadow">
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
                Employees
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Industry
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Joined Date
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
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ org.owner.username }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    org.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`"
                >
                  {{ org.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ org.industry }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ org.createdAt }}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <button class="text-gray-400 hover:text-gray-500">
                  <LucideMoreVertical class="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  LucideSearch,
  LucidePlus,
  LucideMoreVertical,
  LucideBuilding2,
} from 'lucide-vue-next';
import { useOrganization } from '@/composables/useOrganization';

const { getOrganizations, createOrganization } = useOrganization();

const organizations = ref<OrganizationResponse[]>([]);
const searchQuery = ref('');

onMounted(async () => {
  organizations.value = await getOrganizations();
});

const filteredOrganizations = computed(() => {
  return organizations.value.filter(
    (org) =>
      org.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      org.industry.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const createOrganizationHandler = async () => {
  await createOrganization('New Organization', '123 Main St', 'ORG-2024-001');
  organizations.value = await getOrganizations();
};
</script>
