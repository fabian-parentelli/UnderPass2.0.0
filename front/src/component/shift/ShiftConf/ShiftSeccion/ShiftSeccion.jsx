import './shiftSeccion.scss';

const ShiftSeccion = ({ values, setValues, handleValues }) => {

    const handleHour = (e) => setValues({ ...values, hour: { ...values.hour, [e.target.name]: e.target.value } });

    return (
        <details className='shiftSeccion'>
            <summary>Secciones, precios y horas</summary>

            <section className='shiftSeccionSect'>
                <p>Horarios generales</p>
                <div>
                    <label>Apertura</label>
                    <input type="time" name='startHour' onChange={handleHour} value={values?.hour?.startHour || ''} required />
                </div>
                <div>
                    <label>Cierre</label>
                    <input type="time" name='endHour' onChange={handleHour} value={values?.hour?.endHour || ''} required />
                </div>
            </section>

        </details>
    );
};

export default ShiftSeccion;