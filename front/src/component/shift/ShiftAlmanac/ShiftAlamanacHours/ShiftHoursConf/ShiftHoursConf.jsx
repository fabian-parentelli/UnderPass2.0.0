import './shiftHours.scss';
import CheckBoxes2 from "../../../../utils/CheckBoxes2";
import { setHours } from '../../../../../utils/setHours.utils.js';

const ShiftHours = ({ hour, setType }) => {

    const labels = setHours(hour);

    if (labels.length === 0) {
        return <div className='ShiftHours'>Faltan datos</div>;
    };

    return (
        <div className='ShiftHours'>
            <CheckBoxes2 labels={labels} setType={setType} multiselect={true} />
        </div>
    );
};

export default ShiftHours;