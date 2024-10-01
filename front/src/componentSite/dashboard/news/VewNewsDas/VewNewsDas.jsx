import './vewNewsDas.scss';
import { useState } from 'react';
import DvrIcon from '@mui/icons-material/Dvr';
import Load from '../../../../component/utils/Load';
import Pager from '../../../../component/utils/Pager/Pager';
import Title from '../../../../component/dashboard/Title/Title';
import NewsFilter from '../../../../component/news/NewsFilter/NewsFilter';
import NewsVewTable from '../../../../component/news/NewsVewTable/NewsVewTable';
import { updActiveNewsApi } from '../../../../helpers/news/updActiveNews.api.js';

const VewNewsDas = () => {

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({ publicity: 'false' });

    const handleChangePage = (pag) => setQuery({ ...query, page: pag });

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveNewsApi(id);
        if (response.status === 'success') {
            const data = { ...news };
            const index = data.docs.findIndex(i => i._id === response.result._id);
            data.docs[index] = response.result;
            setNews(data);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='vewNewsDas'>
            <Title Icon={DvrIcon} name='Ver noticias' />

            <NewsFilter
                news={news}
                setNews={setNews}
                setLoading={setLoading}
                query={query}
                setQuery={setQuery}
            />

            {news && <NewsVewTable news={news.docs} handleActive={handleActive} />}

            {news && <Pager users={news} HandleChangePage={handleChangePage} />}
            <Load loading={loading} />
        </div>
    );
};

export default VewNewsDas;