import './cartItems.scss';
import CartBanner from '../CartBanner/CartBanner';

const CartItems = ({ cart }) => {

    if(cart.length === 0) return <p className='cartItemsP'>No hay productos en el carrito...</p>

    return (
        <div className='cartItems'>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 && cart.map((item, index) => (
                        item.is === 'banner' && <CartBanner item={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;