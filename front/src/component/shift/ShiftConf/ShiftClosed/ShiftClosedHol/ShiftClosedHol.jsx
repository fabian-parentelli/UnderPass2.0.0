import './shiftClosedHol.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import SnackbarAlert from '../../../../utils/SnackbarAlert.jsx';
import { updShiftConfHolApi } from '../../../../../helpers/shiftsconf/updShiftConfHol.js';

const ShiftClosedHol = ({ values, setLoading }) => {

    const [holidays, setHolidays] = useState({
        configId: '', isHolidays: false, holdaysOn: '', holdaysOff: ''
    });
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (values._id) {
            setHolidays({
                configId: values._id,
                isHolidays: values.holidays || false,
                holdaysOn: values.holidaysDate.holdaysOn ? new Date(values.holidaysDate.holdaysOn).toISOString().split('T')[0] : '',
                holdaysOff: values.holidaysDate.holdaysOff ? new Date(values.holidaysDate.holdaysOff).toISOString().split('T')[0] : '',
            });
        };
    }, [values]);

    const handleChange = (e) => setHolidays({ ...holidays, [e.target.name]: e.target.value });

    const handleActive = async (e) => {
        setHolidays({ ...holidays, isHolidays: e.target.checked });
        if (!e.target.checked) {
            setLoading(true);
            await updShiftConfHolApi({ configId: values._id, isHolidays: false, holdaysOn: '', holdaysOff: '' });
            setMessage({ status: 'success', mess: 'Vacaciones canceladas, que lastima !!!' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 3000);
            setLoading(false);
        };
    };

    const handleSubmit = async () => {
        if (!holidays.holdaysOn || !holidays.holdaysOff) {
            setMessage({ status: 'error', mess: 'Debes Completar la fecha de "Desde" y "Hasta"' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 3000);
            return;
        };
        setLoading(true);
        const response = await updShiftConfHolApi(holidays);
        console.log(response);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Vacaciones configuradas, a disfrutarlas ...' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 3000);
        };
        setLoading(false);
    };

    return (
        <div className='shiftClosedHol'>
            <h4>De vacaciónes.</h4>

            <div className='shiftClosedSetSwitch'>
                <p>No</p>
                <Switch
                    checked={holidays.isHolidays}
                    onChange={handleActive}
                />
                <p>SI</p>
            </div>
            <p className='pgray'>Si estas trabajando No estas de vacaciones</p>
            <p className='pgray'>Si no estas trabajando SI estas de vacaciones</p>

            {holidays.isHolidays &&
                <section className='shiftClosedHolInp'>
                    <div>
                        <label>Desde</label>
                        <input
                            type="date"
                            name='holdaysOn'
                            value={holidays.holdaysOn}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Hasta</label>
                        <input
                            type="date"
                            name='holdaysOff'
                            value={holidays.holdaysOff}
                            onChange={handleChange}
                        />
                    </div>

                    <p className='btn btnUS shiftClosedHolBtn' onClick={handleSubmit}>Configurar</p>
                </section>
            }
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default ShiftClosedHol;
