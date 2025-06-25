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

    const {
      origin,
      destination,
      date,
      transport,
      page = 1,
      limit = 10,
    }= req.query;

    const filters = {};
    if (origin) filters.origin = { $regex: origin, $options: "i" };
    if (destination) filters.destination = { $regex: destination, $options: "i" };
    if (date) filters.date = date;
    if (transport && transport !== "Any mode") filters.transport = transport;

    
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const totalRides = await Ride.countDocuments(filters);

    const rides = await Ride.find(filters)
    .skip(skip)
    .limit(parseInt(limit))
    .populate({ path: "createdBy", select: "username -_id" })
    .sort({ date: 1 });

    res.status(200).json({
       rides,
       currentPage: parseInt(page),
       totalPages: Math.ceil(totalRides / limit),
       totalRides,
       success: true,
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

export const myrides=async(req,res)=>{
    try{
        const userId=req.user._id;
        const rides=await Ride.find({createdBy:userId}).select("-createdBy");
        res.status(200).json({
            rides,
            success:true,
            message:"View My Rides"
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Error fetching rides',
            error: error.message,
        });
    }
}

export const deleteride=async(req,res)=>{
    try{
        const rideId = req.params.id;
        const userId = req.user._id;
    
        const ride = await Ride.findOne({ _id: rideId, createdBy: userId });
        if (!ride) {
            return res.status(404).json({
              success: false,
              message: "Ride not found or you're not authorized to delete it",
            });
          }
    
          await Ride.deleteOne({ _id: rideId });
          
          res.status(200).json({
            success: true,
            message: "Ride deleted successfully",
          });
    }
    catch(error){
        console.error("Error deleting ride:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error while deleting ride",
          error: error.message,
        });
    }
    
}

export const updateRide=async(req,res)=>{
    try{
        const rideId = req.params.id;
        const userId = req.user._id;
        const updateData = req.body;

        const ride = await Ride.findOne({ _id: rideId, createdBy: userId });
        if (!ride) {
            return res.status(404).json({
              success: false,
              message: "Ride not found or you're not authorized to edit it",
            });
          }
        
        Object.keys(updateData).forEach((key) => {
            ride[key] = updateData[key];
        });
        await ride.save();
        res.status(200).json({
            success: true,
            message: "Ride updated successfully",
            ride,
          });
    }
    catch(error){
        console.error("Error updating ride:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error while updating ride",
          error: error.message,
        });
    }
}