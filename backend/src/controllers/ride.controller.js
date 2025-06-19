import { Ride } from "../models/ride.model.js";

export const createRide=async(req,res)=>{
    try{
    const {origin,destination,date,time,transport,seats,price,description}=req.body;
    const createdBy=req.user._id;
    const newRide=new Ride({
        origin,
        destination,
        date,
        time,
        transport,
        seats,
        price,
        description,
        createdBy,
    })

    await newRide.save();
    res.status(201).json({
        success:true,
        message:"Ride Created Successfully",
        Ride:newRide,
    })
}
catch(error){
    console.log(error);
    res.status(500).json({
        success:false,
        message: 'Error creating task',
        error: error.message,
    })
}
}

export const getAllRides=async(req,res)=>{
try {
    const Rides=await Ride.find().populate({path:'createdBy',select:'username -_id'});
    res.status(200).json({
        success:true,
        message:'View All tasks',
        Rides
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: 'Error creating task',
        error: error.message,
    });
}
}