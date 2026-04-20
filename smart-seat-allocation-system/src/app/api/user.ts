
export const createUser = async (userData: { username: string; firstName: string; lastName: string }) => {
  const response = await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(`/api/users`);
  return response.json();
};

export const updateUser = async (userId: string, userData: { username?: string; firstName?: string; lastName?: string }) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "PUT",  
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const deleteUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  });
  return response.json();
};