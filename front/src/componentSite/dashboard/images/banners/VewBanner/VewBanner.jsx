import { useEffect, useState } from 'react';
import PrintBanners from './PrintBanners/PrintBanners';
import SearchBanner from './SearchBanner/SearchBanner';
import Pager from '../../../../../component/utils/Pager/Pager';
import { getAllBannersApi } from '../../../../../helpers/images/banners/getAllBanners.api.js';
import { updBannerActiveApi } from '../../../../../helpers/images/banners/updBannerActive.api.js';

const VewBanner = ({ setLoading }) => {

    const [banners, setBanners] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllBannersApi({});
            if (response.status === 'success') setBanners(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    const HandleChangePage = async (page) => {
        const response = await getAllBannersApi({ page: page });
        if (response.status === 'success') setBanners(response.result);
    };

    const handleActive = async (id) => {
        const response = await updBannerActiveApi(id);
        setLoading(true);
        if (response.status === 'success') {
            const response = await getAllBannersApi({});
            if (response.status === 'success') setBanners(response.result);
            else console.log(response);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <>
            <SearchBanner setBanners={setBanners} setLoading={setLoading} />
            {banners && <PrintBanners banners={banners.docs} setLoading={setLoading} handleActive={handleActive} />}
            {banners && <Pager users={banners} HandleChangePage={HandleChangePage} />}
        </>
    );
};

export default VewBanner;