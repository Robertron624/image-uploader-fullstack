import express, { Request, Response } from "express";
import {
    getAllImages,
    getImageById,
    addImage,
} from "../handlers/image.handler";
import { upload } from "../services/image.service";

const imageRouter = express.Router();

imageRouter.get("/images", getAllImages);

imageRouter.post("/images", upload.single("image"), addImage);

imageRouter.route("/images/:id").get(getImageById);

export default imageRouter;
