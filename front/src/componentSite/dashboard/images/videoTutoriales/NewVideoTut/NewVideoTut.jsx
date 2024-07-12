import './newVideoTut.scss';
import { useState } from 'react';
import { newVideoTutApi } from '../../../../../helpers/images/newVideoTut.api.js';


const NewVideoTut = ({ setLoading, setIsNew }) => {

    const [values, setValues] = useState({ name: '', url: '', title: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newVideoTutApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setIsNew(false);
        };
    };

    return (
        <form className='newVideoTut' onSubmit={handleSubmit}>
            <h3>Video Nuevo</h3>

            <div className='newVideoTutDiv'>
                <label>Título</label>
                <input
                    type="text"
                    name='title'
                    placeholder='Nombre del video'
                    onChange={handleChange}
                />
            </div>

            <div className='newVideoTutDiv'>
                <label>Name</label>
                <input
                    type="text"
                    name='name'
                    placeholder='Nombre del video'
                    onChange={handleChange}
                />
            </div>

            <div className='newVideoTutDiv'>
                <label>Url</label>
                <input
                    type="text"
                    name='url'
                    placeholder='link del video'
                    onChange={handleChange}
                />
            </div>

            <button className='btn btnB'>Crear</button>
        </form>
    );
};

export default NewVideoTut;