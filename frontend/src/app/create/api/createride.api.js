import axiosInstance from "@/utils/axiosinstance";

export const createRide=async(formdata)=>{
    try{
        const res=await axiosInstance.post("/rides/create",{
            origin:formdata.origin,
            destination:formdata.destination,
            date:formdata.date,
            time:formdata.time,
            transport:formdata.transport,
            seats:formdata.seats,
            price:formdata.price,
            description:formdata.description,
        })
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error
    }
}