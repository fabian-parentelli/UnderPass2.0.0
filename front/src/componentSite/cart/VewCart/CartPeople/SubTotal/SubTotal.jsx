import './subTotal.scss';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../../../../context/CartContext';
import NumToString from '../../../../../component/utils/NumToString';

const SubTotal = () => {

    const { totalCart, cart } = useCartContext();
    const [isProduct, setIsProduct] = useState();

    useEffect(() => { setIsProduct(cart.some(prod => prod.is === 'product')) }, [cart])

    return (
        <div className='subTotal'>
            <h3>Orden de compra</h3>
            <div className='line' style={{ margin: '.6rem 0' }}></div>

            <div className='subTotalPrice'>
                <p>Total</p>
                <p>${totalCart()}</p>
            </div>

            <NumToString number={totalCart() || 0} />

            {isProduct && <p className='subTotalIsProduct'>La entrega de un producto será coordinada entre el usuario vendedor y el usuario comprador.</p>}
        </div>
    );
};

export default SubTotal;