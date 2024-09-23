import './bookingToAdmin.scss';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import BigImg from '../../utils/BigImg/BigImg';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import BookingUserData from './BookingUserData';

const BookingToAdmin = ({ bookings }) => {

    const [vew, setVew] = useState(null);
    const [open, setOpen] = useState(false);

    const closeModal = () => { setOpen(false); setVew(null) };
    const openModal = (id) => { setVew(id); setOpen(true) };

    return (
        <div className='bookingToAdmin'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Ver</th>
                        <th>Reservas</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings && bookings.map((book) => (
                        <Fragment key={book._id}>
                            <tr>
                                <td><BigImg img={book.product.img} border={false} /> </td>
                                <td>{book.product.name}</td>
                                
                                <td className='bookingToAdminBack'>
                                    <Link to={`/product/${book._id}`} className='bookingToAdminLink'><ContentPasteGoIcon /></Link>
                                </td>

                                <td className='bookingToAdminBack' onClick={() => openModal(book._id)}>
                                    {book.total}
                                </td>
                            </tr>

                            {vew === book._id &&
                                <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                    <BookingUserData book={book} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingToAdmin;