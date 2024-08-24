import './subTotal.scss';
import { useCartContext } from '../../../../../context/CartContext';

const SubTotal = () => {

    const { totalCart, cart } = useCartContext();

    console.log(cart);
    

    return (
        <div className='subTotal'>
            <h3>Orden de compra</h3>
            <div className='line' style={{margin: '.6rem 0'}}></div>
            <div>
                <p>Total</p>
                <p>${totalCart()}</p>
            </div>
        </div>
    );
};

export default SubTotal;