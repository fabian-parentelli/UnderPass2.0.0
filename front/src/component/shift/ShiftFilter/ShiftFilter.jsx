import './shiftFilter.scss';
import { useEffect, useState } from 'react';
import { daysOfWeek, typeShifts } from '../../../utils/typeShifts.utils.js';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api';
import { getPublicShiftconfApi } from '../../../helpers/shiftsconf/getPublicShift.api.js';
import CheckBoxes2 from '../../utils/CheckBoxes2.jsx';

const ShiftFilter = ({ configs, setConfigs, query, setQuery, setLoading }) => {

    const [type, setType] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response;
            if (localStorage.getItem('token')) response = await getShiftconfApi(query);
            else response = await getPublicShiftconfApi(query);
            if (response.status === 'success') setConfigs(response);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = (e) => setQuery({ ...query, [e.target.name]: e.target.value });
    useEffect(() => { setQuery({ ...query, days: type }) }, [type]);

    return (
        <div className='shiftFilter'>
            {configs &&
                <>
                    <select name="category" className='shiftFilterCategory' onChange={handleChange}>
                        <option value="">Categoría</option>
                        {typeShifts.map((type, ind) => (
                            <option key={ind} value={type.value}>{type.type}</option>
                        ))}
                    </select>

                    <section className='shiftFilterDays'>
                        <details>
                            <summary>Días</summary>
                            <div className='shiftFilterDaysDiv'>
                                <CheckBoxes2 labels={daysOfWeek} setType={setType} multiselect={true} />
                            </div>
                        </details>
                    </section>
                </>
            }
        </div>
    );
};

export default ShiftFilter;