import "react-toastify/dist/ReactToastify.css";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export default function ToastProvider({ children }: PropsWithChildren) {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
}
