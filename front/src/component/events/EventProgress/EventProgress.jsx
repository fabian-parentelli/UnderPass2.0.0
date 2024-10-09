import './eventProgress.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const EventProgress = ({ progres, setProgres, lsEvent }) => {

    const handleMoreProgres = () => { if (lsEvent && progres < 100) setProgres(progres + 20) };
    const handleMinorProgres = () => { if (progres > 25) setProgres(progres - 20) };

    return (
        <div className='eventProgress'>

            <div className='eventProgressDivIcon'>

                <div onClick={handleMinorProgres} className='eventProgressArrow'>
                    <NavigateBeforeIcon />
                </div>

                <div className='eventProgressDivDivIcon'>
                    <p style={{color: progres >= 20 && '#383f84'}}>Info.</p>
                    <p style={{color: progres >= 40 && '#383f84'}}>Imágen</p>
                    <p style={{color: progres >= 60 && '#383f84'}}>Localización</p>
                    <p style={{color: progres >= 80 && '#383f84'}}>Entradas</p>
                    <p style={{color: progres === 100 && '#383f84'}}>Confirmar</p>
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
