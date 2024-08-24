import './bannerBody.scss';
import { useEffect, useState } from 'react';
import Carousel from '../../../component/utils/Carousel/Carousel.jsx';
import { getBannerToBodyApi } from '../../../helpers/publicity/getBannerToBody.api.js';

const BannerBody = () => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBannerToBodyApi();
            if (response.status === 'success') {
                let imgs = response.result.docs;
                if (window.innerWidth > 767) imgs = imgs.map((imgObj) => ({ url: imgObj.imgUrl[0], links: imgObj.links }));
                else imgs = imgs.map((imgObj) => ({ url: imgObj.imgUrl[1], links: imgObj.links }));
                setBanners(imgs);
            } else console.log(response);
        };
        fetchData();
    }, []);


    return (
        <div className='bannerBody'>
            {banners.length > 0 && <Carousel items={banners} />}
        </div>
    );
};

export default BannerBody;