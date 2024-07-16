import { useState } from 'react';
import './formDUB.scss';

const FormDUB = ({ setValues, setIsUser }) => {

    const country = localStorage.getItem('country');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes('.')) {
            const [parentKey, childKey] = name.split('.');
            setValues(prevState => ({ ...prevState, [parentKey]: { ...prevState[parentKey], [childKey]: value } }));
        } else setValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleForm = (e) => {
        e.preventDefault()
        setIsUser(true);
    };

    return (
        <form className='formDUB' onSubmit={handleForm}>
            <p>Si no quieres iniciar sesión, puedes ingresar tu datos aquí.</p>
            <div>
                <label>Nombre</label>
                <input type="text" name='name' onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name='email' onChange={handleChange} required />
            </div>
            <div>
                <label>{country === 'AR' ? 'Provincia' : 'Departamento'}</label>
                <input type="text" name='location.province' onChange={handleChange} required />
            </div>
            <div>
                <label>Ciudad</label>
                <input type="text" name='location.city' onChange={handleChange} required />
            </div>
            <button className='btn btnC'>Continuar</button>
        </form>
    );
};

export default FormDUB;