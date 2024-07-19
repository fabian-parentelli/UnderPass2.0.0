import { useState } from 'react';
import './banner.scss';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import NewBanner from '../NewBanner/NewBanner';
import Load from '../../../../../component/utils/Load';
import VewBanner from '../VewBanner/VewBanner';
import Title from '../../../../../component/dashboard/Title/Title';

const Banner = () => {

    const [vew, setVew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='banner'>
            <Title Icon={ViewCarouselIcon} name='Banners' />

            <button className='btn btnC' onClick={() => setVew(!vew)}>{vew ? 'Ver' : 'Crear'}</button>
            {vew
                ? <NewBanner setLoading={setLoading} setVew={setVew} />
                : <VewBanner setLoading={setLoading} />
            }
            <Load loading={loading} />
        </div>
    );
};

export default Banner;