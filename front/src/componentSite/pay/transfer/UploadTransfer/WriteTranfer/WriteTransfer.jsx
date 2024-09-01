import './writeTransfer.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newTransferApi } from '../../../../../helpers/transfer/newTransfer.api.js';

const WriteTransfer = ({ order, setLoading, setMessage, setOpen, dataPass }) => {

    const [values, setValues] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('userId', order.userId);
        formData.set('orderId', order._id);
        formData.set('type', 'write');
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));
        const response = await newTransferApi(formData);
        if (response.status === 'success') {
            setLoading(false);
            setMessage({ status: 'success', mess: 'Comprobante enviado con éxito' });
            setOpen(true);
        } else {
            setLoading(false);
            setMessage({ status: 'error', mess: response.error });
            setOpen(true);
        };
        setTimeout(() => { navigate('/profile/wallet') }, 2000);
    };

    return (
        <form className='writeTransfer' onSubmit={handleSubmit}>
            <h2>Completar los datos</h2>

            <div>
                <label>N° de operación</label>
                <input type="text" name='operation' onChange={handleChange} required />
            </div>

            <div>
                <label>Titular del envío</label>
                <input type="text" name='accountHolder' onChange={handleChange} required />
            </div>

            <div>
                <label>Entidad del envío</label>
                <input type="text" name='bank' placeholder='Billetera, banco' onChange={handleChange} required />
            </div>

            <div>
                <label>fecha</label>
                <input type="date" name='date' placeholder='Billetera, banco' onChange={handleChange} required />
            </div>

            <div>
                <label>Importe</label>
                <input type="number" name='total' placeholder={order.total} onChange={handleChange} required />
            </div>

            <button className='btn btnB'>Enviár</button>
        </form>
    );
};

export default WriteTransfer;