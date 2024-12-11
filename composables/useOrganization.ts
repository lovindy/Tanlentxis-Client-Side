// composables/useOrganization.ts
import { useAuthStore } from "@/composables/useAuth";
import type { OrganizationResponse } from "@/types/organization";

export const useOrganization = () => {
  const authStore = useAuthStore();

  const getOrganizations = async (): Promise<OrganizationResponse[]> => {
    try {
      const response = await $fetch<OrganizationResponse[]>(
        "/api/v1/organizations",
        {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching organizations:", error);
      return [];
    }
  };

  const getOrganization = async (
    id: number
  ): Promise<OrganizationResponse | null> => {
    try {
      const response = await $fetch<OrganizationResponse>(
        `/api/v1/organizations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching organization:", error);
      return null;
    }
  };

  const createOrganization = async (
    name: string,
    address: string,
    registrationNumber: string
  ): Promise<OrganizationResponse | null> => {
    try {
      const response = await $fetch<OrganizationResponse>(
        "/api/v1/organizations",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
          body: { name, address, registrationNumber },
        }
      );
      return response;
    } catch (error) {
      console.error("Error creating organization:", error);
      return null;
    }
  };

  return { getOrganizations, getOrganization, createOrganization };
};
