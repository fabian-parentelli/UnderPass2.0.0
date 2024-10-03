import './underPayFont.scss';
import { Link } from 'react-router-dom';

const UnderPayFont = ({ size, color }) => {

    return (
        <Link to={'/profile/wallet'}
            className='underPayFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Pay</span>
        </Link>
    );
};

export default UnderPayFont;