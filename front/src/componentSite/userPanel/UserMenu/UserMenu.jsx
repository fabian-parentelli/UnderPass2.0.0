import './userMenu.scss';
import { Link } from 'react-router-dom';
import PhotoIcon from '@mui/icons-material/Photo';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const UserMenu = () => {

    return (
        <div className='userMenu'>

            <Link to={'/profile'} className='userMen'>
                <HomeIcon className='icon' />
                <p>Mi perfil</p>
            </Link>

            <Link to={'/profile/wallet'} className='userMen'>
                <LocalAtmIcon className='icon' />
                <p>Billetera</p>
            </Link>

            <Link to={'/profile/commerce_home'} className='userMen'>
                <ListAltIcon className='icon' />
                <p>Ordenes</p>
            </Link>

            <Link to={'/profile/datauser'} className='userMen'>
                <AccountBoxIcon className='icon' />
                <p>Tus Datos</p>
            </Link>
            
            <Link to={'/profile/panelavatar'} className='userMen'>
                <PhotoIcon className='icon' />
                <p>Avatar</p>
            </Link>
            
            <Link to={'/profile/eventmenu'} className='userMen'>
                <TheaterComedyIcon className='icon' />
                <p>Eventos</p>
            </Link>

            <Link to={'/profile/sitepanel'} className='userMen'>
                <LanguageIcon className='icon' />
                <p>Sitio</p>
            </Link>
            
            <Link to={'/profile/productmenu'} className='userMen'>
                <CardGiftcardIcon className='icon' />
                <p>Productos</p>
            </Link>

            <Link to={'/profile/whatyouremail'} className='userMen'>
                <LockIcon className='icon' />
                <p>Contraseña</p>
            </Link>
            
            <Link to={'/profile/advertising'} className='userMen'>
                <LiveTvIcon className='icon' />
                <p>Publicidad</p>
            </Link>
            
            <Link to={'/profile/alerts'} className='userMen'>
                <AccessAlarmsIcon className='icon' />
                <p>Alertas</p>
            </Link>
            
        </div>
    );
};

export default UserMenu;