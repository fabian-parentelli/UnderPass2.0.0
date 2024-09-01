import './cloudTransfer.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Copy from '../../../../../component/utils/Copy.jsx';
import LoadSmall from '../../../../../component/utils/LoadSmall/LoadSmall';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';
import { newTransferApi } from '../../../../../helpers/transfer/newTransfer.api.js';

const CloudTransfer = ({ order, setLoading, setMessage, setOpen, dataPass }) => {

    const [formData, setFormData] = useState(null);

    const handleFileChange = (data) => setFormData(data);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        formData.set('userId', order.userId);
        formData.set('orderId', order._id);
        formData.set('type', 'ticket');
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
        <form className='cloudTransfer' onSubmit={handleSubmit}>
            <div>
                {dataPass
                    ? <div className='cloudTransferDivData'>
                        <p><strong>Alias:</strong> {dataPass.bankingAlias} <Copy values={dataPass.bankingAlias} /> </p>
                        <p><strong>Entidad:</strong> {dataPass.bank}</p>
                        <p><strong>Titular:</strong> {dataPass.accountHolder}</p>
                    </div>
                    : <LoadSmall />
                }
            </div>
            <CloudFile onChange={handleFileChange} folderName={'transfer/users'} contClass='cfRect' />
            <button className='btn btnD'>Subir</button>
        </form>
    );
};

export default CloudTransfer;