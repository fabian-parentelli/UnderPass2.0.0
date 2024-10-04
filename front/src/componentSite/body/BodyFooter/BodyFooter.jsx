import './bodyFooter.scss';
import UnderNewsLog from '../../../component/fonts/UnderNewsLog/UnderNewsLog';
import UnderSiteLog from '../../../component/fonts/UnderSiteLog/UnderSiteLog';
import UnderEventsLog from '../../../component/fonts/UnderEventsLog/UnderEventsLog';
import UnderMarketLog from '../../../component/fonts/UnderMarketLog/UnderMarketLog';
import UnderShiftsLog from '../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const BodyFooter = () => {

    return (
        <div className='bodyFooter'>
            <UnderEventsLog size={2} />
            <UnderMarketLog size={2} />
            <UnderSiteLog size={2} />
            <UnderShiftsLog size={2} />
            <UnderNewsLog size={2} /> 
        </div>
    );
};

export default BodyFooter;