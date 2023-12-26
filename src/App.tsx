import { AppProvider } from "./providers/App.provider";

const App = () => {
    return (
        <main className="min-h-screen flex items-center flex-col bg-gray-100">
            <AppProvider />
        </main>
    );
};

export default App;
