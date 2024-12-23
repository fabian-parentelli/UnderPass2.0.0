import './shiftCard.scss';
import { Link } from 'react-router-dom';
import Favorite from '../../../component/utils/Favorite/Favorite';
import { typeShiftCategory } from '../../../utils/typeShifts.utils';

const ShiftCard = ({ shift }) => {

    return (
        <div className='shiftCard'>
            <Favorite id={shift._id} />
            <Link to={`/shift/${shift._id}`} className='shiftCardLink'>
                <img src={shift.img.url}
                    alt="img" className='shiftCardImg'
                />
                <h3>{shift.title}</h3>
                <p className='shiftCardCategory'>{typeShiftCategory(shift.category)}</p>
                <div className='shiftLine'></div>
                <p className='shiftCardLoc'>{shift.location.city} - {shift.location.province}</p>
            </Link>
        </div>
    );
};

export default ShiftCard;