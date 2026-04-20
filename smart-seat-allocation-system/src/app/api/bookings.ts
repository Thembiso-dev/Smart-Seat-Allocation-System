
export const getBookings = async () => {
  const response = await fetch(`/api/bookings`);
  return response.json();
};