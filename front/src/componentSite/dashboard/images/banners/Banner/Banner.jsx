import { useState } from 'react';
import './banner.scss';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import NewBanner from '../NewBanner/NewBanner';
import Load from '../../../../../component/utils/Load';
import ScrollToTop from '../../../../../component/utils/ScrollToTop';

const Banner = () => {

    const [vew, setVew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='banner'>
            <div className='bannerTitle'>
                <ViewCarouselIcon style={{ fontSize: '2rem' }} />
                <h2>Banners</h2>
            </div>
            <div className='line'></div>

            <button className='btn btnC' onClick={() => setVew(!vew)}>{vew ? 'Ver' : 'Crear'}</button>
            {vew
                ? <NewBanner setLoading={setLoading} setVew={setVew} />
                : 'otra'

                // Estoy aca tengo que mostrar los banners pero tengo que hacer una paginación y un sistema de filtros 
                //
                //
                //
                //---------------------------------------------------------------------------------------------------
            }
            <Load loading={loading} />
        </div>
    );
};

export default Banner;