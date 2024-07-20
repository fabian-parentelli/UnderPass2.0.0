import './titleHelp.scss';
import { Link } from 'react-router-dom';

const TitleHelp = ({ title, paragraph, goTo }) => {

    return (
        <div className='titleHelp'>
            <h5>{title}</h5>
            <p>{paragraph}</p>
            <Link to={`/videohelp/${goTo}`} className='videoHelpTitle' >Video tutorial</Link>
        </div>
    );
};

export default TitleHelp;