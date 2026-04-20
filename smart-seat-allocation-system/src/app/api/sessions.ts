

export const getSessions = async () => {
  const response = await fetch(`/api/sessions`);
  return response.json();
};