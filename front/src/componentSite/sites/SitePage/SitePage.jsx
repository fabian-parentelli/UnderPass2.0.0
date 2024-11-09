import './sitePage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import { getSiteByLinksApi } from '../../../helpers/sites/getSiteByLink.api.js';
import SiteEventPage from '../sitePageComponents/SitePageEvent/SiteEventPage.jsx';
import SitePagePortal from '../sitePageComponents/SitePagePortal/SitePagePortal.jsx';
import SitePageDescription from '../sitePageComponents/SitePageDescription/SitePageDescription.jsx';
import SitePageSocialMedia from '../sitePageComponents/SitePageSocialMedia/SitePageSocialMedia.jsx';
import SitePageCast from '../sitePageComponents/SitePageCast/SitePageCast.jsx';
import SitePageDiscography from '../sitePageComponents/SitePageDiscography/SitePageDiscography.jsx';

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
            {site &&
                <>
                    <SitePagePortal site={site} />
                    {site.isEvent && <SiteEventPage site={site} />}
                    <SitePageDescription site={site} />
                    <SitePageSocialMedia site={site} />
                    <SitePageCast site={site} />
                    {site.isDiscography && <SitePageDiscography site={site} />}
                </>
            }
            <Load loading={loading} />
        </div>
    );
};

export default SitePage;