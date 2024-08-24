import './vewCart.scss';
import CartItems from './CartItems/CartItems';
import { useCartContext } from "../../../context/CartContext";
import CartPeople from './CartPeople/CartPeople.jsx';
import { Link } from 'react-router-dom';

const VewCart = () => {

    const { cart, emptyCart } = useCartContext();

    return (
        <div className="vewCart">
            <h2>Tu Carrito</h2>
            <div className='vewCartDivStart'>
                <p className='deletCart' onClick={() => emptyCart()}>Eliminar todo el carrito</p>
                <p>{cart.length} Items</p>
                <Link to={'/help'} style={{ color: '#f45c14', textDecoration: 'none'}}><p>Ayuda</p></Link>
            </div>
            <div className='line'></div>

            <div className='vewCartChekout'>
                <CartItems cart={cart} />
                <CartPeople />
            </div>

        </div>
    );
};

export default VewCart;