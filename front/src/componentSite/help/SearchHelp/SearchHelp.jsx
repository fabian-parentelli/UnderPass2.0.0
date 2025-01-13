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
    { label: 'Reservar un producto', data: 'bookingHelp' },
    { label: 'Menu publicitario', data: 'publicityHelp' },
    { label: 'Ver y crear solicitudes publicitarias', data: 'applicationHelp' },
    { label: 'Ver mis publicidades', data: 'publicityVewHelp' },
    { label: 'Ordenes de compra', data: 'orderBuyHelp' },
    { label: 'Ordenes de venta', data: 'orderSellerHelp' },
    { label: 'Crear un evento', data: 'newEventHelp' },
    { label: 'Ver y modificar un evento', data: 'updEventHelp' },
    { label: 'Enlace spotify', data: 'spotifyHelp' },
    { label: 'Crear un sitio web', data: 'siteNewHelp' },
    { label: 'Que es UnderShifts', data: 'shiftWhatIsHelp' },
    { label: 'Como funicona configurar turnos', data: 'shiftConfigHelp' },
    { label: 'Configurar turnos', data: 'shiftConfigDataHelp' },
    { label: 'Administrar turnos', data: 'shiftAdminHelp' },
    { label: 'Ver reservas de clientes turnos', data: 'shiftBookingHelp' },
];