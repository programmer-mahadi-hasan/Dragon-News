import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] font-poppins">
            <header className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;