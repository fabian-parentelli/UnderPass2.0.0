import './weHaveSeeYourReq.scss';
import { useEffect, useState } from 'react';
import { getApplicationByIdApi } from '../../../../helpers/applications/getAppById.api.js';
import TableVewApplication from '../../../dashboard/application/VewApplication/TableVewApplication/TableVewApplication';

const WeHaveSeeYourReq = ({ id, setLoading }) => {

    const [application, setApplication] = useState({ docs: [] });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getApplicationByIdApi(id);
            if (response.status === 'success') setApplication({ docs: [ response.result] });
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = (id) => console.log(id);

    return (
        <div className='weHaveSeeYourReq'>
            <p className='weHaveSeeYourReqP'>En un plazo de 48 horas hábiles, te devolveremos una respuesta.</p>
           {application && <TableVewApplication appli={application} handleActive={handleActive} />}
        </div>
    );
};

export default WeHaveSeeYourReq;