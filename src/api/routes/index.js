import express from "express";
const router = express.Router();
import { User } from "../model/user.model.js";
import { customerDetail } from "../controllers/customer.js";
router
  .get("/allCustomer", async (req, res) => {
    const user = await User.find();
    return res.json(user);
  })
  .get("/customer/:id", customerDetail);

export { router };
