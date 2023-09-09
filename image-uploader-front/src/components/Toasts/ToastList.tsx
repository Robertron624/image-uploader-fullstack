import { useEffect, useRef } from "react";
import Toast from "./Toast";
import "./ToastList.scss";
import { ToastData } from "../../constants";

interface ToastListProps {
    data: ToastData[] | [];
    position: string;
    removeToast: (id: string) => void;
}
const ToastList = ({ data, position, removeToast }: ToastListProps) => {
    const listRef = useRef(null);

    const handleScrolling = (el: HTMLDivElement | null | undefined) => {
        const isTopPosition = ["top-left", "top-right"].includes(position);
        if (isTopPosition) {
            el?.scrollTo(0, el.scrollHeight);
        } else {
            el?.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        handleScrolling(listRef.current);
    }, [position, data]);

    const sortedData = position.includes("bottom")
        ? [...data].reverse()
        : [...data];

    return (
        sortedData.length > 0 && (
            <div
                className={`toast-list toast-list--${position}`}
                aria-live="assertive"
                ref={listRef}
            >
                {sortedData.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        )
    );
};
export default ToastList;
