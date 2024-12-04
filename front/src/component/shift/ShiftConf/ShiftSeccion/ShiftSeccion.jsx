import './shiftSeccion.scss';
import { useEffect, useState } from 'react';
import CheckBoxes2 from '../../../utils/CheckBoxes2';

const ShiftSeccion = ({ values, setValues, handleValues }) => {

    const [type, setType] = useState(null);

    const handleHour = (e) => setValues({ ...values, hour: { ...values.hour, [e.target.name]: e.target.value } });
    useEffect(() => { setValues({ ...values, days: type }) }, [type]);

    return (
        <details className='shiftSeccion'>
            <summary>Días, precios y horarios generales</summary>

            <section className='shiftSeccionCont'>
                <div className='shiftSeccionSect'>
                    <p>Horarios generales</p>
                    <div>
                        <label>Apertura</label>
                        <input type="time" name='startHour' onChange={handleHour} value={values?.hour?.startHour || ''} required />
                    </div>
                    <div>
                        <label>Cierre</label>
                        <input type="time" name='endHour' onChange={handleHour} value={values?.hour?.endHour || ''} required />
                    </div>
                </div>

                <div className='shiftSeccionDays'>
                    <p>Días generales de apertura</p>
                    <div className='shiftSeccionCheck'>
                        <CheckBoxes2 labels={labels} setType={setType} multiselect={true} selecteds={[]} />
                    </div>
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

const labels = [
    { _id: 'monday', name: 'Lunes' },
    { _id: 'tuesday', name: 'Martes' },
    { _id: 'wednesday', name: 'Miércoles' },
    { _id: 'thursday', name: 'Jueves' },
    { _id: 'friday', name: 'Viernes' },
    { _id: 'saturday', name: 'Sábado' },
    { _id: 'sunday', name: 'Domingo' }
];