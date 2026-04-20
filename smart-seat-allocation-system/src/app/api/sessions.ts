import { ApiResponse } from "@/src/types/api";

export const getSessions = async (): Promise<ApiResponse> => {
  const response = await fetch(`/api/sessions`);
  return response.json();
};