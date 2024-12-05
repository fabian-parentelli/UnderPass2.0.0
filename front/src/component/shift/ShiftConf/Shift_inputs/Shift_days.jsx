import './shift_inputs.scss';
import CheckBoxes2 from '../../../utils/CheckBoxes2';

const Shift_days = ({ setType, title }) => {

    return (
        <div className='Shift_days'>
            <p>{title}</p>
            <div className='shiftSeccionCheck'>
                <CheckBoxes2 labels={labels} setType={setType} multiselect={true} selecteds={[]} />
            </div>
        </div>
    );
};

export default Shift_days;

const labels = [
    { _id: 'monday', name: 'Lunes' },
    { _id: 'tuesday', name: 'Martes' },
    { _id: 'wednesday', name: 'Miércoles' },
    { _id: 'thursday', name: 'Jueves' },
    { _id: 'friday', name: 'Viernes' },
    { _id: 'saturday', name: 'Sábado' },
    { _id: 'sunday', name: 'Domingo' }
];