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

export const deleteride=async(id)=>{
    try{
        const res=await axiosInstance.delete(`/rides/deleteride/${id}`)
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export const updateride=async(id,formdata)=>{
    try {
        const res=await axiosInstance.patch(`/rides/updateride/${id}`,formdata)
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}