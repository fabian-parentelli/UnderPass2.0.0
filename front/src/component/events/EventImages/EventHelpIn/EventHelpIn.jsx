import './eventHelpIn.scss';
import UnderEventsLog from '../../../fonts/UnderEventsLog/UnderEventsLog';

const EventHelpIn = () => {

    return (
        <div className='eventHelpIn'>
            <h3>Banner</h3>
            <p>Puedes subir tu propio Banner</p>

            <div className='eventHelpInImgs'>
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728509314/help/xng2ncv0g57srkce2ftn.png" alt="imgA" />
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728509314/help/pw8gb2yh7badxa0dsgkj.jpg" alt="imgB" />
            </div>

            <p className='eventHelpInPBootom'>O puedes utilizar alguno de nuestros pre-set.</p>

            <div className='eventHelpInLogo'>
                <UnderEventsLog size={3} />
            </div>
        </div>
    );
};

export default EventHelpIn;