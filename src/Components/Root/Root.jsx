import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;