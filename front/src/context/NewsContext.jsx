import { createContext, useContext, useEffect, useState } from "react";
import { getAllNewsApi } from "../helpers/news/getAllNews.api.js";

const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

const NewsProvider = ({ children }) => {

    const [news, setNews] = useState(null);
    const country = localStorage.getItem('country');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllNewsApi({ country: country, active: true });
            if (response.status === 'success') setNews(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    const newsSeparators = (start, end) => {
        if (news) return news.docs.slice(start - 1, end);
    };

    return (
        <NewsContext.Provider value={{ news, newsSeparators }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;