// eslint-disable-next-line no-unused-vars
import dotenv from "dotenv";
dotenv.config();
import { mongoose } from "./config/mongoose.connect.js";
import { router } from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/", router);
server.listen("8000", () => {
  console.log(`server is running up on port 8000`);
});
