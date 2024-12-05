import './shift_inputs.scss';

const Shift_hours = ({ values, handleHour, title }) => {

    return (
        <div className='shift_hours'>
            <p>{title}</p>
            <div>
                <label>Apertura</label>
                <input type="time" name='startHour' onChange={handleHour} value={values?.hour?.startHour || ''} required />
            </div>
            <div>
                <label>Cierre</label>
                <input type="time" name='endHour' onChange={handleHour} value={values?.hour?.endHour || ''} required />
            </div>
        </div>
    );
};

export default Shift_hours;