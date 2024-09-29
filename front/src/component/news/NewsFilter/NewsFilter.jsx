import './newsFilter.scss';
import { useEffect } from 'react';
import NewsFilterTitle from './NewsFilterTitle/NewsFilterTitle.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { getAllNewsApi } from '../../../helpers/news/getAllNews.api.js';
import NewsFilterAdmin from './NewsFilterAdmin/NewsFilterAdmin.jsx';

const NewsFilter = ({ news, setNews, setLoading, query, setQuery }) => {

    const { user } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllNewsApi(query);
            if (response.status === 'success') setNews(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    return (
        <div className='newsFilter'>
            {news && <NewsFilterTitle news={news.docs} setQuery={setQuery} />}
            {news && user.data.role !== 'user' && <NewsFilterAdmin news={news.docs} setQuery={setQuery} /> }
        </div>
    );
};

export default NewsFilter;