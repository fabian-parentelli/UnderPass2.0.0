import { useState } from 'react';
import './banner.scss';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import NewBanner from '../NewBanner/NewBanner';

const Banner = () => {

    const [vew, setVew] = useState(false);

    return (
        <div className='banner'>
            <div className='bannerTitle'>
                <ViewCarouselIcon style={{ fontSize: '2rem' }} />
                <h2>Banners</h2>
            </div>
            <div className='line'></div>

            <button className='btn btnC' onClick={() => setVew(!vew)}>{vew ? 'Ver' : 'Crear'}</button>
            {vew
                ? <NewBanner />
                : 'otra'
            }
        </div>
    );
};

export default Banner;