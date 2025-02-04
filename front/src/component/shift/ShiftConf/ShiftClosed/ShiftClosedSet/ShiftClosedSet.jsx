import './shiftClosedSet.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { updShiftconfActiveApi } from '../../../../../helpers/shiftsconf/updShiftconfActive.api.js';

const ShiftClosedSet = ({ values, setValues, setLoading }) => {

    const [checked, setChecked] = useState(values?.active ?? true);

    useEffect(() => { setChecked(values?.active ?? true) }, [values.active]);

    const handleActive = async (e) => {
        setLoading(true);
        const response = await updShiftconfActiveApi(values._id);
        if (response.status === 'success') {
            const data = { ...values };
            data.active = response.result.active;
            setValues(data);
        } else console.error(response);
        setLoading(false);
    };

    return (
        <div className='shiftClosedSet'>
            <h4>Cerrar gestíon de turnos.</h4>

            <div className='shiftClosedSetSwitch'>
                <p>Cerrado</p>
                <Switch checked={checked} onChange={handleActive} />
                <p>Abierto</p>
            </div>

        </div>
    );
};

export default ShiftClosedSet;