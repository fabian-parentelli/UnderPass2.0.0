import './eventPageTick.scss';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../../../context/CartContext';
import SweetAlert from '../../../../component/utils/SweetAlert';
import { getLastPriceApi } from '../../../../helpers/prices/getLastPrice.api';

const EventPageTick = ({ event }) => {

    const { addToCart, isInCart, updateQuantity } = useCartContext();
    const [price, setPrice] = useState(0);
    const [alert, setAlert] = useState({ vew: false, message: 'Evento agrgado al carrito', icon: 'success' });
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLastPriceApi({ country: localStorage.getItem('country'), name: 'events' });
            if (response.status === 'success') setPrice(response.result.price);
            else setAlert({ vew: true, message: response.error, icon: 'error' });
        }; fetchData();
    })

    const handleChange = (e, tick) => {
        const data = [...tickets];
        const index = data.findIndex(dat => dat._id === tick._id);
        if (index === -1) data.push({ _id: tick._id, quantity: +e.target.value });
        else data[index].quantity = +e.target.value;
        setTickets(data);
    };

    const handleConfirm = () => {
        tickets.forEach((tick) => {
            const ticketInfo = event.ticketInfo.find(ti => ti._id === tick._id);
            const inCart = isInCart(tick._id);
            if (inCart) updateQuantity(tick._id, inCart.quantity + 1);
            else {
                const obj = {
                    _id: tick._id,
                    quantity: tick.quantity,
                    stock: ticketInfo.quantity,
                    price: ticketInfo.price + ((ticketInfo.price * price) / 100),
                    is: 'events',
                    name: `${ticketInfo.description} - ${event.title}`,
                    description: event._id,
                    img: event.photo
                };
                console.log(obj);
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
                // Estoy aca ahota la idea es que se agregue al carrito
            };
        });
    };

    return (
        <div className='eventPageTick'>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de Ticket</th>
                        <th>Valor</th>
                        <th style={{ textAlign: 'right', paddingRight: '20px' }}>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {event && event.ticketInfo.map((tick) => (
                        <tr key={tick._id}>
                            <td>{tick.description}</td>

                            <td style={{ color: tick.quantity <= 0 && 'red' }}>
                                {tick.quantity > 0 ? `$${tick.price}` : 'Agotadas'}
                            </td>

                            <td style={{ textAlign: 'right' }}>
                                <select name="" className='input' onChange={(e) => handleChange(e, tick)}>
                                    {Array.from({ length: Math.min(tick.quantity, 7) }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='eventPageB'>
                <button
                    style={{ backgroundColor: tickets.length < 1 ? 'gray' : '' }}
                    className='btn btnUE'
                    onClick={handleConfirm} disabled={tickets.length < 1}>
                    Comprar
                </button>
            </div>

            {alert.vew && <SweetAlert onClose={alert.vew} message={alert.message} icon={alert.icon} />}
        </div>
    );
};

export default EventPageTick;