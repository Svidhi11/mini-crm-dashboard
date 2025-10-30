import api from "./api";

// Mock API Endpoints
export const loginUser = async (email, password) => {
  try {
    // Simulate authentication
    const res = await api.post("/login", { email, password });
    return res.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getStats = async () => {
  try {
    const res = await api.get("/stats");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch stats");
  }
};
