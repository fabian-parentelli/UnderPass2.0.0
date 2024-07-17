import './userBanner.scss';
import { useLoginContext } from "../../../context/LoginContext";  
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import WantBanner from '../../../component/banner/WantBanner/WantBanner';
import FormWantBanner from '../../../component/banner/FormWantBanner/FormWantBanner';

const UserBanner = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    return (
        <div className='userBanner'>
            <div className='userBannerTitle'>
                <ViewCarouselIcon style={{fontSize: '2rem'}} />
                <h2>Banner</h2>
            </div>
            <div className='line'></div>

            {user && country && <FormWantBanner user={user} country={country} />}
        </div>
    );
};

export default UserBanner;