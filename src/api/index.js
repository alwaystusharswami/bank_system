import {mongoose} from "./config/mongoose.connect.js";
import express from "express";
const server = express();
server.listen("8000", () => {
  console.log(`server is running up on port 8000`);
});
