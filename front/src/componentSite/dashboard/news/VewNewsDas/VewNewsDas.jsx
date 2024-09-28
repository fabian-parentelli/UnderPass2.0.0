import './vewNewsDas.scss';
import { useState } from 'react';
import DvrIcon from '@mui/icons-material/Dvr';
import Title from '../../../../component/dashboard/Title/Title';
import NewsFilter from '../../../../component/news/NewsFilter/NewsFilter';
import Load from '../../../../component/utils/Load';
import Pager from '../../../../component/utils/Pager/Pager';
import NewsVewTable from '../../../../component/news/NewsVewTable/NewsVewTable';

const VewNewsDas = () => {

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pager, setPager] = useState(null);

    const handleChangePage = (pag) => setPager(pag);

    return (
        <div className='vewNewsDas'>
            <Title Icon={DvrIcon} name='Ver noticias' />
            <NewsFilter setNews={setNews} setLoading={setLoading} pager={pager} />
            {news && <NewsVewTable news={news.docs} />}

            {news && <Pager users={news} HandleChangePage={handleChangePage} />}
            <Load loading={loading} />
        </div>
    );
};

export default VewNewsDas;