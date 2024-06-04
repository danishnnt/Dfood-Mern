import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Db } from "./database/db.js";
import router from "./routes/route.js";

const app = express();
dotenv.config({path:"./config/config.env"})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/reservation',router)

Db();


export default app;

