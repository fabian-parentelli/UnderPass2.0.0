import './bodyEvents.scss';
import UnderEventsLog from '../../../component/fonts/UnderEventsLog/UnderEventsLog';

const BodyEvents = ({ text }) => {

    return (
        <div className='bodyEvents'>
            <UnderEventsLog size={4} />
        </div>
    );
};

export default BodyEvents;