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

export const deleteride=async(userid)=>{
    try{
        const res=await axiosInstance.delete(`/rides/deleteride/${userid}`)
        return res.data;
    }
    catch(error){

    }
}