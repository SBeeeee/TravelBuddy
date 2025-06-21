import express from "express";
import { login,signup, refreshToken,logout,getuser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/getcurrentuser",protectRoute,getuser);

export default router;