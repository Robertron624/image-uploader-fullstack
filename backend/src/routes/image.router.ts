import express, { Request, Response } from "express";
import {
    getAllImages,
    getImageById,
    addImage,
    deleteImage,
    deleteAllImages,
} from "../handlers/image.handler";
import { upload } from "../services/image.service";

const imageRouter = express.Router();

imageRouter.get("/images", getAllImages);
imageRouter.get("/images/:id", getImageById);

imageRouter.post("/images", upload.single("image"), addImage);

imageRouter.delete("/images/:id", deleteImage);

imageRouter.delete("/images", deleteAllImages);


export default imageRouter;
