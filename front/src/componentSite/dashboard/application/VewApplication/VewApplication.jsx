import './vewApplication.scss';
import { useEffect, useState } from 'react';
import SearchApp from './SearchApp/SearchApp.jsx';
import Load from '../../../../component/utils/Load.jsx';
import Title from '../../../../component/dashboard/Title/Title';
import Pager from '../../../../component/utils/Pager/Pager.jsx';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TableVewApplication from './TableVewApplication/TableVewApplication';
import { updActiveAppli } from '../../../../helpers/applications/updActiveAppli.api.js';
import { updVewApplicationApi } from '../../../../helpers/applications/updVewApplication.api.js';
import { getAllApplicationApi } from '../../../../helpers/applications/getAllApplicatiosn.api.js';

const VewApplication = () => {

    const [appli, setAppli] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllApplicationApi({});
            if (response.status === 'success') setAppli(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveAppli(id);
        if (response.status === 'success') {
            const data = await getAllApplicationApi({});
            if (data.status === 'success') setAppli(data.result);
            else console.log(data);
        } else console.log(response);
        setLoading(false);
    };

    const handeleVew = async (id) => {
        setLoading(true);
        const response = await updVewApplicationApi(id);
        if (response.status === 'success') {
            const data = await getAllApplicationApi({});
            if (data.status === 'success') setAppli(data.result);
            else console.log(data);
        } else console.log(response);
        setLoading(false);
    };

    const HandleChangePage = async (page) => {
        const response = await getAllApplicationApi({ page: page });
        if (response.status === 'success') setAppli(response.result);
        else console.log(response);
    };

    return (
        <div className='vewApplication'>
            <Title Icon={AccessibilityIcon} name='Ver Solicitudes' />
            <SearchApp setAppli={setAppli} setLoading={setLoading} />
            <TableVewApplication appli={appli} handleActive={handleActive} handeleVew={handeleVew} />
            <Pager users={appli} HandleChangePage={HandleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default VewApplication;