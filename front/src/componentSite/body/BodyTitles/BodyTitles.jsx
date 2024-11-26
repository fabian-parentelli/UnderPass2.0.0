import './bodyTitles.scss';
import UnderEventFont from '../../../component/fonts/UnderEventsFont/UnderEventsFont';
import UnderMarketFont from '../../../component/fonts/UnderMarketFont/UnderMarketFont';
import UnderNewsFont from '../../../component/fonts/UnderNewsFont/UnderNewsFont';
import UnderShiftsFont from '../../../component/fonts/UnderShiftsFont/UnderShiftsFont';
import UnderSiteFont from '../../../component/fonts/UnderSiteFont/UnderSiteFont';

const BodyTitles = () => {

    return (
        <div className='bodyTitles'>
            <UnderEventFont size={1.4} color='true' />
            <UnderMarketFont size={1.4} color='true' />
            <UnderSiteFont size={1.4} color='true' />
            <UnderShiftsFont size={1.4} color='true' />
            <UnderNewsFont size={1.4} color='true' />
        </div>
    );
};

export default BodyTitles;