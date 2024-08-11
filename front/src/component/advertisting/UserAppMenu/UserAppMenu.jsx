import './userAppMenu.scss';
import { useState } from 'react';
import Applications from '../Applications/Applications.jsx';
import { imgages } from '../../../utils/imagesData.utils.js';
import VewPublicityProfil from '../VewPublicityProfil/VewPublicityProfile.jsx';
import Load from '../../utils/Load.jsx';

const UserAppMenu = ({ userId, country }) => {

    const [vewBtn, setVewBtn] = useState('');
    const [loading, setLoading] = useState(false);

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
            {vewBtn === 'application' && <Applications userId={userId} country={country} setLoading={setLoading} />}
            {vewBtn === 'advertisting' && <VewPublicityProfil userId={userId} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default UserAppMenu;