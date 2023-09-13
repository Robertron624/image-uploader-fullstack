import fs from "fs";
const multer = require('multer');
import path from "path";
import { Request, Response } from "express";
import ImageModel from "../models/image.model";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // guardar la imagen en la carpeta uploads dentro del directorio public
        callback(null, path.join(__dirname, '../../public/uploads'));
      },
      filename: (req, file, callback) => {
        // Puedes configurar cómo deseas nombrar los archivos aquí
        // Por ejemplo, puedes mantener el nombre original del archivo:
        callback(null, file.originalname);
      },
});

export const upload = multer({ storage: storage});

export const getAllImagesService = async () => {
    return await ImageModel.find();
};

export const getImageByIdService = async (id: string) => {
    return await ImageModel.findById(id);
};

export const addImageService = async (file:any) => {
    const currentDate = new Date();

    const newImage = new ImageModel({
        image: file.filename,
        originalName: file.originalname,
        path: `/images/${file.filename}`,
        createdAt: currentDate,
        lastUpdated: currentDate,
    });

    return await newImage.save();
};