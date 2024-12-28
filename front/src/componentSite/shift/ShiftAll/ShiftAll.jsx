import './shiftAll.scss';
import { useState } from 'react';
import UnderShiftsFont from '../../../component/fonts/UnderShiftsFont/UnderShiftsFont';
import ShiftFilter from '../../../component/shift/ShiftFilter/ShiftFilter';
import Load from '../../../component/utils/Load';

const ShiftAll = () => {

    const [configs, setConfigs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({ country: localStorage.getItem('country'), active: true });

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

            <Load loading={loading} />
        </div>
    );
};

export default ShiftAll;