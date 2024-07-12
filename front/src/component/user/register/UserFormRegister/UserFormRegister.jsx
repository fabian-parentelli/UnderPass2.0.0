import './userFormRegister.scss';
import DateConf from '../../../utils/DateConf/DateConf';

const UserFormRegister = ({ handleInputChange, setValues }) => {

    const country = localStorage.getItem('country');

    return (
        <div className='userFormRegister'>
            <input
                type="text"
                name='name'
                placeholder='Nombre completo'
                required
                onChange={handleInputChange}
            />
            <div className='userFormRegisterBirthday'>
                <DateConf setValues={setValues} />
            </div>
            <input
                type="email"
                name='email'
                placeholder='Correo electrónico'
                required
                onChange={handleInputChange}
            />
            <input
                type="password"
                name='password'
                placeholder='Contraseña'
                required
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='province'
                placeholder={country === 'AR' ? 'Provincia' : 'Departamento'}
                required
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='city'
                placeholder='Ciudad'
                required
                onChange={handleInputChange}
            />
            <p>En el caso de vivir en Capital, colocar el barrio</p>
        </div>
    );
};

export default UserFormRegister;