import express from "express";
//create app api using express
const app = express();

//MIDDLEWARES
app.use(express.json());

//API ENDPOINTS
/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  res.send("<marquee>GET REQUEST</marquee>");
});


export default app;