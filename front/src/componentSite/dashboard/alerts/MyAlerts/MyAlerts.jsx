import './myAlerts.scss';
import Title from '../../../../component/dashboard/Title/Title';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const MayAlerts = () => {

    return (
        <div className='mayAlerts'>
            <Title Icon={AccessAlarmIcon} name='Mis alertas' />

        </div>
    );
};

export default MayAlerts;