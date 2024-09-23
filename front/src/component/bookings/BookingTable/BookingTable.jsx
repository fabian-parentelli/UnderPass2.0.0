import './bookingTable.scss';
import { Link } from 'react-router-dom';
import BigImg from '../../utils/BigImg/BigImg';
import { updActiveBookingApi } from '../../../helpers/booking/updActiveBooking.api.js';

const BookingTable = ({ products, setProducts, setLoading }) => {

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveBookingApi(id);
        if (response.status === 'success') {
            const newProducts = [...products];
            const index = newProducts.findIndex(book => book._id === response.result._id);
            newProducts[index] = response.result
            setProducts(prevState => ({ ...prevState, docs: newProducts }));
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='bookingTable'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Producto</th>
                        <th>Fecha</th>
                        <th>Ver</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((prod) => (
                        <tr key={prod._id}>
                            <td><BigImg img={prod.pid.img[0].imgUrl} border={false} /></td>
                            <td>{prod.pid.name}</td>
                            <td>{new Date(prod.date).toLocaleDateString()}</td>
                            <td className='bookingTableBack'>
                                <Link to={`/product/${prod.pid._id}`} className='bookingTableLink'>Ir</Link>
                            </td>
                            <td
                                onClick={() => handleActive(prod._id)}
                                className='bookingTableBack'
                                style={{ color: prod.active ? 'green' : 'red' }}
                            >
                                {prod.active ? 'SI' : 'NO'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;