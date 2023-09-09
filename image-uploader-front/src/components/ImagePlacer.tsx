import { useRef, useEffect } from "react";

import "./ImagePlacer.scss";
import Dropzone from "react-dropzone";

export interface AcceptedFiles {
    name: string;
    size: number;
    type: string;
    lastModified: number;
    lastModifiedDate: Date;
    webkitRelativePath: string;
}

const style = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

interface ImagePlacerProps {
    setCurrentImage: React.Dispatch<React.SetStateAction<File[] | null>>;
    currentImage: File[] | null;
}

const ImagePlacer = ({ setCurrentImage, currentImage }: ImagePlacerProps) => {

  const imagePlacerRef = useRef<HTMLDivElement>(null);

  // When there is an image, add the image to image-placer div as a background image
  useEffect(() => {
    if (currentImage) {
      const reader = new FileReader();
      reader.readAsDataURL(currentImage[0]);
      reader.onload = () => {
        const placer = imagePlacerRef.current as HTMLDivElement;
        placer.style.backgroundImage = `url(${reader.result})`;
        placer.style.backgroundSize = "cover";
        placer.style.backgroundPosition = "center";
      };
    }
  }, [currentImage]);

    return (
        <Dropzone
            onDrop={(acceptedFiles: File[]) => setCurrentImage(acceptedFiles)}
        >
            {({ getRootProps, getInputProps }) => (
                <div className="image-placer" ref={imagePlacerRef}>
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        {currentImage ? null : (
                            <div className="placeholders">
                                <img
                                    src="/mountain.jfif"
                                    alt="mountains"
                                    className="placeholder-image"
                                />
                                <p className="placeholder-text">
                                    Drag & Drop your image here
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Dropzone>
    );
};

export default ImagePlacer;
