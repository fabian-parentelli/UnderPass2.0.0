import './body.scss';
import { useState } from 'react';
import PreBody from './PreBody/PreBody';
import MainBody from './MainBody/MainBody';

const Body = () => {

    const [country, setCoutry] = useState(localStorage.getItem('country') || '');

    return (
        <div className='body'>
            { !country 
                ? <PreBody setCoutry={setCoutry} />
                : <MainBody />
            }
        </div>
    );
};

export default Body;