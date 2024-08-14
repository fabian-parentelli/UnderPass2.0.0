import { useEffect, useState } from 'react';
import './separatorPublicity.scss';
import { Link } from 'react-router-dom';

const SeparatorPublicity = ({ prod }) => {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Link to={`/${prod.links}`} className='separatorPublicity'>
            <img
                className='separatorPublicityImg'
                src={viewportWidth > 769 ? prod.imgUrl[0] : prod.imgUrl[1]}
                alt="img"
            />
        </Link>
    );
};

export default SeparatorPublicity;