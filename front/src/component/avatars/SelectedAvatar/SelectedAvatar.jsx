import './selectedAvatar.scss';
import PreAvatar from './PreAvatar';
import { useEffect, useState } from 'react';
import UploadAvatar from '../uploadAvatar/uploadAvatar';

const SelectedAvatar = ({ user }) => {

    const [vew, setVew] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => { setImage(user.avatar[0]) }, [user]);

    return (
        <div className='selectedAvatar'>

            <div className='selectedAvatarBtn'>
                {image && <img src={image} alt="img" />}
                <button className='btn btnC' onClick={() => setVew(false)} >Avatars</button>
                <button className='btn btnC' onClick={() => setVew(true)} >Subir Img</button>
            </div>

            {!vew
                ? <PreAvatar id={user._id} setImage={setImage} />
                : <UploadAvatar id={user._id} setImage={setImage} />
            }

        </div>
    );
};

export default SelectedAvatar;