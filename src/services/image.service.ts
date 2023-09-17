import fs from "fs";
const multer = require("multer");
import path from "path";
import { Request } from "express";
import ImageModel from "../models/image.model";
import { MulterFile, MulterCallback } from "../interfaces";

const uploadDir = path.join(__dirname, "../../public/uploads");

// function to change white spaces in image name to hyphens
const changeSpaceToHyphen = (filename: string) => {
    return filename.replace(/\s/g, "-").toLowerCase();
};

const storage = multer.diskStorage({
    destination: (_: Request, file: MulterFile, callback: MulterCallback) => {
        callback(null, uploadDir);
    },
    filename: (_: Request, file: MulterFile, callback: MulterCallback) => {
        callback(null, changeSpaceToHyphen(file.originalname));
    },
});

export const upload = multer({ storage: storage });

export const getAllImagesService = async () => {
    return await ImageModel.find();
};

export const getImageByIdService = async (id: string) => {
    return await ImageModel.findById(id);
};

export const addImageService = async (file: MulterFile) => {
    const currentDate = new Date();

    const newImage = new ImageModel({
        image: changeSpaceToHyphen(file.originalname),
        originalName: file.originalname,
        path: `/public/uploads/${file.filename}`,
        createdAt: currentDate,
        lastUpdated: currentDate,
    });

    return await newImage.save();
};

const deleteImageFromDisk = (imagePath: string, file: string) => {
    try {
        fs.unlinkSync(`${imagePath}/${file}`);
        return true;
    } catch (err) {
        console.log("Error, unable to delete the image 💥", file, err);
        return 0;
    }
};

export const deleteImageService = async (id: string) => {
    const image = await getImageByIdService(id);

    if (!image) {
        return false;
    }

    const deletedImage = await ImageModel.findByIdAndDelete(id);

    if (!deletedImage) {
        return false;
    }

    const imagePath = path.join(__dirname, "../../public/uploads");

    return deleteImageFromDisk(imagePath, deletedImage.image);
};

export const deleteAllImagesService = async () => {
    const deletedImages = await ImageModel.deleteMany({});

    console.log("Deleted images: ", deletedImages);

    fs.readdir(uploadDir, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            const fileDeleted = deleteImageFromDisk(uploadDir, file);
            if (!fileDeleted) {
                console.log(`Unable to delete file : ${file}`);
                throw `Unable to delete file : ${file}`;
            }
        }
    });

    return true;
};
