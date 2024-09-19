import { recoverTokenApi } from '../../../../helpers/token/recoverToken.api';
import './createToken.scss';
import { useState } from 'react';

const CreateToken = () => {

    const [values, setValues] = useState({ email: '', password: '' });
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await recoverTokenApi(values);
        console.log(response);
        

    };

    return (
        <form className='createToken' onSubmit={handleSubmit}>
            <h2>Clave Token</h2>

            <div className='createTokenDiv'>
                <label>Escribe tu email</label>
                <input type="text" name='email' required onChange={handleChange} />
            </div>

            <div className='createTokenDiv'>
                <label>Escribe tu contraseña de usuario</label>
                <input type="password" name='password' required onChange={handleChange} />
            </div>

            <button className='btn btnB createTokenBtn'>Enviar</button>
        </form>
    );
};

export default CreateToken;