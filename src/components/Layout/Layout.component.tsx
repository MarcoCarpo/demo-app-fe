import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>navbar</header>
            <div className="flex-1">
                <Outlet />
            </div>
            <footer>Footer</footer>
        </>
    );
};

export default Layout;
