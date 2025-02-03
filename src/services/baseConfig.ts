import axios from "axios";
import { baseUrl } from "./routes";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can add custom logic to add headers if needed
    // For example, adding an authorization header (if you were using tokens, which you're not in this case)
    // config.headers['Authorization'] = `Bearer ${yourToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      return Promise.reject(response.data);
    }
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Session expired or not authenticated");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
