import './myBanner.scss';
import CloudFile from '../../../utils/CloudFile/CloudFile';

const MyBanner = ({ handleFileChange, user }) => {

    return (
        <div className='myBanner'>
            <div className='myBannerCloud'>
                <CloudFile onChange={handleFileChange} folderName={`getBanner/${user._id}`} />
                <p>Aqui puedes subir las imagenes al mismo tiempo JPG o PNG.</p>
            </div>
        </div>
    );
};

export default MyBanner;