import './paymentsTable.scss';
import { Fragment, useState } from 'react';
import { imgages } from '../../../../utils/imagesData.utils';
import { useLoginContext } from '../../../../context/LoginContext';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom';
import TimePass from '../../../utils/TimePass';
import CloudFile from '../../../utils/CloudFile/CloudFile';

const TransferTable = ({ transfers, handleConfirm, handleFileChange, handleUpdCloud }) => {

    const { user } = useLoginContext();
    const [open, setOpen] = useState(false);
    const [whatOpen, setWhatOpen] = useState(null);

    const closeModal = () => {
        setOpen(false);
        setWhatOpen(null);
    };

    const openModal = (id) => {
        setWhatOpen(id);
        setOpen(true);
    };

    return (
        <div className='paymentsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Usuario</th>
                        <th>Orden</th>
                        <th>Comprobante</th>
                        <th>Fecha</th>
                        {user.data.role !== 'user' && <th>Fecha</th>}
                        <th>Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers && transfers.docs && transfers.docs.map((trans) => (
                        <Fragment key={trans._id}>
                            <tr>
                                <td onClick={() => openModal(trans._id)} className='paymentsTableImg'>
                                    <img
                                        style={{ width: '50px' }}
                                        src={trans.imgUrl || (trans.type === 'write' ? imgages.infoLogo : imgages.weAreLooking)}
                                        alt="img"
                                    />
                                </td>
                                <td>
                                    {user.data.role !== 'user' &&
                                        <>
                                            <p>{trans.userData.name}</p>
                                            <p>{trans.userData.email}</p>
                                            <p>{trans.userData.phone}</p>
                                        </>
                                    }
                                    <p>{trans.userId}</p>
                                </td>
                                <td>{trans.orderId}</td>
                                <td>{trans.type}</td>
                                <td>
                                    <p>{new Date(trans.date).toLocaleDateString()}</p>
                                    <p>Horas hábiles pasadas:<TimePass startDate={trans.date} /></p>
                                </td>
                                {user.data.role !== 'user' &&
                                    (!trans.imgUrl
                                        ? <td>
                                            <CloudFile onChange={handleFileChange} folderName='transfer/users' contClass='minimal' id={trans._id} />
                                            <p onClick={handleUpdCloud} className='btnCard' style={{textAlign: 'center'}}>Subir</p>
                                        </td>
                                        : <td style={{ color: 'green' }}>Disponible</td>)
                                }
                                <td
                                    onClick={user.data.role !== 'user' && handleConfirm ? () => handleConfirm(trans._id) : undefined}
                                    style={{ color: trans.confim ? 'green' : 'red', cursor: user.data.role !== 'user' && 'pointer' }}
                                >
                                    {trans.confim ? 'SI' : 'NO'}
                                </td>
                            </tr>

                            {whatOpen === trans._id && (
                                <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                    {trans.type !== 'write' ? (
                                        <img
                                            style={{ width: '300px' }}
                                            src={trans.imgUrl || imgages.weAreLooking}
                                            alt="img"
                                        />
                                    ) : (
                                        <div className='paymentsTableInfo'>
                                            <h3>Información</h3>
                                            <p><strong>N° de operación:</strong> {trans.data?.operation}</p>
                                            <p><strong>Titular:</strong> {trans.data?.accountHolder}</p>
                                            <p><strong>Entidad financiera:</strong> {trans.data?.bank}</p>
                                            <p><strong>Fecha:</strong> {new Date(trans.data?.dateData).toLocaleDateString()}</p>
                                            <p><strong>Monto:</strong> {trans.data?.total}</p>
                                        </div>
                                    )}
                                </ModalCustom>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransferTable;
