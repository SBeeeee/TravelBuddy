import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userrouter from "./src/routes/user.route.js";
import riderouter from "./src/routes/ride.router.js";
import { connectDB } from "./src/lib/db.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

app.use("/api/user",userrouter);
app.use("/api/rides",riderouter);

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	connectDB();
});