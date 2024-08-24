import './isUserCart.scss';
import SubTotal from '../SubTotal/SubTotal';
import { useEffect, useState } from 'react';
import UserComplete from '../UserComplete/UserComplete';
import { useCartContext } from '../../../../../context/CartContext';
import { newOrdersApi } from '../../../../../helpers/orders/newOrder.api';

const IsUserCart = ({ user, setLoading }) => {

    const { cart } = useCartContext();
    const [values, setValues] = useState({ user: {}, cart: null });

    useEffect(() => {
        const updatedOrder = cart.map((car) => ({
            typeId: car._id,
            is: car.is,
            quantity: car.quantity,
            price: car.price
        }));
        setValues((prevValues) => ({ ...prevValues, cart: updatedOrder }));
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newOrdersApi(values);

        // Respuesta de la base de datos, le envío al usuario el link de pago....
    };

    return (
        <form className='isUserCart' onSubmit={handleSubmit}>
            <SubTotal />
            <UserComplete user={user} setValues={setValues} />
            <button className='btn btnD'>Comprar</button>
        </form>
    );
};

export default IsUserCart;