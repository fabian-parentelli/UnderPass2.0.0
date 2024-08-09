import './applications.scss';
import { useState } from 'react';
import Checkboxes from '../../utils/Checkboxes';
import PostApplication from './PostApplication/PostApplication';

const Applications = ({ userId, country }) => {

    const [vew, setVew] = useState(false);
    const [type, setType] = useState(null);

    return (
        <div className='applications'>
            <div className='applicationsBtn'>
                <button className='btn btnD' onClick={() => setVew(!vew)}>
                    {vew === false ? 'Crear solicitud' : 'Ver solicitud'}
                </button>
                {vew === true &&
                    <div className='applicationsCheck'>
                        <Checkboxes labels={['banners', 'cards', 'separator']} setType={setType} />
                    </div>
                }
            </div>

            {vew && type && <PostApplication userId={userId} type={type} country={country} />}
        </div >
    );
};

export default Applications;