import './bodySite.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SiteCard from '../../sites/SiteCard/SiteCard.jsx';
import UnderSiteLog from '../../../component/fonts/UnderSiteLog/UnderSiteLog';
import { getSiteRandomApi } from '../../../helpers/sites/getSiteRandom.api.js';

const BodySite = () => {

    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSiteRandomApi();
            if (response.status === 'success') setSites(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='bodySite'>
            <UnderSiteLog size={4} />
            {/* <section className='bodySiteMap'>
                {sites && sites.map((site) => (
                    <SiteCard site={site} key={site._id} />
                ))}
            </section> */}
            <Link to={'/allsites'} className='bodySiteMore'>Ver mas sitios</Link>
        </div>
    );
};

export default BodySite;