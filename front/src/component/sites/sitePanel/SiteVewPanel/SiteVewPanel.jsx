import { useEffect, useState } from 'react';
import SitesForm from '../../SitesForm/SitesForm';
import { getSiteByUserIdApi } from '../../../../helpers/sites/getSiteByUserId.api.js';

const SiteVewPanel = ({ userId, setLoading }) => {

    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByUserIdApi(userId);
            if (response.status === 'success') setSites(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <>
            {sites && <SitesForm sites={sites} />}
        </>
    );
};

export default SiteVewPanel;