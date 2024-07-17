import './bannerWant.scss';
import { useLoginContext } from '../../context/LoginContext';
import WantBanner from '../../component/banner/WantBanner/WantBanner';
import IsLoggedUrser from '../../component/user/IsLoggedUser/IsLoggedUser';

const BannerWant = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    return (
        <div className='bannerWant'>
            {!user.logged
                ? <IsLoggedUrser setPath='bannerwant' />
                : <WantBanner user={user.data} country={country} />
            }
        </div>
    );
};

export default BannerWant;