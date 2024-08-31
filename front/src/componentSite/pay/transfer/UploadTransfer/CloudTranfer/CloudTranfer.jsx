import './cloudTransfer.scss';
import { useState } from 'react';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';

const CloudTransfer = ({ order }) => {

    const [formData, setFormData] = useState(null);
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.set('userId', order.userId);
        formData.set('orderId', order._id);

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });
    };

    return (
        <form className='cloudTransfer' onSubmit={handleSubmit}>
            <CloudFile onChange={handleFileChange} folderName={'transfer/users'} contClass='cfRect' />
            <button className='btn btnD'>Subir</button>
        </form>
    );
};

export default CloudTransfer;