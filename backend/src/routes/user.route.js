import express from "express";
import { login,signup, refreshToken,logout } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

export default router;