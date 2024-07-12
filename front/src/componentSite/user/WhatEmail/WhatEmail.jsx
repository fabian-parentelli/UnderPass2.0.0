import './whatEmail.scss';
import { useState } from 'react';
import Load from '../../../component/utils/Load.jsx';
import SnackbarAlert from '../../../component/utils/SnackbarAlert.jsx';
import { recoverPasswordApi } from '../../../helpers/users/recoverPassword.api.js';

const WhatEmail = () => {

    const [values, setValues] = useState({ email: '' });
    const [messages, setMessages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => setValues({ [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await recoverPasswordApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setMessages(true);
        };
        if (response.error) {
            setLoading(false);
            setMessage({ status: 'error', mess: response.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    const currentUrl = window.location.href;
    const contProfile = currentUrl.includes('profile');

    return (
        <>
            <div className={(contProfile ? 'whatEmail notUp' : 'whatEmail')}>
                <form onSubmit={handleSubmit}>
                    <h2>Recuperar Contraseña</h2>
                    <p>Este paso se hace en dos etapas, en esta etapa incial ingresas tu email</p>
                    <div className='divinput'>
                        <label>¿Cual es tu email?</label>
                        <input
                            type="text"
                            name='email'
                            placeholder='Este campo debe ser completado'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className='btn btnC whatEmailBtn'>Recuperar contraseña</button>
                    {messages && <p className='message'>Revisa tu correo electrónico.<br /> Si no encuentras el correo, revisa tu casilla de spam</p>}
                </form>
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720566745/images/qvatrsn8fukp2jcyag1c.png" alt="flowerHead" />
            </div >
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default WhatEmail;