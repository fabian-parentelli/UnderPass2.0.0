import './bookingByUser.scss';
import { useState } from 'react';
import UserSearch from '../../../utils/UserSearch/UserSearch';
import BookingProd from '../../../products/bookingProd/BookingProd';

const BookingByUser = ({ type, setLoading }) => {

    const [user, setUser] = useState(null);

    return (
        <div className='bookingByUser'>
            <UserSearch setUser={setUser} />
           { user && <BookingProd userId={user._id} setLoading={setLoading} type={type} />}
        </div>
    );
};

export default BookingByUser;