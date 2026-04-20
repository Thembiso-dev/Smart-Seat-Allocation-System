import { ApiResponse } from "@/src/types/api";

export const createBooking = async (bookingData: { userId: string; sessionId: string }): Promise<ApiResponse> => {
  const response = await fetch(`/api/bookings`, {
    method: "POST",  
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

export const getBookings = async (): Promise<ApiResponse> => {
  const response = await fetch(`/api/bookings`);
  return response.json();
};