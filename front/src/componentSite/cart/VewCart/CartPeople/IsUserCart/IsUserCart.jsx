import './isUserCart.scss';
import TypePay from '../TypePay/TypePay';
import SubTotal from '../SubTotal/SubTotal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserComplete from '../UserComplete/UserComplete';
import { useCartContext } from '../../../../../context/CartContext';
import { newOrdersApi } from '../../../../../helpers/orders/newOrder.api';
import UnderMoney from '../../../../../component/pay/UnderMoney/UnderMoney';

const IsUserCart = ({ user, setLoading }) => {

    const { cart, totalCart } = useCartContext();
    const [values, setValues] = useState({ user: {}, cart: null, typePay: '' });
    const [type, setType] = useState(null);
    const [isUnderPay, setIsUnderPay] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const updatedOrder = cart.map((car) => ({
            typeId: car._id,
            is: car.is,
            quantity: car.quantity,
            price: car.price,
        }));
        setValues((prevValues) => ({ ...prevValues, cart: updatedOrder }));
    }, [cart]);

    useEffect(() => setValues((prevPay) => ({ ...prevPay, typePay: type })), [type]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // const response = await newOrdersApi(values);
        const response = {      // Objeto quemado para hacer Puebasssssssssssss
            "status": "success",
            "result": {
                "active": true,
                "cart": [
                    {},
                    {},
                    {},
                    {}
                ],
                "date": "2024-08-28T18:11:24.111Z",
                "pay": {
                    "isPay": false,
                    "typePay": "Transferencia"
                },
                "total": 31621,
                "userId": "6696b1b4a18c066e4ebfbc0c",
                "__v": 0,
                "_id": "66cf684c7576312f1a4b7990",
                "mercadopago": "https://google.com"
            }
        }
        if (response.status === 'success') {
            if (response.result.pay.typePay === 'UnderPay') navigate(`/underpay/cart/${response.result._id}`);
            if (response.result.pay.typePay === 'Transferencia') navigate(`/transfer/${response.result._id}`);
            if (response.result.pay.typePay === 'Mercado Pago') window.open(response.result.mercadopago, '_blank');
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <form className='isUserCart' onSubmit={handleSubmit}>
            <SubTotal />
            <UserComplete user={user} setValues={setValues} />
            <p style={{ marginTop: '1rem' }}>Forma de pago:</p>
            <div className='isUserCartType'>
                <TypePay setType={setType} />
                <div className='isUserCartTypeMoney'>
                    <p>Saldo:</p>
                    <div style={{ color: isUnderPay && totalCart() < isUnderPay ? 'green' : 'red' }}>
                        <UnderMoney setIsUnderPay={setIsUnderPay} />
                    </div>
                </div>
            </div>
            {type && <p>{typeMessage(type)}</p>}
            <button className='btn btnD' disabled={!type || (type === 'UnderPay' && totalCart() > isUnderPay)}>Comprar</button>

        </form>
    );
};

export default IsUserCart;

function typeMessage(type) {
    const category = {
        'UnderPay': () => { return 'Puedes utilizar el dinero que tengas en la plataforma para hacer un pago.' },
        'Mercado Pago': () => { return 'Tarjetas de crédito o débito mediante Mercado Pago.' },
        'Transferencia': () => { return 'Puedes hacernos una transferencia directamente desde cualquier billetera digital o cuenta bancaria.' },
    };
    return (category[type])();
};