import './underMarketFont.scss';
import { Link } from 'react-router-dom';

const UnderMarketFont = ({ size, color }) => {

    return (
        <Link to={'/themarket'}
            className='underMarketFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Market</span>
        </Link>
    );
};

export default UnderMarketFont;