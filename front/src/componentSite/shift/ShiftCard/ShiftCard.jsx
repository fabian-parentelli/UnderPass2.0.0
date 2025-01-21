import './shiftCard.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../../../component/utils/Favorite/Favorite';
import { typeShiftCategory } from '../../../utils/typeShifts.utils';

const ShiftCard = ({ shift }) => {

    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (shift?.holidays && shift.holidaysDate) {
            const today = new Date();
            const startHolidays = new Date(shift.holidaysDate.holdaysOn);
            const endHolidays = new Date(shift.holidaysDate.holdaysOff);
            if (today >= startHolidays && today <= endHolidays) setStatus(true);
            else setStatus(false);
        };
    }, [shift]);

    return (
        <div className='shiftCard'>
            <Favorite id={shift._id} />
            {status &&
                <div className='shiftCardHolidays'>
                    <p>Cerrado hasta el {new Date(shift.holidaysDate.holdaysOff).toISOString().slice(0, 10).split('-').reverse().join('/')}</p>
                </div>
            }
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