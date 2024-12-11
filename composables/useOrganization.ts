// composables/useOrganization.ts
import type { OrganizationResponse } from "@/types/organization";

export const useOrganization = () => {
  const config = useRuntimeConfig();
  const API_BASE_URL = config.public.apiBase || "http://localhost:8080/api/v1";

  const getOrganizations = async (): Promise<OrganizationResponse[]> => {
    try {
      const response = await $fetch<OrganizationResponse[]>(
        `${API_BASE_URL}/organizations/admin`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching organizations:", error);
      throw error;
    }
  };

  const getOrganization = async (
    id: number
  ): Promise<OrganizationResponse | null> => {
    try {
      const response = await $fetch<OrganizationResponse>(
        `${API_BASE_URL}/organizations/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      return response;
    } catch (error) {
      console.error(`Error fetching organization ${id}:`, error);
      throw error;
    }
  };

  const createOrganization = async (
    name: string,
    address: string,
    registrationNumber: string
  ): Promise<OrganizationResponse | null> => {
    try {
      const response = await $fetch<OrganizationResponse>(
        `${API_BASE_URL}/organizations`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ name, address, registrationNumber }),
        }
      );
      return response;
    } catch (error) {
      console.error("Error creating organization:", error);
      throw error;
    }
  };

  return { getOrganizations, getOrganization, createOrganization };
};
