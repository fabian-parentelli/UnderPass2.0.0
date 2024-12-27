import './sitePageCalendar.scss';
import { Spinner } from 'faradaycomp';
import { useEffect, useState } from 'react';
import ShiftAlmanac from '../../../../component/shift/ShiftAlmanac/ShiftAlmanac';
import { getPublicShiftconfApi } from '../../../../helpers/shiftsconf/getPublicShift.api.js';

const SitePageCalendar = ({ site }) => {

    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPublicShiftconfApi({ userId: site.userId });
            if (response.status === 'success') setConfig(response.result.docs[0]);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    if (loading) {
        return (
            <div className='sitePageCalendarLoad'>
                <Spinner color="#ec3639" size={50} />
            </div>
        );
    };

    return (
        <div className='sitePageCalendar'>
            {config && <ShiftAlmanac config={config} width={1} />}
        </div>
    );
};

export default SitePageCalendar;