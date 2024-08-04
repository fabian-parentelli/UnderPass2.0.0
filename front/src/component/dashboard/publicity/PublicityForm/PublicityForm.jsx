import './publicityForm.scss';
import { useState } from 'react';
import DateConf from '../../../utils/DateConf/DateConf'
import CloudFile from '../../../utils/CloudFile/CloudFile';
import CategorySelected from '../../banner/CategorySelected/CategorySelected';
import CountrySelected from '../../banner/CountrySelected/CountrySelected';
import { newPublicityApi } from '../../../../helpers/publicity/newPublicity.api';

const PublicityForm = ({ type, setLoading, setType }) => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({
        title: '', folders: '', links: '', country: '', category: '', type: type
    });

    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for (const field in values) formData.set(field, values[field]);
        const response = await newPublicityApi(formData);
        if (response.status === 'success') {
            setType('');
        } else console.log(response); setLoading(false);
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='publicityForm'>
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
                    <CloudFile onChange={handleFileChange} folderName={`publicity/${type}/${values.folders}`} contClass='cfRect' />
                </>
            }

            <button className='btn btnB'>Crear</button>
        </form>
    );
};

export default PublicityForm;