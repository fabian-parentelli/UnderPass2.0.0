import './newApplication.scss';
import { useEffect, useState } from 'react';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import Title from '../../../../component/dashboard/Title/Title';
import Checkboxes from '../../../../component/utils/Checkboxes';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import PostApplication from '../../../../component/advertisting/Applications/PostApplication/PostApplication';

const NewApplication = () => {

    const [user, setUser] = useState(null);
    const [type, setType] = useState('');

    useEffect(() => {
        if (user && type) localStorage.setItem('path', 'dashboard');
    }, [user, type]);

    return (
        <div className='newApplication'>
            <Title Icon={ViewCarousel} name='Solicitar Publicidad' />
            <div className='newApplicationDiv' >
                <UserSearch setUser={setUser} />
                <div className='newApplicationChek'>
                    {user && <Checkboxes labels={['banners', 'cards', 'separator']} setType={setType} />}
                </div>
            </div>

            {user && type && <PostApplication userId={user._id} type={type} country={user.country} />}

        </div>
    );
};

export default NewApplication;