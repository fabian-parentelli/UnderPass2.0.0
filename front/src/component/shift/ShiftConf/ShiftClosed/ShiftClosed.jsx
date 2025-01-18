import './shiftClosed.scss';
import ShiftClosedSet from './ShiftClosedSet/ShiftClosedSet';
import ShiftClosedInfo from './ShiftClosedInfo/ShiftClosedInfo';
import ShiftClosedHol from './ShiftClosedHol/ShiftClosedHol';

const ShiftClosed = ({ values, setValues, setLoading }) => {

    return (
        <details className='shiftClosed'>
            <summary>Cerrar - vacaciones</summary>
            <ShiftClosedInfo />
            <ShiftClosedSet values={values} setValues={setValues} setLoading={setLoading} />
            <div className='line'></div>
            <ShiftClosedHol values={values} setLoading={setLoading} />
            <p className='pgray'>No tienes que actialuzar este módulo, cerroado se actualiza de forma automática y de vacaciones haz clic en configurar, botón de color verde.</p>
        </details>
    );
};

export default ShiftClosed;