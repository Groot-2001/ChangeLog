import app from "./server";
import dotenv from "dotenv";
dotenv.config();
//START THE SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
