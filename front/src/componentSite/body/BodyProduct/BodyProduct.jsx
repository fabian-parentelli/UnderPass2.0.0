import './bodyProduct.scss';
import { Link } from 'react-router-dom';

const BodyProduct = () => {

    return (
        <div className='bodyProduct'>
            <Link to={'/themarket'} className='theMarkets'><h2>El mercado</h2></Link>
        </div>
    );
};

export default BodyProduct;