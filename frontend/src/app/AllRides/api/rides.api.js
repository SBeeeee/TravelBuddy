import axiosInstance from "@/utils/axiosinstance"

export const getAllRides=async()=>{
    try{
        const res=await axiosInstance.get("/rides/getrides");
        return res.data.Rides;
    }
    catch(error){
        console.log(error);
        throw error
    }
}

