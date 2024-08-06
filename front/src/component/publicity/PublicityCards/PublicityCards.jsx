import './publicityCards.scss';
import { Link } from 'react-router-dom';

const PublicityCards = ({ prod }) => {

    return (
        <Link to={`/${prod.links}`} className='publicityCards'>
            <img className='publicityCardsImg' src={prod.imgUrl[0]} alt="img" />
        </Link>
    );
};

export default PublicityCards;