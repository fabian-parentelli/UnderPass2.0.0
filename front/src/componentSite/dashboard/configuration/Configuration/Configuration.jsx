import './configuration.scss';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import CreateCash from '../CreateCash/CreateCash';

const Configuration = () => {

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración'  />
            <CreateCash />
        </div>
    );
};

export default Configuration;