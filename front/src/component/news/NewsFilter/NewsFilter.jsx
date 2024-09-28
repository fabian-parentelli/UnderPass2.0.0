import './newsFilter.scss';
import { useEffect } from 'react';
import { getAllNewsApi } from '../../../helpers/news/getAllNews.api.js';

const NewsFilter = ({ setNews, setLoading, pager }) => {

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = {};
            if(pager) query.page = pager;
            const response = await getAllNewsApi(query);
            if (response.status === 'success') setNews(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [pager]);

    return (
        <div className='newsFilter'>
            NewsFilter
        </div>
    );
};

export default NewsFilter;