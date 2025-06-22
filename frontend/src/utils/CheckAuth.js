import axiosInstance from "./axiosinstance";

export const CheckAuth = async () => {
  try {
    const response = await axiosInstance.get("/user/getcurrentuser");
    return response.data.user;
  } catch (error) {
    console.log("Auth check failed:", error);
    throw error; // Re-throw to handle in component
  }
};
