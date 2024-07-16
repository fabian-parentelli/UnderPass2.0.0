import './userBanner.scss';
import { useLoginContext } from "../../../context/LoginContext";
import DataUserBanner from './DataUserBanner/DataUserBanner';
import { useEffect, useState } from 'react';

const UserBanner = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');
    const [values, setValues] = useState({
        name: user?.data?.name || '', email: user?.data?.email || '',
        location: {
            province: user?.data?.location?.province || '',
            city: user?.data?.location?.city || '',
            country: user?.data?.location?.country || country,
        }
    });
    const [isUser, setIsUser] = useState(false);

    useEffect(() => { if (user.logged) setIsUser(true) }, []);

    return (
        <div className='userBanner'>
            {!isUser
                ? <DataUserBanner setValues={setValues} setIsUser={setIsUser} />
                : 'Cosa'
            }

            {/* aca tengo que llamar al componente de la creación del banner
                pasar user por parametro 
                country
            */}
        </div>
    );
};

export default UserBanner;