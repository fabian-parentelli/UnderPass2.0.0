import './confirmPassword.scss';
import ModalCustom from '../ModalCustom/ModalCustom';
import { useState } from 'react';

const ConfirmPassword = ({ modalOpen, setModalOpen, setPassword, handleClick }) => {

    const [values, setValues] = useState('');

    const closeModal = () => setModalOpen(false);

    const handleChange = (e) => {
        setPassword(e.target.value);
        setValues(e.target.value);
    };

    return (
        <ModalCustom modalIsOpen={modalOpen} closeModal={closeModal}>
            <div className='confirmPassword'>
                <h2>Confirmar contraseña</h2>
                <div className='line confirmPasswordLine'></div>
                <input type="text" placeholder='Contraseña' onChange={handleChange} value={values} />

                <button className='btn btnB' onClick={handleClick}>Pagar</button>
            </div>
        </ModalCustom>
    );
};

export default ConfirmPassword;