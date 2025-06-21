import axiosInstance from "@/utils/axiosinstance";

export const loginUser = async (username,password) =>{
    const {data} = await axiosInstance.post("/user/login",{username,password})
    return data
}

export const registerUser = async (username,password,email) =>{
    const {data} = await axiosInstance.post("/user/signup",{username,email,password})
    return data
}

export const logoutUser = async () =>{
    const {data} = await axiosInstance.post("/user/logout")
    return data
}

