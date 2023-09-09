import { useState } from "react";

import "./App.scss";
import Loading from "./components/Loading";
import MainUploader from "./components/MainUploader";
import UploadedImage from "./components/UploadedImage";
import { AppState, ToastData, ToastPosition } from "./constants";
import ToastList from "./components/Toasts/ToastList";

const ToastDefaults = {
    autoClose: true,
    autoCloseDuration: 5,
    position: ToastPosition.TOP_LEFT,
};

function App() {
    const [appState, setAppState] = useState<AppState>(AppState.IDLE);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");

    const [toasts, setToasts] = useState<ToastData[] | []>([]);

    const showToast = (message: string, type: string) => {
      const toast = {
        id: String(Date.now()),
        message,
        type,
      };
  
      setToasts((prevToasts) => [...prevToasts, toast]);
  
      if (ToastDefaults.autoClose) {
        setTimeout(() => {
          removeToast(toast.id);
        }, ToastDefaults.autoCloseDuration * 1000);
      }
    };

    const removeToast = (id: string) => {
      if(toasts) {
        const filteredToasts = toasts.filter((toast) => toast.id !== id);
        setToasts(filteredToasts);
      }
    };

    return (
        <>
            {appState === AppState.IDLE && (
                <MainUploader setAppState={setAppState} setUploadedImageUrl={setUploadedImageUrl}/>
            )}
            {appState === AppState.LOADING && <Loading />}
            {appState === AppState.SUCCESS && ( <UploadedImage uploadedImageUrl={uploadedImageUrl} showToast={showToast} /> )}
            <ToastList data={toasts} position={ToastDefaults.position} removeToast={removeToast} />
        </>
    );
}

export default App;
