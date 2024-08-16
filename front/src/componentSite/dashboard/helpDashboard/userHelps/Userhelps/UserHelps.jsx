import VewUserHelpDas from '../VewUserHelpDas';
import './userHelps.scss';
import GroupIcon from '@mui/icons-material/Group';


const UserHelps = () => {

    return (
        <div id='userHelpsDas'>
            <div className='imagesTitle'>
                <GroupIcon className='icon' />
                <h2>Usuarios</h2>
            </div>
            <p className='imagesHelpDasP'>Dentro de este input encontraás todo lo referido a usuarios. Podras ver todos los usuarios con distintos filtros de búsqueda, podras modificarle sus datos e incluso seleccionarle su avatar. La idea es poder ayudarlos cuando no pueden completar algun dato.</p>
            <VewUserHelpDas />
        </div>
    );
};

export default UserHelps;