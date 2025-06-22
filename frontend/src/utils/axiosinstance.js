import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If unauthorized and not retried yet
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token") // prevent loop
    ) {
      originalRequest._retry = true;
      try {
        await axiosInstance.post("/user/refresh-token");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Clear auth state when refresh fails
        if (typeof window !== "undefined") {
          // Dispatch logout action or clear localStorage if needed
          alert("u need to login")// Changed to login page
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
