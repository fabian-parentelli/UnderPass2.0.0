import './cartItems.scss';
import { Fragment } from 'react';
import CartCards from '../CartCards/CartCards';
import CartBanner from '../CartBanner/CartBanner';
import CartProduct from '../CartProduct/CartProduct';
import CartAddToPortal from '../CartAddToportal/CartAddToPortal';

const CartItems = ({ cart }) => {

    if (cart.length === 0) return <p className='cartItemsP'>No hay productos en el carrito...</p>

    return (
        <div className='cartItems'>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 && cart.map((item, index) => (
                        <Fragment key={index}>
                            {item.is === 'banners' && <CartBanner item={item} />}
                            {item.is === 'product' && <CartProduct item={item} />}
                            {item.is === 'cards' && <CartCards item={item} />}
                            {item.is === 'cardsMoreTime' && <CartCards item={item} />}
                            {item.is === 'cardsToPortal' && <CartAddToPortal item={item} />}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;