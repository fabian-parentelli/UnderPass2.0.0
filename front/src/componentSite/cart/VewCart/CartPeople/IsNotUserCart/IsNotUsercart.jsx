import './isNotUserCart.scss';
import SubTotal from '../SubTotal/SubTotal';
import { Link } from 'react-router-dom';

const IsNotUserCart = () => {

    localStorage.setItem('path', 'cart');

    return (
        <div className='isNotUserCart'>
            <SubTotal />
            <p className='isNotUserCartP'>Debes registrarte o iniciar sesión, tardarás menos de un minuto</p>

            <div className='isNotUserCartBtn'>
                <Link to={'/login'}><button className='btnCard'>Iniciar sesión</button></Link>
                <Link to={'/register'}><button className='btnCard'>Registrarte</button></Link>
            </div>
        </div>
    );
};

export default IsNotUserCart;