import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    image : {
        type: String,
        required: true,
    },
    originalName: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;