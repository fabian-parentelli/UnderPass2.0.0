import './newApplication.scss';
import { useEffect, useState } from 'react';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import Title from '../../../../component/dashboard/Title/Title';
import Checkboxes from '../../../../component/utils/Checkboxes';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import FormWantBanner from '../../../../component/banner/FormWantBanner/FormWantBanner';

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
                    {user && <Checkboxes labels={['Banner', 'Publicidad Cards', 'Separador']} setType={setType} />}
                </div>
            </div>

            {user && type === 'Banner' && <FormWantBanner user={user} country={user.country} />}

        </div>
    );
};

export default NewApplication;