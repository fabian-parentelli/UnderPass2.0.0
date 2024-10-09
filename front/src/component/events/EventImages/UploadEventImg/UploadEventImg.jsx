import './uploadEventImg.scss';
import { useState } from 'react';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { postEventImgApi } from '../../../../helpers/event/postEventImg.api.js';

const UploadEventImg = ({ values, video, setValues, setLoading, setProgres }) => {

    const [formData, setFormData] = useState(null);
    const handleFileChange = (data) => setFormData(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const obj = { _id: values._id };
        if (video) obj.video = video;
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
            <p>Medidas 250px por 400px</p>
            <div className='uploadEventImgDivButton'>
                <p className='btn btnD uploadEventImgB'>Eliminar</p>
                <button className='btn btnB'>Subir Img</button>
            </div>
        </form>
    );
};

export default UploadEventImg;