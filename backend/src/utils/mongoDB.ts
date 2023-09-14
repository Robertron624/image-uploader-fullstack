import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

const connectToMongo = async () => {
    const uri = process.env.MONGODB_URL || "";

    try {
        await mongoose.connect(uri);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
};

export default connectToMongo;