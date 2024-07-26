import './amountsCards.scss';
import flagsIcon from '../../../../utils/flagsIcon.utils.js';


const AmountsCards = ({ title, arg, uru }) => {

    return (
        <div className='amountsCards'>
            <h3>{title}</h3>
            <div>
                <img src={flagsIcon.ar} alt="img" />
                <p>Argentina: {arg}</p>
            </div>
            <div>
                <img src={flagsIcon.uy} alt="img" />
                <p>Uruguay: {uru}</p>
            </div>
            <p className='panelUserTotal'>Total: {arg + uru}</p>
        </div>
    );
};

export default AmountsCards;