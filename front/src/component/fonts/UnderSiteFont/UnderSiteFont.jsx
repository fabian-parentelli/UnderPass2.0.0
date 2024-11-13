import './underSiteFont.scss';
import { Link } from 'react-router-dom';

const UnderSiteFont = ({ size, color }) => {

    return (
        <Link to={'/allsites'}
            className='underSiteFont'
            style={{ fontSize: `${size}rem`, color: color === 'true' ? '#fbdca8' : '#242424' }}
        >
            Under<span>Site</span>
        </Link>
    );
};

export default UnderSiteFont;