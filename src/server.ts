//Dependency Imports
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";


//File Imports
import { createUser, signin } from "./Handlers/user";
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

//Authentication Middleware
app.post("/auth/v1/signup", createUser);
app.post("/auth/v1/signin", signin);

//handling 404 error
app.use("*", (req, res, next) => {
    res.status(404).json({ message: "404 Page Not Found" });
    next();
});

// body parser error catcher
app.use((err, req, res, next) => {
    if (err) {
        console.error(err);
        res.status(400).json({ error: "error parsing data" });
    } else {
        next();
    }
});

export default app;