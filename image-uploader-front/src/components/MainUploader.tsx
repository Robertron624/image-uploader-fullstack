import { useState } from "react";
import axios from "axios";

import ImagePlacer from "./ImagePlacer";
import { AppState } from "../contants";
import "./MainUploader.scss";
import { dataImgBB } from "../types";

interface MainUploaderProps {
    setAppState: React.Dispatch<React.SetStateAction<number>>;
    setUploadedImageUrl: React.Dispatch<React.SetStateAction<string>>;
}
const MainUploader = ({
    setAppState,
    setUploadedImageUrl,
}: MainUploaderProps) => {
    const [currentImage, setCurrentImage] = useState<File[] | null>(null);

    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://api.imgbb.com/1/upload";

    const makeRequest = async () => {
        if (!currentImage) return;

        const formData = new FormData();
        formData.append("image", currentImage[0]);
        formData.append("key", apiKey || "");

        try {
            setAppState(AppState.LOADING);
            // Realiza la solicitud manualmente usando axios
            const response = await axios.post<dataImgBB>(baseUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("RESPONSE -> ", response.data.data.url);

            setUploadedImageUrl(response.data.data.url);
            setAppState(AppState.SUCCESS);
        } catch (error) {
            console.log("ERROR -> ", error);
        }
    };

    return (
        <section className="container">
            <div className="inner">
                <div className="top-texts">
                    <h1 className="main-title">Upload your image</h1>
                    <p className="main-subtitle">
                        File should be Jpeg, Png,...
                    </p>
                </div>
                <ImagePlacer setCurrentImage={setCurrentImage} />
                <div className="bottom-items">
                    <p>Or</p>
                    <button onClick={makeRequest} className="btn btn--primary">
                        Choose a file
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainUploader;
