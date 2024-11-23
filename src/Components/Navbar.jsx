import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import navLogo from "../assets/nav-logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">
                <img className="h-10" src={navLogo} alt="" />
            </div>
            <div className="space-x-4">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex items-center gap-x-2">
                <div>
                    <img className="h-10" src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOutUser} className="btn rounded-none text-white bg-[#403F3F]">Log-Out</button> : <Link to={"/auth/login"} className="btn rounded-none text-white bg-[#403F3F]">Log-In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;