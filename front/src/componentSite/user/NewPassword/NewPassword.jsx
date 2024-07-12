import './newPassword.scss';
import Load from '../../../component/utils/Load.jsx';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SnackbarAlert from '../../../component/utils/SnackbarAlert.jsx';
import { newPasswordApi } from '../../../helpers/users/newPassword.api.js';

const NewPassword = () => {

    const [values, setValues] = useState({ password: '', passConfimr: '' });
    const [confirm, setConfirm] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const { token } = useParams();

    useEffect(() => {
        if (values.password !== '' && values.passConfimr !== '' && values.password === values.passConfimr) {
            setConfirm(false)
        } else setConfirm(true);
    }, [values]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        delete values.passConfimr;
        const response = await newPasswordApi(token, values);
        if (response.status === 'success') {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'success', mess: 'Contraseña modificada correctamente' });
            setTimeout(() => { navigate('/login') }, 2000);
        };
        if (response.error) {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'error', mess: response.error });
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    return (
        <div className='newPassword'>
            <form className='formPassword' onSubmit={handleSubmit}>
                <h2>Recuperar Contraseña</h2>
                <p>Escribe una nueva contraseña y confirmala.</p>
                <div className='inputNewPass'>
                    <label>Nueva contraseña</label>
                    <input
                        type="password"
                        name='password'
                        placeholder='Este campo debe ser completado'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='inputNewPass'>
                    <label>Confirma la contraseña</label>
                    <input
                        type='password'
                        name='passConfimr'
                        placeholder='Este campo debe ser completado'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button className='btn' disabled={confirm}>Cambiar Contraseña</button>
                {confirm && <p>Los campos no son iguales</p>}
            </form>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default NewPassword;