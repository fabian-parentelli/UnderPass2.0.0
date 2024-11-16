import './allSitesDas.scss';
import { useState } from 'react';
import Load from '../../../../component/utils/Load';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import Title from '../../../../component/dashboard/Title/Title';
import SitesForm from '../../../../component/sites/SitesForm/SitesForm';
import SitesFilter from '../../../../component/sites/SitesFilter/SitesFilter';

const AllSitesDas = () => {

    const [sites, setSites] = useState(null);
    const [query, setQuery] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <div className='allSitesDas'>
            <Title Icon={AdsClickIcon} name='Todos los sitios' />
            <SitesFilter setSites={setSites} query={query} setQuery={setQuery} setLoading={setLoading} />
            {sites && <SitesForm sites={sites.docs} setSites={setSites} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default AllSitesDas;