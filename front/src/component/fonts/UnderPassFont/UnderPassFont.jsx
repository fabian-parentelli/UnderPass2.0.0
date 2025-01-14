import './underPassFont.scss';
import { Link } from 'react-router-dom';

const UnderPassFont = ({ size, color }) => {

    return (
        <Link to={'/'}
            className='underPassFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Pass</span>
        </Link>
    );
};

export default UnderPassFont;