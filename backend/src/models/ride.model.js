import mongoose from "mongoose";

const rideSchema = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String, // You can use Date too, but your input is coming as string
      required: true,
    },
    time: {
      type: String, // "HH:MM" format, valid as string
      required: true,
    },
    transport: {
      type: String,
      enum: ["Cab", "Auto", "Train", "Flight","Bus"],
      required: true,
    },
    seats: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Ride = mongoose.model("Ride",rideSchema);

