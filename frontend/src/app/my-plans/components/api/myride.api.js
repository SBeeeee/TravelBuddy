import axiosInstance from "@/utils/axiosinstance";

export const getmyrides=async()=>{
    try{
        const res=await axiosInstance.get(`/rides/myrides`);
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}