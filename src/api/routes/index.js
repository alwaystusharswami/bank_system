import express from "express";
const router = express.Router();
import {
  allCustomer,
  customerDetail,
  transfer,
} from "../controllers/customer.js";
router
  .get("/allCustomer", allCustomer)
  .get("/customer/:id", customerDetail)
  .post("/transfer", transfer);

export { router };
