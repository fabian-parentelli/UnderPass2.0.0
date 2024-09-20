import './configuration.scss';
import CreateCash from '../CreateCash/CreateCash';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

const Configuration = () => {

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración' />
            <div className='configurationBtn'>
                <CreateCash />
                {/* Buttons */}
            </div>
        </div>
    );
};

export default Configuration;