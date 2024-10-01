import './underNews.scss';
import { useEffect, useState } from 'react';
import Load from '../../../component/utils/Load.jsx';
import Pager from '../../../component/utils/Pager/Pager.jsx';
import UnderNewsprint from '../UnderNewsPrint/UnderNewsPrint.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import NewsFilter from '../../../component/news/NewsFilter/NewsFilter.jsx';
import UnderNewsFont from '../../../component/fonts/UnderNewsFont/UnderNewsFont';

const UnderNews = () => {

    const { user } = useLoginContext();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pager, setPager] = useState(null);
    const [query, setQuery] = useState({
        country: localStorage.getItem('country'), limit: 14, active: true,
        provinceSort: user?.data?.location?.province || undefined, citySort: user?.data?.location?.city || undefined
    });

    const handleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='underNews'>
            <div className='underNewsTitle'>
                <UnderNewsFont size={4} />
            </div>

            <div className='underNewsFIlter'>
                <NewsFilter
                    news={news}
                    setNews={setNews}
                    setLoading={setLoading}
                    query={query}
                    setQuery={setQuery}
                />
            </div>

            {news && <UnderNewsprint news={news.docs} />}
            <Pager users={news} HandleChangePage={handleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default UnderNews;