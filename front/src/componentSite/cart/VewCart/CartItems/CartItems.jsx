import './cartItems.scss';
import { Fragment } from 'react';
import CartCards from '../CartCards/CartCards';
import CartBanner from '../CartBanner/CartBanner';
import CartProduct from '../CartProduct/CartProduct';
import CartAddToPortal from '../CartAddToportal/CartAddToPortal';
import CartEvent from '../CartEvent/CartEvent';

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
                            {item.is === 'separator' && <CartCards item={item} />}
                            {item.is === 'moreTime' && <CartCards item={item} />}
                            {item.is === 'toPortal' && <CartAddToPortal item={item} />}
                            {item.is === 'events' && <CartEvent item={item} />}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;