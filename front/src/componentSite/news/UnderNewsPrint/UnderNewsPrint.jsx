import './underNewsprint.scss';
import NewsCard from '../../../component/news/NewsCard/NewsCard';
import PublicityCards from '../../../component/publicity/PublicityCards/PublicityCards';
import SeparatorPublicity from '../../../component/publicity/SeparatorPublicity/SeparatorPublicity';

const UnderNewsprint = ({ news }) => {

    return (
        <div className='underNewsprint'>
            {news && news.map((data, index) => (
                data.type === 'news'
                    ? (<NewsCard news={data} key={index} />)
                    : data.type === 'cards' ? (<PublicityCards prod={data} key={index} />)
                    : <SeparatorPublicity prod={data} key={index} />
            ))}
        </div>
    );
};

export default UnderNewsprint;