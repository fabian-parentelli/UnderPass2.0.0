import './vewCart.scss';
// import CartItems from './CartItems/CartItems';
import { useCartContext } from "../../../context/CartContext";
// import CartPeople from './CartPeople/CartPeople';

const VewCart = () => {

    const { cart, emptyCart } = useCartContext();

    return (
        <div className="vewCart">
            <h2>Tu Carrito</h2>
            <div className='vewCartDivStart'>
                <p className='deletCart' onClick={() => emptyCart()}>Eliminar todo el carrito</p>
                <p>{cart.length} </p>
                <p style={{ color: '#f45c14' }}>Ayuda</p>
            </div>
            <div className='line'></div>
            
            <div className='vewCartChekout'>
                {/* <CartItems /> */}
                {/* <CartPeople /> */}
            </div>


        </div>
    );
};

export default VewCart;