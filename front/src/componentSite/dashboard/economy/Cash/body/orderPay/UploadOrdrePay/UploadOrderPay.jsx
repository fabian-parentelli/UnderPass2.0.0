import './uploadOrderPay.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudFile from '../../../../../../../component/utils/CloudFile/CloudFile';
import { newTransferPayApi } from '../../../../../../../helpers/transferPay/newTransferPay.api';

const UploadOrderPay = ({ selectedIds, setLoading }) => {

    const [values, setValues] = useState({
        ordersId: selectedIds, operation: '', accountHolder: '', customer: '', bank: '', date: '', total: ''
    });
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        for(const filed in values) formData.set(filed, values[filed]);
        const response = await newTransferPayApi(formData);
        if(response.status === 'success') navigate(-1);
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <form className='uploadOrderPay' onSubmit={handleSubmit}>

            <div className='uploadOrderPayFile'>
                <h2>Subir comprobante de pago</h2>
                <CloudFile onChange={handleFileChange} folderName='transfer/admin' contClass='cfRect' />
                <button className='btn btnD'>Subir</button>
            </div>

            <div className='uploadOrderPayData'>
                <h3>Completar datos</h3>
                <div>
                    <label>N° de operación</label>
                    <input type="text" name='operation' onChange={handleChange} required />
                </div>

                <div>
                    <label>Emisor</label>
                    <input type="text" name='accountHolder' onChange={handleChange} required />
                </div>

                <div>
                    <label>Reseptor</label>
                    <input type="text" name='customer' onChange={handleChange} required />
                </div>

                <div>
                    <label>Entidad del envío</label>
                    <input type="text" name='bank' placeholder='Billetera, banco' onChange={handleChange} required />
                </div>

                <div>
                    <label>fecha</label>
                    <input type="date" name='date' onChange={handleChange} required />
                </div>

                <div>
                    <label>Importe</label>
                    <input type="number" name='total' placeholder={'Total'} onChange={handleChange} required />
                </div>
            </div>

        </form>
    );
};

export default UploadOrderPay;