import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData()
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div className="space-y-3">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;