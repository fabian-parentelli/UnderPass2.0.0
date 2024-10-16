import './updUploadEventImg.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { postEventImgApi } from '../../../../helpers/event/postEventImg.api.js';

const UpdUploadEventImg = ({ event, closedImg, setEvents, events }) => {

    const [formData, setFormData] = useState(null);
    const handleFileChange = (data) => setFormData(data);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const obj = { _id: event._id };
        for (const field in obj) formData.set(field, obj[field]);
        const response = await postEventImgApi(formData);
        if (response.status === 'success') {
            const data = { ...events };
            const index = data.docs.findIndex(i => i._id === event._id);
            data.docs[index] = response.result;
            setEvents(data);
            closedImg();
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <form className='updUploadEventImg' onSubmit={handleSubmit}>
            {loading
                ? <div className='updUploadEventImgSpinner'>
                    <Spinner color={'#383f84'} />
                </div>
                : <>
                    <p>Subir imágen</p>
                    <CloudFile onChange={handleFileChange} folderName={`event/${event._id}`} contClass='cfRect' />
                    <p>Medidas 220px por 220px (Medidas de un post de Instagrame)</p>
                    <button className='btn btnB' disabled={!formData}>Subir Img</button>
                </>
            }
        </form>
    );
};

export default UpdUploadEventImg;