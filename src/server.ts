//Dependency Imports
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";


//File Imports
import router from "./routers";
import { protect } from "./utils/auth";

//Express App Api
const app = express();

//Env Configuration
dotenv.config();


//API MIDDLEWARE
/**
 * app.use([path,] callback [, callback...])
 * 
 * Mounts the specified middleware function or functions at the specified path: 
 * the middleware function is executed when the base of the requested path matches path.
 */

//Module Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//Router Middleware
app.use("/api/v1", protect, router);


export default app;