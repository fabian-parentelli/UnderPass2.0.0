import './endSectiosn.scss'
import { useEffect, useState } from "react";
import { getSiteByLinksApi } from "../../../../helpers/sites/getSiteByLink.api.js";
import SitePageComponents from "../../../../componentSite/sites/sitePageComponents/SitePageComponents";

const EndSections = ({ values }) => {

    const [site, setSite] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSiteByLinksApi(values.link);
            if (response.status === 'success') setSite(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='endSectiosn'>
            {values && <SitePageComponents site={site} />}
        </div>
    );
};

export default EndSections;