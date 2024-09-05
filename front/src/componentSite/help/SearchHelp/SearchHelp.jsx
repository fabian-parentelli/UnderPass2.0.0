import './searchHelp.scss';
import { useNavigate } from 'react-router-dom';
import AutoComplete from '../../../component/utils/AutoComplete';

const SearchHelp = () => {

    const navigate = useNavigate();
    const handleChange = (e, newValue) => { if (newValue) navigate(`/help#${newValue.data}`) };

    return (
        <div className='searchHelp'>
            <AutoComplete data={data} handleChange={handleChange} />
        </div>
    );
};

export default SearchHelp;

const data = [
    { label: 'Registrarte', data: 'registerHelp' },
    { label: 'Iniciar sesión', data: 'loginHelp' },
    { label: 'Recuperar contraseña', data: 'recoverPassHelp' },
    { label: 'Quiero estar en el banner', data: 'wantBannerHelp' },
    { label: 'Modificar datos del usuario', data: 'yourDataHelp' },
    { label: 'Modificar avatar', data: 'avatarHelp' },
    { label: 'Crear un producto', data: 'newProductHelp' },
    { label: 'Ver y modificar un producto', data: 'vewProductHelp' },
    { label: 'Menu publicitario', data: 'publicityHelp' },
    { label: 'Ver y crear solicitudes publicitarias', data: 'applicationHelp' },
    { label: 'Ver mis publicidades', data: 'publicityVewHelp' },
];