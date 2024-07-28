import './isFinancialData.scss';
import { Link } from 'react-router-dom';
import { imgages } from '../../../utils/imagesData.utils.js';
import { useEffect } from 'react';

const IsFinancialData = ({ setPath }) => {

    useEffect(() => { localStorage.setItem('path', setPath); }, []);

    return (
        <div className='isFinancialData'>
            <div>
                <h2>No tienes datos financieros</h2>
                <Link to={'/profile/datauser'}><button className='btn btnD'>Tus Datos</button></Link>
                <p>Para poder cobrar las ventas de tus productos es necesario que proporcioens alguna cuenta bancaria o billetera digital.</p>
            </div>
            <img src={imgages.counter} alt="img" />
        </div>
    );
};

export default IsFinancialData;