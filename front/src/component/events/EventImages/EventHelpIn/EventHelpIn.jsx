import './eventHelpIn.scss';
import UnderEventsLog from '../../../fonts/UnderEventsLog/UnderEventsLog';

const EventHelpIn = () => {

    return (
        <div className='eventHelpIn'>
            <h3>Banner</h3>
            <p>Puedes subir tu propio Banner</p>

            <div className='eventHelpInImgs'>
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728590961/help/vcipr7nxqnfero6jfrng.png" alt="imgA" />
                <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728590960/help/v0fligydridisby9xctl.png" alt="imgB" />
            </div>

            <p className='eventHelpInPBootom'>O puedes utilizar alguno de nuestros pre-set.</p>

            <div className='eventHelpInLogo'>
                <UnderEventsLog size={3} />
            </div>
        </div>
    );
};

export default EventHelpIn;