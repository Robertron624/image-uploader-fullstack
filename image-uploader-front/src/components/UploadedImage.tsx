import "./UploadedImage.scss";
import { baseApiUrl } from "../constants";

interface UploadedImageProps {
    uploadedImageUrl?: string;
    showToast: (message: string, type: string) => void;
}
const UploadedImage = ({uploadedImageUrl, showToast}: UploadedImageProps) => {

    const copyToClipboard = () => {
        if(!uploadedImageUrl) return
        navigator.clipboard.writeText(`${baseApiUrl}${uploadedImageUrl}`)
        showToast("Copied to clipboard", "success")
    }

    return (
        <div className="uploaded-container">
            <div className="top-items">
                <svg
                    width="42px"
                    height="42px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                        fill="#219653"
                    />
                </svg>
                <h2>Uploaded Successfully!</h2>
            </div>
            <div className="image-container">
                <img src={`${baseApiUrl}${uploadedImageUrl}`} alt="uploaded image" />
            </div>
            <div className="bottom-items">
                <input type="text" readOnly value={`${baseApiUrl}${uploadedImageUrl}`} />
                <button onClick={copyToClipboard} className="btn">
                    Copy Link
                </button>
            </div>
        </div>
    );
};

export default UploadedImage;
