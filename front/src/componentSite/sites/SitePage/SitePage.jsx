import './sitePage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import { getSiteByLinksApi } from '../../../helpers/sites/getSiteByLink.api.js';
import SitePagePortal from '../sitePageComponents/SitePagePortal/SitePagePortal.jsx';

const SitePage = () => {

    const { link } = useParams();
    const [site, setSite] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByLinksApi(link);
            if (response.status === 'success') setSite(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);
    
    return (
        <div className='sitePage'>
            <SitePagePortal site={site} />
            <Load loading={loading} />
        </div>
    );
};

export default SitePage;