import './eventPrint.scss';
import EventCard from '../EventCard/EventCard';
import PublicityCards from '../../publicity/PublicityCards/PublicityCards';
import SeparatorPublicity from '../../publicity/SeparatorPublicity/SeparatorPublicity';

const EventPrint = ({ events }) => {

    return (
        <div className='eventPrint'>
            {events && events.map((data, index) => (
                data.type === 'event'
                    ? (<div key={index} style={{marginTop: '2rem'}}><EventCard card={data} /></div>)
                    : data.type === 'cards' ? (<PublicityCards prod={data} key={index} />)
                    : <SeparatorPublicity prod={data} key={index} />
            ))}
        </div>
    );
};

export default EventPrint;