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
    // { label: 'Contacto', data: 'contactUs' }, 
    { label: 'Registrarte', data: 'registerHelp' },
    { label: 'Iniciar sesión', data: 'loginHelp' },
    { label: 'Recuperar contraseña', data: 'recoverPassHelp' },
    { label: 'Quiero estar en el banner', data: 'wantBannerHelp' },
    // { label: 'Modificar datos personales', data: 'updDataHelp' },
    // { label: 'Foto de perfil o avatar', data: 'avatarHelp' },
    // { label: 'Datos financieros', data: 'finaceDate' },
    // { label: 'Crear eventos', data: 'newEventHelp' },
    // { label: 'Configurar eventos', data: 'eventProfilHelp' },
    // { label: 'Eliminar entradas', data: 'deleteEventHelp' },
    // { label: 'Modificar entradas', data: 'updTicketHelp' },
    // { label: 'Crear sitio', data: 'newSiteHelp' },
    // { label: 'Modificar sitio web', data: 'updSiteHelp' },
    // { label: 'Desactivar comentarios de tu sitio', data: 'updCommentHelp' }
];