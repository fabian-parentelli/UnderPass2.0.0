import './amountsCards.scss';
import flagsIcon from '../../../../utils/flagsIcon.utils.js';
import { Link } from 'react-router-dom';


const AmountsCards = ({ title, arg, uru, link }) => {

    return (
        <Link to={`/dashboard/${link}`} className='amountsCards'>
            <h3>{title}</h3>
            <div>
                <img src={flagsIcon.ar} alt="img" />
                <p>Argentina: {arg}</p>
            </div>
            <div>
                <img src={flagsIcon.uy} alt="img" />
                <p>Uruguay: {uru}</p>
            </div>
            <div className='line'></div>
            <p className='panelUserTotal'>Total: {arg + uru}</p>
        </Link>
    );
};

export default AmountsCards;