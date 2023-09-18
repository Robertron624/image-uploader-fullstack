export enum AppState {
    IDLE,
    LOADING,
    SUCCESS,
}

export interface ToastData {
    id: string;
    message: string;
    type: string;
}

export enum ToastPosition {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
}

export const baseApiUrl = "https://robertron-image-uploader.onrender.com"