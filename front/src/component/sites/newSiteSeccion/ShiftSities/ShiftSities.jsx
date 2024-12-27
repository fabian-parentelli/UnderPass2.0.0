import './shiftSities.scss';
import { useEffect } from 'react';
import Switch from '@mui/material/Switch';

const ShiftSities = ({ values, setValues }) => {

    const handleShift = (e) => setValues({ ...values, isShift: e.target.checked });

    return (
        <div className='shiftSities'>
            <h6>Sistema de turnos</h6>
            {values.category === 'premises' &&
                <>
                    <section className='videoSitiesSectSwitch'>
                        <div className='videoSitiesSwitch'>
                            <p>NO</p>
                            <Switch checked={values.isShift} onChange={handleShift} />
                            <p>SI</p>
                        </div>
                        <p className='pgray'>Habilita sistema de turnos</p>
                    </section>
                </>
            }
        </div>
    );
};

export default ShiftSities;