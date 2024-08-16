import './imagesHelpDas.scss';
import AvataresHelpDas from '../AvataresHelpDas';
import NewEventHelpDas from '../NewEventHelpDas';
import VideoTutHelpDas from '../VideoTutHelpDas';
import ImageIcon from '@mui/icons-material/Image';

const ImagesHelpDas = () => {

    return (
        <div id='images'>
            <div className='imagesTitle'>
                <ImageIcon className='icon' />
                <h2>Imágenes</h2>
            </div>
            <p className='imagesHelpDasP'>Dentro de este input encontraás todo lo referido a imágenes, avatares, eventos, videos tutoriales</p>
            <div className='imagesDiv'>
                <AvataresHelpDas />
                <NewEventHelpDas />
                <VideoTutHelpDas />
            </div>
        </div>
    );
};

export default ImagesHelpDas; 