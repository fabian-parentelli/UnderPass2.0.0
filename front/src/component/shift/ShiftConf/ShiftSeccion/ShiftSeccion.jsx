import './shiftSeccion.scss';
import { useEffect, useState } from 'react';
import Shift_hours from '../Shift_inputs/Shift_hours';
import Shift_days from '../Shift_inputs/Shift_days';

const ShiftSeccion = ({ values, setValues, handleValues }) => {

    const [type, setType] = useState(null);

    const handleHour = (e) => setValues({ ...values, hour: { ...values.hour, [e.target.name]: e.target.value } });
    useEffect(() => { setValues({ ...values, days: type }) }, [type]);

    return (
        <details className='shiftSeccion'>
            <summary>Días, precios y horarios generales</summary>

            <section className='shiftSeccionCont'>
                <div className='shiftSeccionSect'>
                    <Shift_hours values={values} handleHour={handleHour} title='Horarios generales' />
                </div>

                <div className='shiftSeccionDays'>
                    <Shift_days setType={setType} title='Días generales de apertura' />
                    <p className='pgray'>Si existen secciones podrás independizar la hora, el días y el precio.</p>
                    <p className='pgray'>La Fracción horaria es el intervalo de tiempo que dura la seción. La unidad de medida es minutos.</p>
                </div>

                <div className='shiftSeccionDays'>
                    <p>Precio general.</p>
                    <div className='shiftSeccionCheck'>
                        <input type="number" name='price' onChange={handleValues} value={values?.price || 0} style={{ width: '110px' }} />
                    </div>
                </div>

                <div className='shiftSeccionDays'>
                    <p>Fracción Horaria.</p>
                    <div className='shiftSeccionCheck'>
                        <input type="number" name='fractionHour' onChange={handleHour} style={{ width: '110px' }} />
                    </div>
                    <p className='pgray'>En minutos</p>
                </div>
            </section>

        </details>
    );
};

export default ShiftSeccion;