import './panel.scss';
import AmountPanel from '../AmountPanel/AmountPanel.jsx';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Title from '../../../../component/dashboard/Title/Title.jsx';
import AlertsPanel from '../AlertPanel/AlertPnael.jsx';

const Panel = () => {

    return (
        <div className='panel'>
            <Title Icon={DashboardIcon} name='Panel de administración' />
            <AlertsPanel />
            <AmountPanel />
        </div>
    );
};

export default Panel;