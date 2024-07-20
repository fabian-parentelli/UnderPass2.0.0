import './vewAllAdvertisting.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { updActiveAppli } from '../../../helpers/applications/updActiveAppli.api.js';
import { getAppliByUserIdApi } from '../../../helpers/applications/getAppliByUserId.api.js';
import TableVewApplication from '../../../componentSite/dashboard/application/VewApplication/TableVewApplication/TableVewApplication.jsx';

const VewAllAdvertisting = ({ id }) => {

    const [appl, setAppl] = useState({ docs: [] });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAppliByUserIdApi(id)
            if (response.status === 'success') setAppl(prevAppl => ({ ...prevAppl, docs: response.result }));
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async (advertId) => {
        setLoading(true);
        const response = await updActiveAppli(advertId);
        if (response.status === 'success') {
            const data = await getAppliByUserIdApi(id);
            if (data.status === 'success') setAppl(prevAppl => ({ ...prevAppl, docs: data.result }));
            else console.log(data);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='vewAllAdvertisting'>
            {appl && <TableVewApplication appli={appl} handleActive={handleActive} />}
            <Load loading={loading} />
        </div>
    );
};

export default VewAllAdvertisting;