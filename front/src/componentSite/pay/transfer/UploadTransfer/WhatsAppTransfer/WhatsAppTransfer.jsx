import './whatsAppTransfer.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Copy from '../../../../../component/utils/Copy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLoginContext } from '../../../../../context/LoginContext';
import { newTransferApi } from '../../../../../helpers/transfer/newTransfer.api.js';

const WhatsAppTransfer = ({ order, setLoading, setMessage, setOpen, dataPass }) => {

    const { user, updateUser } = useLoginContext();
    const [phone, setPhone] = useState(user.data.phone || '');
    const navigate = useNavigate();

    const handleChange = (e) => setPhone(e.target.value);
    const handleBlur = async () => await updateUser({ phone: phone, _id: order.userId });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('userId', order.userId);
        formData.set('orderId', order._id);
        formData.set('type', 'whatsapp');
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
        <form className='whatsAppTransfer' onSubmit={handleSubmit}>

            {phone ?
                <div className='whatsAppTransferDiv'>
                    <div className='whatsAppTransferDinIn'>
                        <WhatsAppIcon className='whatsAppTransferIcon' />
                        <a href={`https://wa.me/${dataPass.phone}`} target="_blank">Abrir WhatsApp</a>
                    </div>
                    <div className='whatsAppTransferValues'>
                        <p>+{dataPass.phone}</p>
                        <Copy values={dataPass.phone} />
                    </div>
                </div>
                : <p style={{ textAlign: 'center', color: 'red', fontWeight: '600' }}>Necesitamos asociarte a un número de teléfono.</p>
            }

            <div className='line' style={{ marginTop: '1rem' }}></div>

            <div className='whatsAppTransferPhoneDiv'>
                <h2>Confirma tu número</h2>
                <div>
                    <label>Teélfono</label>
                    <input type="phone" name='phone' value={phone} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <p>Confirma el teléfono desde el cual vas a enviar el comprobante.</p>
                <p>Esto nos facilita encontrarte.</p>
            </div>
            <button className='btn btnA'>Envié solicitud</button>
            <p>Es importante que nos avises que envistes el comprobante con este botón</p>
        </form>
    );
};

export default WhatsAppTransfer;