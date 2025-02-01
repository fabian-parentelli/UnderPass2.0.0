import './vewCart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems/CartItems';
import Load from '../../../component/utils/Load.jsx';
import CartPeople from './CartPeople/CartPeople.jsx';
import { useCartContext } from "../../../context/CartContext";
import { deleteAllShiftsApi } from '../../../helpers/shift/deleteAllShifts.api.js';

const VewCart = () => {

    const { cart, emptyCart } = useCartContext();
    const [loading, setLoading] = useState(false);

    const handleDeleteAll = async () => {
        const isShift = cart.filter(car => car.is === 'shift');
        if(isShift.length < 1) return emptyCart();
        else {
            setLoading(true);
            const ids = isShift.map(shi => shi._id);
            const response = await deleteAllShiftsApi({ ids: ids });
            if (response.status === 'success') emptyCart();
            else console.error(response.error);
            setLoading(false);
        };
    };

    return (
        <div className="vewCart">
            <h2>Tu Carrito</h2>
            <div className='vewCartDivStart'>
                <p className='deletCart' onClick={handleDeleteAll}>Eliminar carrito</p>
                <p>{cart.length} Items</p>
                <Link to={'/help'} style={{ color: '#f45c14', textDecoration: 'none' }}><p>Ayuda</p></Link>
            </div>
            <div className='line'></div>

            <div className='vewCartChekout'>
                <CartItems cart={cart} />
                <CartPeople />
            </div>
            
            <Load loading={loading} />
        </div>
    );
};

export default VewCart;