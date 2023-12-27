import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./providers/App.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <main className="bg-gray-100">
            <AppProvider />
        </main>
    </React.StrictMode>,
);
