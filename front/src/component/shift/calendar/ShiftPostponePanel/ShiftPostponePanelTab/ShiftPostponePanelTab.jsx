import './ShiftPostponePanelTab.scss';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import MessageIcon from '@mui/icons-material/Message';
import { monthsArray } from '../../../../../utils/typeShifts.utils.js';
import ModalCustom from '../../../../utils/ModalCustom/ModalCustom.jsx';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ShiftPostponePanelResp from '../ShiftPostponePanelResp/ShiftPostponePanelResp.jsx';

const ShiftPostponePanelTab = ({ postpones }) => {

    const [modal, setModal] = useState({ open: false, id: null, message: '' });
    const handleModal = (id, message) => setModal({ open: true, id, message });

    return (
        <div className='ShiftPostponePanelTab'>

            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Dia y Hora</th>
                        <th style={{ fontSize: '12px' }}>Ambiente <br /> Sección</th>
                        <th>Gestión</th>
                        <th>Generado</th>
                        <th>Mensaje</th>
                        <th>Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    {postpones && postpones.length > 0 && postpones.map((post) => (
                        <Fragment key={post._id}>
                            <tr>
                                <td>
                                    <p>{post?.customerData?.name}</p>
                                    <p>{post?.customerData?.email}</p>
                                    <p>cel: {post?.customerData?.phone}</p>
                                </td>
                                <td>
                                    <p>{post.shiftId.day.day}/{monthsArray.findIndex((mont) => mont === post.shiftId.day.month) + 1}/{post.shiftId.day.year}</p>
                                    <p>{post.shiftId.hour.join(' - ')}</p>
                                </td>
                                <td>
                                    <p>{post.shiftId?.room ? post.shiftId.room : '...'}</p>
                                    <p>{post.shiftId?.sections ? post.shiftId.sections : '...'}</p>
                                </td>
                                <td>{post.shiftId.isPay ? 'De pago' : 'Gratuito'}</td>
                                <td>{new Date(post.date).toLocaleDateString()}</td>

                                <Tooltip title='Ver el mensaje enviado' placement="left-end">
                                    <td className='ShiftPostponePanelTabBack' onClick={() => handleModal(post._id, 'mess')}>
                                        <MessageIcon />
                                    </td>
                                </Tooltip>

                                <Tooltip title={post?.response ? 'Ver respuestra' : 'No tienes respuesta aun'} placement="left-end">
                                    <td className='ShiftPostponePanelTabBack' onClick={() => handleModal(post._id, 'notMess')}>
                                        <MarkUnreadChatAltIcon style={{color: post?.response ? 'green' : '#ec3639'}} />
                                    </td>
                                </Tooltip>
                            </tr>
                            {modal.id === post._id &&
                                <ModalCustom modalIsOpen={modal.open} closeModal={() => setModal({ open: false, id: null, message: '' })}>
                                    {modal.message === 'mess'
                                        ? <p>{post.message}</p>
                                        : <ShiftPostponePanelResp postpone={post} setModal={setModal} />
                                    }
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftPostponePanelTab;