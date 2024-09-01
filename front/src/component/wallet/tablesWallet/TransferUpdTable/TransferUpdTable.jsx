import './transferUpdTable.scss';
import { useState } from 'react';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { updTransferApi } from '../../../../helpers/transfer/updTransfer.api.js';

const TransferUpdTable = ({ transfer, transfers, setTransfers, setLoading }) => {

    const [values, setValues] = useState({
        operation: transfer.data?.operation || '', accountHolder: transfer.data?.accountHolder || '',
        bank: transfer.data?.bank || '', dateData: transfer.data?.dateData || '',
        total: transfer.data?.total || '', country: ''
    });
    const [formData, setFormData] = useState(new FormData());

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        Object.entries(values).forEach(([key, value]) => {
            if (value !== '') formData.append(key, value);
        });
        const response = await updTransferApi(formData, transfer._id);
        if (response.status === 'success') {
            const data = { ...transfers };
            const index = data.docs.findIndex(tr => tr._id === response.result._id);
            if (index !== -1) data.docs[index] = response.result;
            setTransfers(data);
        };
        setLoading(false);
    };

    return (
        <form className='transferUpdTable' onSubmit={handleSubmit}>

            <div style={{ width: '200px' }}>
                <CloudFile onChange={handleFileChange} folderName='transfer/users' />
            </div>

            <div className='transferUpdTableData'>
                <input type="text" name='operation' placeholder='N° de operación' value={values.operation} onChange={handleChange} />
                <input type="text" name='accountHolder' placeholder='Titular de cuenta' value={values.accountHolder} onChange={handleChange} />
            </div>

            <div className='transferUpdTableData'>
                <input type="text" name='bank' placeholder='Titular de cuenta' value={values.bank} onChange={handleChange} />
                <input type="text" name='dateData' placeholder='Fecha de transferecia' value={values.dateData} onChange={handleChange} />
            </div>

            <div className='transferUpdTableData'>
                <input type="text" name='total' placeholder='Saldo transferido' value={values.total} onChange={handleChange} />
                <select name="country" onChange={handleChange}>
                    <option value="">País</option>
                    <option value="UY">Uruguay</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>

            <button className='btn btnB'>Actualizar</button>
        </form>
    );
};

export default TransferUpdTable;