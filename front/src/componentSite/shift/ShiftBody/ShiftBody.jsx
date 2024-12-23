import './shiftBody.scss';
import ShiftCard from '../ShiftCard/ShiftCard';

const ShiftBody = ({ shifts }) => {

    return (
        <div className='shiftBody'>
            {shifts &&
                shifts.map((shift, ind) => (
                    <ShiftCard key={ind} shift={shift} />
                ))
            }
        </div>
    );
};

export default ShiftBody;