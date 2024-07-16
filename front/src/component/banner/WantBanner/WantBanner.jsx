import FormContact from '../../contact/FormContact/FormContact';
import './wantBanner.scss';

const WantBanner = () => {

    return (
        <div className='wantBanner'>
            <div className='wantBannerDiv'>
                <h2>Quiero estar en el Banner.</h2>
                <form>
                    <FormContact />
                </form>
                
            </div>
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720959207/images/hn8qgjvacj8lxqzuwoyq.png" alt="img" />
        </div>
    );
};

export default WantBanner;