import './shiftAlmanac.scss';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';
import { useState } from 'react';

const ShiftAlmanac = ({ config }) => {

    const [type, setType] = useState(null);
    const [selected, setSelected] = useState(null);

    console.log(selected);
    

    return (
        <div className='shiftAlmanac'>
            <section>
                {config && <ShiftCalendar config={config} setSelected={setSelected} />}
                {config && <ShiftAlmanacHours config={config} setType={setType} />}
            </section>
            <button className='btn btnSH shiftAlmanacBtn'>Reservar</button>
        </div>
    );
};

export default ShiftAlmanac;