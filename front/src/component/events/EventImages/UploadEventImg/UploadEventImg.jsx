import './uploadEventImg.scss';
import { useState } from 'react';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { postEventImgApi } from '../../../../helpers/event/postEventImg.api.js';

const UploadEventImg = ({ values, setValues, setLoading, setProgres }) => {

    const [formData, setFormData] = useState(null);
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = async (e) => {
        e.preventDefault();        
        setLoading(true);
        const obj = { _id: values._id };
        for (const field in obj) formData.set(field, obj[field]);
        const response = await postEventImgApi(formData);
        if (response.status === 'success') {
            setValues(response.result);
            setProgres(60);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <form className='uploadEventImg' onSubmit={handleSubmit}>
            <p>Subir Imágen</p>
            <CloudFile onChange={handleFileChange} folderName={`event/${values._id}`} contClass='cfRect' />
            <p>Medidas 220px por 220px (Medidas de un post de Instagrame)</p>
            <button className='btn btnB' disabled={!formData} >Subir Img</button>
        </form>
    );
};

export default UploadEventImg;