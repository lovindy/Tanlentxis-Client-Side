// types/organization.ts
export interface OrganizationResponse {
  id: number;
  name: string;
  address: string;
  registrationNumber: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: number;
    username: string;
    email: string;
    emailVerified: boolean;
    roles: string[];
  };
}
