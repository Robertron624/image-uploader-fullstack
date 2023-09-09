import { SuccessIcon, CloseIcon, FailureIcon, WarningIcon } from "./Icons";
import "./Toast.scss";

interface ToastProps {
    type: string;
    message: string;
    onClose: () => void;
}
const Toast = ({ message, onClose, type }: ToastProps) => {
    const getIcon = () => {
        switch (type) {
            case "success":
                return <SuccessIcon />;
            case "failure":
                return <FailureIcon />;
            case "warning":
                return <WarningIcon />;
            default:
                return null;
        }
    };

    return (
        <div className={`toast toast--${type}`} role="alert">
            <div className="toast-message">
                {getIcon() && (
                    <div className="icon icon--lg icon--thumb">{getIcon()}</div>
                )}
                <p>{message}</p>
            </div>
            <button className="toast-close-btn" onClick={onClose}>
                <span className="icon">
                    <CloseIcon />
                </span>
            </button>
        </div>
    );
};

export default Toast;
