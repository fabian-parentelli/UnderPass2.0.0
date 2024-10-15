import './underEventFont.scss';
import { Link } from 'react-router-dom';

const UnderEventFont = ({ size, color }) => {

    return (
        <Link to={'/event'}
            className='underEventFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Events</span>
        </Link>
    );
};

export default UnderEventFont;