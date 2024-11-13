import './allSites.scss';
import { useState } from 'react';
import SiteCard from '../SiteCard/SiteCard';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import SitesFilter from '../../../component/sites/SitesFilter/SitesFilter';
import UnderSiteLog from '../../../component/fonts/UnderSiteLog/UnderSiteLog';
import UnderSiteFont from '../../../component/fonts/UnderSiteFont/UnderSiteFont';

const AllSites = () => {

    const [loading, setLoading] = useState(false);
    const [sites, setSites] = useState(null);
    const [query, setQuery] = useState({ country: localStorage.getItem('country'), active: true, limit: 32 });

    const handleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='allSites'>
            <UnderSiteFont size={4} />
            <SitesFilter setSites={setSites} query={query} setQuery={setQuery} setLoading={setLoading} />
            <section>
                {sites && sites.docs.map((site) => (
                    <SiteCard site={site} key={site._id} />
                ))}
            </section>
            <Pager users={sites} HandleChangePage={handleChangePage} />

            <div>
                <UnderSiteLog size={3} />
            </div>

            <Load loading={loading} />
        </div>
    );
};

export default AllSites;