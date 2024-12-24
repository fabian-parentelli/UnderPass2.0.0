import './shiftPage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShiftPageHtml from './ShiftPageHtml.jsx';
import Load from '../../../component/utils/Load.jsx';
import { getShiftconfByIdApi } from '../../../helpers/shiftsconf/getShiftconfById.api.js';

const ShiftPage = () => {

    const { sid } = useParams();
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftconfByIdApi(sid);
            if (response.status === 'success') setConfig(response.result);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <>
            {config && <ShiftPageHtml config={config} />}
            <Load loading={loading} />
        </>
    );
};

export default ShiftPage;