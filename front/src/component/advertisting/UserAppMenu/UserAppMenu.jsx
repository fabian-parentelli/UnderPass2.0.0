import './userAppMenu.scss';
import { useState } from 'react';
import { imgages } from '../../../utils/imagesData.utils.js';
import Applications from '../Applications/Applications.jsx';

const UserAppMenu = ({ userId, country }) => {

    const [vewBtn, setVewBtn] = useState('');

    const handleClick = (btn) => {
        if (btn == vewBtn) setVewBtn('');
        else setVewBtn(btn);
    };

    return (
        <div className='userApplication'>
            <div className='advertisingBtn'>
                <button
                    className='btn btnC btnShower'
                    style={{ boxShadow: vewBtn === 'application' && 'none' }}
                    onClick={() => handleClick('application')}
                >Solicitudes</button>
                <button
                    className='btn btnB btnShower'
                    style={{ boxShadow: vewBtn === 'advertisting' && 'none' }}
                    onClick={() => handleClick('advertisting')}
                >Publicidades</button>
            </div>

            {vewBtn === '' && <img className='advertisingImg' src={imgages.applications} alt="img" />}
            {vewBtn === 'application' && <Applications userId={userId} country={country} />}
        </div>
    );
};

export default UserAppMenu;