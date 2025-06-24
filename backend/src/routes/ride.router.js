import express from "express";
import { createRide,getAllRides,myrides } from "../controllers/ride.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router=express.Router();

router.post("/create",protectRoute,createRide);
router.get("/getrides",getAllRides);
router.get("/myrides",protectRoute,myrides)

export default router;