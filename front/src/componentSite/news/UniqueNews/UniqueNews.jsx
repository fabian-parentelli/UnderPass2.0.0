import './uniqueNews.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import UniqueNewsVew from '../UniqueNewsVew/UniqueNewsVew';
import { getNewsByIdApi } from '../../../helpers/news/getNewsById.api.js';

const UniqueNews = () => {

    const { id } = useParams();
    const [news, setNews] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getNewsByIdApi(id);
            if (response.status === 'success') setNews(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [id]);
    
    return (
        <div className='uniqueNews'>
            {news && <UniqueNewsVew news={news} />}
            <Load loading={loading} />
        </div>
    );
};

export default UniqueNews;