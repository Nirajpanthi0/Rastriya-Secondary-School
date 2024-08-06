import axios from "axios";

export const createAxiosInstance = (token) => {
  const baseURL = import.meta.env.VITE_API_KEY;

  if (!baseURL) {
    throw new Error("API base URL is not defined");
  }

  return axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "x-auth-token": token,
    },
  });
};
