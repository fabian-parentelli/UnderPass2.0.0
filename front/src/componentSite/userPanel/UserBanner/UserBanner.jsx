import './userBanner.scss';
import { useLoginContext } from "../../../context/LoginContext";  
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import FormWantBanner from '../../../component/banner/FormWantBanner/FormWantBanner';
import Title from '../../../component/dashboard/Title/Title';

const UserBanner = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    return (
        <div className='userBanner'>
            <Title Icon={ViewCarouselIcon} name='Solicitar estar en el Banner' />

            {user && country && <FormWantBanner user={user.data} country={country} />}
        </div>
    );
};

export default UserBanner;