import './bannerBody.scss';
import { useEffect, useState } from 'react';
import Carousel from '../../../component/utils/Carousel/Carousel.jsx';
import { getBannerBody } from '../../../helpers/images/banners/getBannerBody.api.js';

const BannerBody = () => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBannerBody();
            if (response.status === 'success') {
                const country = localStorage.getItem('country');
                let imgs = response.result.map((ban) => {
                    if (ban.country === 'all' || ban.country === country) {
                        return { url: ban.imgUrl, links: ban.links };
                    };
                    return null;
                }).filter(Boolean);
                if (window.innerWidth > 767) imgs = imgs.map((imgObj) => ({ url: imgObj.url[0], links: imgObj.links }));
                else imgs = imgs.map((imgObj) => ({ url: imgObj.url[1], links: imgObj.links }));
                setBanners(imgs);
            };
        }; fetchData();
    }, []);

    return (
        <div className='bannerBody'>
            {banners.length > 0 && <Carousel items={banners} />}
        </div>
    );
};

export default BannerBody;
