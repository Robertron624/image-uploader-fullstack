require('dotenv').config();
import express, {Express, Request, Response, Application } from "express";
import cors from "cors";
import imageRouter from "./routes/image.router";
import connectToMongo from "./utils/mongoDB";

const PORT = process.env.PORT || 4000;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", async(req: Request, res: Response) => {
    res.send("All good!");
});

app.use("/api/v1", imageRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    connectToMongo();
});