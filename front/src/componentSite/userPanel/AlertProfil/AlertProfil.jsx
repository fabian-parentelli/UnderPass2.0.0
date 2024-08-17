import './alertProfil.scss';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AlertsUserVew from '../../../component/alerts/AlertsUserVew/AlertsUserVew';

const AlertProfil = () => {

    const { user } = useLoginContext();

    return (
        <div className='alertProfil'>
            <Title Icon={AccessAlarmsIcon} name='Alertas' goTo='/help' />
            {user && user.data && <AlertsUserVew userId={user.data._id} />}
        </div>
    );
};

export default AlertProfil;