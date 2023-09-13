const multer  = require('multer')
import { Request, Response } from "express"
import ImageModel from "../models/image.model"
import { getAllImagesService, getImageByIdService, addImageService } from "../services/image.service";
import fs from "fs";

export const getAllImages = async (req: Request, res: Response) => {
    try {
        const images = await getAllImagesService();
        res.status(200).json({
            images,
            count: images.length,
        });
    } catch (error:any) {
        console.error("Error: ",error);
        res.status(500).json({ message: "Unable to fetch images" });
    }
}

export const getImageById = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const image = await getImageByIdService(id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.status(200).json(image);
    } catch (error:any) {
        console.error("Error: ",error);
        res.status(500).json({ message: "Unable to fetch image" });
    }
}

type FileSchema = {
    file: {
        filename: string;
        originalname: string;
        path: string;
    };
}

export const addImage = async (
    req: Request<{}, {}, {}>,
    res: Response) => {

    try {
        const file = req.file;
        const newImage = await addImageService(file);
        res.status(201).json(newImage);
    } catch (error:any) {
        console.error("Error: ",error);
        res.status(500).json({ message: "Unable to add image" });
    }
}