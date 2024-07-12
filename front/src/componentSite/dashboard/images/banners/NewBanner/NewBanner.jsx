import './newBanner.scss';
import { useState } from 'react';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';

const NewBanner = () => {

    const [formData, setFormData] = useState(null);
    const [values, setValues] = useState({ title: 'title', folders: '', links: '' });

    const handleFileChange = (data) => setFormData(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const field in values) formData.set(field, values[field]);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
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

            {values && values.folders &&
                <>
                    <CloudFile onChange={handleFileChange} folderName={`banner/${values.folders}`} contClass='cfRect' />
                    <p>Pixeles Banners 1538*380</p>
                    <p>Pixeles PostCel 1080*1080</p>
                </>
            }

            <button className='btn btnB'>Crear</button>
        </form>
    );
};

export default NewBanner;