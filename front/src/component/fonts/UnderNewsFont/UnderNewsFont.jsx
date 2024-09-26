import './underNewsFont.scss';
import { Link } from 'react-router-dom';

const UnderNewsFont = ({ size, color }) => {

    return (
        <Link to={'/undernews'}
            className='underNewsFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>News</span>
        </Link>
    );
};

export default UnderNewsFont;