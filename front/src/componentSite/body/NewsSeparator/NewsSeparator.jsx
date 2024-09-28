import './newsSeparator.scss';
import { useNewsContext } from '../../../context/NewsContext';
import NewsCardsHorizontal from '../../../component/news/NewsCardHorizontal/NewsCardHorizontal';

const NewsSeparator = ({ start, end }) => {

    const { newsSeparators } = useNewsContext();
    const newsData = newsSeparators(start, end);
    
    return (
        <div className='newsSeparator'>
            {newsData && newsData.map((news) => (
                <NewsCardsHorizontal key={news._id} news={news} />
            ))}
        </div>
    );
}

export default NewsSeparator;
