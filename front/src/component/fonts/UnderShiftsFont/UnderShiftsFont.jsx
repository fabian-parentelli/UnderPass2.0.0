import './underShiftsFont.scss';
import { Link } from 'react-router-dom';

const UnderShiftsFont = ({ size, color }) => {

    return (
        <Link to={'/themarket'}
            className='underShiftsFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Shifts</span>
        </Link>
    );
};

export default UnderShiftsFont;