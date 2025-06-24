import axiosInstance from "@/utils/axiosinstance"

export const getAllRides=async(params)=>{
    try{
        const query = new URLSearchParams();
        for (const key in params) {
            if (params[key] && params[key] !== "Any mode") {
              query.append(key, params[key]);
            }
          }
          const res = await axiosInstance.get(`/rides/getrides?${query.toString()}`);
          return res.data; 
    }
    catch(error){
        console.log(error);
        throw error
    }
}

