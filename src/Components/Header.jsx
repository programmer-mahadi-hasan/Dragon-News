import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-3">
            <div>
                <img src={logo} alt="" />
            </div>
            <h2 className="text-xl text-gray-400">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;