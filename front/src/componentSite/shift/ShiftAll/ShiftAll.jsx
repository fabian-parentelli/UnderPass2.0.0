import './shiftAll.scss';
import { useState } from 'react';
import ShiftCard from '../ShiftCard/ShiftCard';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import ShiftFilter from '../../../component/shift/ShiftFilter/ShiftFilter';
import UnderShiftsFont from '../../../component/fonts/UnderShiftsFont/UnderShiftsFont';

const ShiftAll = () => {

    const [configs, setConfigs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({ country: localStorage.getItem('country'), active: true });

    const HandleChangePage = (pager) => setQuery({ ...query, page: pager });

    return (
        <div className='shiftAll'>

            <section className='shiftAllTitle'>
                <UnderShiftsFont size={3} />
            </section>

            <section className='shiftAllFilter'>
                <ShiftFilter
                    configs={configs} setConfigs={setConfigs}
                    query={query} setQuery={setQuery}
                    setLoading={setLoading}
                />
            </section>

            <section className='shiftAllCards'>
                {configs && configs?.docs && configs?.docs.length > 0 && configs?.docs.map((conf, ind) => (
                    <ShiftCard shift={conf} key={ind} />
                ))}
            </section>

            {configs && <Pager users={configs} />}
            <Load loading={loading} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default ShiftAll;