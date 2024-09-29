import './underNews.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../component/utils/Pager/Pager.jsx';
import UnderNewsFont from '../../../component/fonts/UnderNewsFont/UnderNewsFont';
import { getAllNewsApi } from '../../../helpers/news/getAllNews.api.js';
import UnderNewsprint from '../UnderNewsPrint/UnderNewsPrint.jsx';

const UnderNews = () => {

    const [newsData, setNewsData] = useState(null);
    const [pager, setPager] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const query = { country: localStorage.getItem('country') };
            if (pager) query.page = pager;
            const response = await getAllNewsApi(query);
            if (response.status === 'success') setNewsData(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [pager]);

    const handleChangePage = (page) => setPager(page);

    return (
        <div className='underNews'>
            <div className='underNewsTitle'>
                <UnderNewsFont size={4} />
            </div>
            { newsData && <UnderNewsprint news={newsData.docs} />}
            <Pager users={newsData} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default UnderNews;