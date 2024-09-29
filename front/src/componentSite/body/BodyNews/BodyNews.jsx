import './bodyNews.scss';
import { Link } from 'react-router-dom';
import NewsSeparator from '../NewsSeparator/NewsSeparator';
import UnderNewsLog from '../../../component/fonts/UnderNewsLog/UnderNewsLog';

const BodyNews = () => {

    return (
        <div className='bodyNews'>
            <UnderNewsLog size='4' />
            <NewsSeparator start={7} end={12} />
            <Link to={'undernews'} className='bodyNewsTo'>Ver mas noticias</Link>
        </div>
    );
};

export default BodyNews;