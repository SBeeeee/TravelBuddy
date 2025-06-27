import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { generateToken,storeRefreshToken,setCookies } from "../utils/user.utils.js";

export const signup = async(req,res)=>{
    const {phone,password,username}=req.body;
    try {
        const userExists=await User.findOne({phone});

        if (userExists) {
			return res.status(400).json({ message: "User already exists" });
		}
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);

        const user = await User.create({ username, phone, password:hash });
        const { accessToken, refreshToken } = generateToken(user._id);
        storeRefreshToken(user._id,refreshToken);
        setCookies(res,accessToken,refreshToken);
        res.status(201).json({
            name:user.username,
            message:"User Created Successfully",
            success:true
        })
    } catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ message: error.message });
    }
}

export const login =async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user= await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"Invalid username or password"});
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }
        const { accessToken, refreshToken } = generateToken(user._id);
        storeRefreshToken(user._id,refreshToken);
        setCookies(res,accessToken,refreshToken);
        res.status(200).json({
            name:user.username,
            message:"User Logged In Successfully",
            success:true
        })
        
    } catch (error) {
        console.log("Error in login controller", error.message);
		res.status(500).json({ message: error.message });
    }
}

export const logout =async (req,res)=>{
    try{
    const refreshToken = req.cookies.refreshToken;
    if(refreshToken){
        const decoded=jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
        await User.findByIdAndUpdate(decoded.userId, { refreshToken:null });
    }
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
		res.json({ message: "Logged out successfully" });
    }
    catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const refreshToken =async(req,res)=>{
    try{
        const refreshToken= req.cookies.refreshToken;
        if (!refreshToken) {
			return res.status(401).json({ message: "No refresh token provided" });
		}
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user=await User.findById(decoded.userId);
       
        const storedToken=user.refreshToken;
       
        if (storedToken !== refreshToken) {
			return res.status(401).json({ message: "Invalid refresh token" });
		}

		const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

		res.cookie("accessToken", accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: 15 * 60 * 1000,
		});

		res.json({ message: "Token refreshed successfully" });
    }
    catch(error){
        console.log("Error in refreshToken controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const getuser=async(req,res)=>{
    try {
        const user=req.user;
        res.status(200).json({
            user,
            success:true,
            message:"This is the user"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error",
            error:error.message,
        })
    }
}