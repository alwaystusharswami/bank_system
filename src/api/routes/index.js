import express from "express";
const router = express.Router();
import {User} from "../model/user.model.js";
router.get("/", async (req, res) => {
    const user=await User.find();
  return res.json(user);
});

export { router };
