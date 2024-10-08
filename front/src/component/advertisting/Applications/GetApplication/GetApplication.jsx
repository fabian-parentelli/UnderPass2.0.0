import './getApplication.scss';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { getAppliByUserIdApi } from '../../../../helpers/applications/getAppliByUserId.api.js';
import TableVewApplication from '../../../../componentSite/dashboard/application/VewApplication/TableVewApplication/TableVewApplication.jsx';

const GetApplication = ({ userId, setLoading }) => {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAppliByUserIdApi(userId);
            if (response.status === 'success') setApplications({ docs: response.result });
            else console.log('error:', response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = (id) => console.log(id);

    return (
        <div className='getApplication'>
            {applications && <TableVewApplication appli={applications} handleActive={handleActive} />}
        </div>
    );
};

export default GetApplication;