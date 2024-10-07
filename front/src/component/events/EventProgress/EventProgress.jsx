import './eventProgress.scss';
import DvrIcon from '@mui/icons-material/Dvr';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const EventProgress = ({ progres, setProgres }) => {

    const handleMoreProgres = () => { if (progres < 100) setProgres(progres + 25) };
    const handleMinorProgres = () => { if (progres > 25) setProgres(progres - 25) };

    return (
        <div className='eventProgress'>

            <div className='eventProgressDivIcon'>

                <div onClick={handleMinorProgres} className='eventProgressArrow'>
                    <NavigateBeforeIcon />
                </div>

                <div className='eventProgressDivDivIcon'>
                    <div>
                        <FeedIcon className='eventProgressIcon' />
                        <p>Información</p>
                    </div>
                    <div>
                        <ImageIcon className='eventProgressIcon' />
                        <p>Imágenes</p>
                    </div>
                    <div>
                        <ConfirmationNumberIcon className='eventProgressIcon' />
                        <p>Entradas</p>
                    </div>
                    <div>
                        <DvrIcon className='eventProgressIcon' />
                        <p>Entradas</p>
                    </div>
                </div>

                <div onClick={handleMoreProgres} className='eventProgressArrow'>
                    <NavigateNextIcon />
                </div>
            </div>

            <div className='eventProgressStepper' style={{ width: `${progres}%` }}></div>
        </div>
    );
};

export default EventProgress;
