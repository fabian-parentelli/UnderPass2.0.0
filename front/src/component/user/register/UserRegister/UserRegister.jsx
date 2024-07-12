import './userRegister.scss';
import Load from '../../../utils/Load';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../../../utils/SnackbarAlert';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { useLoginContext } from '../../../../context/LoginContext';
import UserFormRegister from '../UserFormRegister/UserFormRegister';

const UserRegister = () => {
    const { register, loading, user } = useLoginContext();
    const [formData, setFormData] = useState(new FormData());
    const [values, setValues] = useState({
        name: '', birthday: '', email: '', password: '', country: localStorage.getItem('country'),
        province: '', city: ''
    });
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (data) => setFormData(data);
    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (const field in values) formData.set(field, values[field]);
        await register(formData);
    };

    useEffect(() => {
        if (user.error) {
            setMessage({ status: 'error', mess: user.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
        if (user.registered) {
            setMessage({ status: 'success', mess: 'Registro exitoso' });
            setOpen(true);
            setTimeout(() => { navigate('/') }, 2000);
        };
    }, [user]);

    return (
        <>
            <form className='userRegister' onSubmit={handleSubmit}>
                <div className='userRegisterImg'>
                    <p>Imagen de Perfil</p>
                    <CloudFile onChange={handleFileChange} folderName='user' contClass='cfCircle' />
                </div>
                <UserFormRegister handleInputChange={handleInputChange} setValues={setValues} />
                <button className='btn btnB'>Registrarte</button>
            </form>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default UserRegister;