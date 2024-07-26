import './newAvatar.scss';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';
import { useState } from 'react';
import { newAvatarApi } from '../../../../../helpers/images/avatars/newAvatar.api';

const NewAvatar = ({ setLoading, setVew }) => {

    const [values, setValues] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (values) formData.set('name', values);
        const response = await newAvatarApi(formData);
        if (response.status === 'success') setVew(false);
        setLoading(false);
    };

    return (
        <form className='newAvatar' onSubmit={handleSubmit}>

            <div className='newAvatarInp'>
                <label>Nombre</label>
                <input type="text" onChange={handleChange} />
            </div>

            <CloudFile onChange={handleFileChange} folderName='avatars' contClass='cfRect' />

            <button className='btn btnD'>Crear</button>
        </form>
    );
};

export default NewAvatar;