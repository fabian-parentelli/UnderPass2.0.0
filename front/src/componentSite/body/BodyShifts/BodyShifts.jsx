import './bodyShifts.scss';
import { useEffect, useState } from 'react';
import { genericImages } from '../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../component/fonts/UnderShiftsLog/UnderShiftsLog';
import { getPublicShiftconfApi } from '../../../helpers/shiftsconf/getPublicShift.api.js';
import ShiftBody from '../../shift/ShiftBody/ShiftBody.jsx';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api.js';

const BodyShifts = () => {

    const [shifts, setShifts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let response;
            const query = { country: localStorage.getItem('country'), active: true };
            if (localStorage.getItem('token')) response = await getShiftconfApi(query);
            else response = await getPublicShiftconfApi(query);
            if (response.status === 'success') setShifts(response.result);
        }; fetchData();
    }, []);

    return (
        <div className='bodyShifts'>
            <UnderShiftsLog size={4} />
            {shifts
                ? <ShiftBody shifts={shifts.docs} />
                : <div className='notShift'>
                    <img src={genericImages.notShifts} alt="notShifts" />
                </div>
            }
        </div>
    );
};

export default BodyShifts;