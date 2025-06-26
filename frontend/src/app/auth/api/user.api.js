import axiosInstance from "@/utils/axiosinstance";

export const loginUser = async (username,password) =>{
    const {data} = await axiosInstance.post("/user/login",{username,password})
    return data
}

export const registerUser = async (username,password,phone) =>{
    const {data} = await axiosInstance.post("/user/signup",{password,phone,username})
    return data
}



