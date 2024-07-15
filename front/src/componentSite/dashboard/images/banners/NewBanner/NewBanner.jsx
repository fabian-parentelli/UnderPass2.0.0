import './newBanner.scss';
import { useState } from 'react';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';
import { newBannerApi } from '../../../../../helpers/images/banners/newBanner.api';
import CategorySelected from '../../../../../component/dashboard/banner/CategorySelected/CategorySelected';
import CountrySelected from '../../../../../component/dashboard/banner/CountrySelected/CountrySelected';
import DateConf from '../../../../../component/utils/DateConf/DateConf';

const NewBanner = ({ setLoading, setVew }) => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({ 
        title: 'title', folders: '', links: '', country: '', category: '', 
    });

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
                <CountrySelected handleChange={handleChange} />
            </div>
            
            <div>
                <CategorySelected handleChange={handleChange} />
            </div>

            <div className='newBannerEnd'>
                <label>Cierre programado</label>
                <DateConf setValues={setValues} isRequired={false} />
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