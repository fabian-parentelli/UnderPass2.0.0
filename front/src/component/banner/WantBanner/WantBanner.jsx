import './wantBanner.scss';
import FormWantBanner from '../FormWantBanner/FormWantBanner';

const WantBanner = ({ user, country }) => {

    return (
        <div className='wantBanner'>
            <div className='wantBannerDiv'>
                <h2>Quiero estar en el Banner.</h2>
                {user && country && <FormWantBanner user={user} country={country} />}
            </div>
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720959207/images/hn8qgjvacj8lxqzuwoyq.png" alt="img" />
        </div>
    );
};

export default WantBanner;