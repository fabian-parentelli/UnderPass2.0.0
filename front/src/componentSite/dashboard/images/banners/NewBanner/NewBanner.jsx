import './newBanner.scss';
import { useState } from 'react';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';
import { newBannerApi } from '../../../../../helpers/images/banners/newBanner.api';

const NewBanner = ({ setLoading, setVew }) => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({ title: 'title', folders: '', links: '', country: '' });

    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for (const field in values) formData.set(field, values[field]);
        const response = await newBannerApi(formData);
        if (response.status === 'success') {
            setLoading(false);
            setVew(false);
        } else console.log(response); setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='newBanner'>
            <div>
                <label>Titulo</label>
                <input
                    type="text"
                    name='title'
                    required
                    placeholder='Nombre del evento'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Carpeta</label>
                <input
                    type="text"
                    name='folders'
                    required
                    placeholder='Carpeta del evento'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Link</label>
                <input
                    type="text"
                    name='links'
                    required
                    placeholder='Link a donde lo quieres dirigir'
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>País</label>
                <select name="country" onChange={handleChange} required>
                    <option value=""></option>
                    <option value="all">Todos</option>
                    <option value="AR">Argentina</option>
                    <option value="UR">Uruguay</option>
                </select>
            </div>

            {values && values.folders &&
                <>
                    <CloudFile onChange={handleFileChange} folderName={`banners/${values.folders}`} contClass='cfRect' />
                    <p>Pixeles Banners 1538*380</p>
                    <p>Pixeles PostCel 1080*1080</p>
                </>
            }

            <button className='btn btnB'>Crear</button>
        </form>
    );
};

export default NewBanner;