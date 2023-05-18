import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
  }
)