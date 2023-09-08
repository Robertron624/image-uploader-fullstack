import { useState } from "react";

import "./App.scss";
import Loading from "./components/Loading";
import MainUploader from "./components/MainUploader";
import UploadedImage from "./components/UploadedImage";
import { AppState } from "./contants";


function App() {
    const [appState, setAppState] = useState<AppState>(AppState.IDLE);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");

    return (
        <>
            {appState === AppState.IDLE && (
                <MainUploader setAppState={setAppState} setUploadedImageUrl={setUploadedImageUrl}/>
            )}
            {appState === AppState.LOADING && <Loading />}
            {appState === AppState.SUCCESS && ( <UploadedImage uploadedImageUrl={uploadedImageUrl} /> )}
        </>
    );
}

export default App;
