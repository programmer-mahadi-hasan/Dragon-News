import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 bg-base-200 items-center p-3">
            <p className="bg-[#d72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;