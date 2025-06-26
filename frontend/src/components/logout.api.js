import axiosInstance from "@/utils/axiosinstance"

export const logoutt=async()=>{
    try{
    const res=await axiosInstance.post("/user/logout");
    return res.data;
    }catch(error){
        throw error;
    }
    
}