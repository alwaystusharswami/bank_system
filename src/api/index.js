import {mongoose} from "./config/mongoose.connect.js";
import {router} from './routes/index.js'
import cors from 'cors'
import express from "express";
const server = express();
server.use(cors())
server.use('/',router)
server.listen("8000", () => {
  console.log(`server is running up on port 8000`);
});
