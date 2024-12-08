import './shiftAlmanac.scss';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';

const ShiftAlmanac = ({ config }) => {

    return (
        <div className='shiftAlmanac'>
            <section>
                {config && <ShiftCalendar config={config} />}
                {config && <ShiftAlmanacHours config={config} />}
            </section>
        </div>
    );
};

export default ShiftAlmanac;