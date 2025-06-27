import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const generateToken =(userId)=>{
const accessToken=jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:"15m",
});
const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
});

return { accessToken, refreshToken };
}

export const storeRefreshToken = async (userId, refreshToken) => {
    await User.findByIdAndUpdate(userId, { refreshToken });
  };
  
export  const setCookies = (res, accessToken, refreshToken) => {
	res.cookie("accessToken", accessToken, {
		httpOnly: true, // prevent XSS attacks, cross site scripting attack
		secure:true,
		sameSite: "none", // prevents CSRF attack, cross-site request forgery attack
		maxAge: 15 * 60 * 1000, // 15 minutes
	});
	res.cookie("refreshToken", refreshToken, {
		httpOnly: true, // prevent XSS attacks, cross site scripting attack
		secure: true,
		sameSite: "none", // prevents CSRF attack, cross-site request forgery attack
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	});
};