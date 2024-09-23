import './bookingDas.scss';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Title from '../../../../component/dashboard/Title/Title';
import BookingDasComp from '../../../../component/bookings/BookingDasComp/BookingDasComp';

const BookingDas = () => {

    return (
        <div className='bookingDas'>
            <Title Icon={MenuBookIcon} name='Reservas' />
            <BookingDasComp type={'product'} />
        </div>
    );
};

export default BookingDas;