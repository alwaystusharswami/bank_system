import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    currentBalance: { type: Number, default: 0 },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export { User };