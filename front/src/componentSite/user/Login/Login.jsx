import './login.scss';
import { useEffect, useState } from 'react';
import Load from '../../../component/utils/Load';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';
import SnackbarAlert from '../../../component/utils/SnackbarAlert';

const Login = () => {

    const { login, loading, user } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(values);
    };

    useEffect(() => {
        if (user.logged) {
            setMessage({ status: 'success', mess: 'Inicio de sesión exitoso' });
            setOpen(true);
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else setTimeout(() => { navigate('/') }, 2000);
        };
        if (user.error) {
            setMessage({ status: 'error', mess: user.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
    }, [user])

    return (
        <>
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <h2>Iniciar sesión en <span>UnderPass</span></h2>
                    <div>
                        <label>Email</label>
                        <input
                            placeholder='ejemplo@gmail.com'
                            type="email"
                            name='email'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            placeholder='contraseña1234'
                            type="password"
                            name='password'
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className='btn btnD'>Iniciar sesión</button>
                    <div className='loginLinck'>
                        <Link to={'/register'} className='logPLinck'>Regístrate</Link>
                        <Link to={'/what_email'} className='logPLinck'>Recuperar contraseña</Link>
                    </div>
                </form>
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720552006/images/vknkqdivvquluy0cgqe6.png" alt="img" />
            </div>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default Login;