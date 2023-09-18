const dotenv = require("dotenv");
import express, { Request, Response, Application } from "express";
import cors from "cors";
import imageRouter from "./routes/image.router";
import connectToMongo from "./utils/mongoDB";

const app: Application = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", async(req: Request, res: Response) => {
    res.send("All good!");
});

app.use("/api/v1", imageRouter);

// // Exposing the public folder to the world
app.use("/public", express.static("public"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    connectToMongo();
});