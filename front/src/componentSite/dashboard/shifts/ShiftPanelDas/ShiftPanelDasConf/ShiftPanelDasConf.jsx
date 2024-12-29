import './shiftPanelDasConf.scss';
import { useState } from 'react';
import Pager from '../../../../../component/utils/Pager/Pager';
import ShiftFilter from '../../../../../component/shift/ShiftFilter/ShiftFilter';
import ShiftPanelDasConfTable from '../ShiftPanelDasConfTable/ShiftPanelDasConfTable';
import { updShiftconfActiveApi } from '../../../../../helpers/shiftsconf/updShiftconfActive.api.js';

const ShiftPanelDasConf = ({ query, setQuery, setLoading }) => {

    const [configs, setConfigs] = useState(null);
    const HandleChangePage = (pager) => setQuery({ ...query, page: pager });

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updShiftconfActiveApi(id);
        if (response.status === 'success') {
            const result = { ...configs };
            const index = result.docs.findIndex(doc => doc._id === id);
            result.docs[index].active = response.result.active;
            setConfigs(result);
        } else console.error(response);
        setLoading(false);
    };

    return (
        <div className='shiftPanelDasConf'>

            <section className='shiftPanelDasConfFilter'>
                <ShiftFilter
                    configs={configs} setConfigs={setConfigs}
                    query={query} setQuery={setQuery}
                    setLoading={setLoading}
                />
            </section>

            {configs && configs.docs &&
                <ShiftPanelDasConfTable configs={configs.docs} handleActive={handleActive} />
            }

            <Pager users={configs} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default ShiftPanelDasConf;