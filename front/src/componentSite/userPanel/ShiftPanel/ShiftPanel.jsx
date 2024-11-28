import './shiftPanel.scss';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import ShiftPanels from '../../../component/shift/ShiftPanels/ShiftPanels';

const ShiftPanel = () => {

    const { user } = useLoginContext();

    return (
        <div className='shiftPanel'>
            <Title Icon={DateRangeIcon} name='Turnos' goTo={'/help'} />
            <ShiftPanels userId={user.data._id} />
        </div>
    );
};

export default ShiftPanel;