import './bookingToAdmin.scss';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg';
import BookingUserData from './BookingUserData';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { useLoginContext } from '../../../context/LoginContext';
import UserVewSmall from '../../user/UserVewSmall/UserVewSmall';

const BookingToAdmin = ({ bookings }) => {

    const [vew, setVew] = useState(null);
    const [open, setOpen] = useState(false);
    const [vewModal, setVewModal] = useState(null);
    const [ope, setOpe] = useState(false);
    const { user } = useLoginContext();

    const closeModal = () => { setOpen(false); setVew(null) };
    const openModal = (id) => { setVew(id); setOpen(true) };

    const closeMod = () => { setOpe(false); setVewModal(null) };
    const openMod = (id) => { setVewModal(id); setOpe(true) };

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
                                <td>
                                    <p>{book.product.name}</p>
                                    {user.data?.role !== 'user' &&
                                        <p className='bookingToAdminCursor' onClick={() => openMod(book._id)}>
                                            {book.product.userId}
                                        </p>
                                    }
                                </td>

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

                            {vewModal === book._id &&
                                <ModalCustom modalIsOpen={ope} closeModal={closeMod}>
                                    <UserVewSmall userId={book.product.userId} />
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