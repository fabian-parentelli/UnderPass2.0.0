import './HelpDas.scss';
import { useEffect } from 'react';
import SeekHelp from '../SeekHelp/SeekHelp';
import { useLocation } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Title from '../../../../component/dashboard/Title/Title';
import ImagesHelpDas from '../imagesHelps/ImagesHelpDas/ImagesHelpDas';
import UserHelps from '../userHelps/Userhelps/UserHelps';

const HelpDas = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    }, [location]);

    return (
        <div className='HelpDas'>
            <Title Icon={HelpOutlineIcon} name='Ayuda' />
            <SeekHelp />
            <ImagesHelpDas />
            <UserHelps />
        </div>
    );
};

export default HelpDas;