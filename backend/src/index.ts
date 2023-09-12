import express, {Express, Request, Response, Application } from "express";

const PORT = 3000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});