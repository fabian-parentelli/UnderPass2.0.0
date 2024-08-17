import './endPublicity.scss';
import { useState } from 'react';
import BigImg from '../../../component/utils/BigImg/BigImg';
import ModalCustom from '../../../component/utils/ModalCustom/ModalCustom';
import MoreTimeEnd from './MoreTimeEnd/MoreTimeEnd';
import { updActiveAlertsApi } from '../../../helpers/alerts/updActiveAlerts.api';
import { getAllAlertsApi } from '../../../helpers/alerts/getAllAlerts.api';

const EndPublicity = ({ modalIsOpen, setModalIsOpen, data }) => {

    const [moreTime, setMoreTime] = useState('');

    const closeModal = async () => {
        const ids = [];
        data.forEach(aler => ids.push(aler._id));
        await updActiveAlertsApi(ids);
        setModalIsOpen(false);
    };

    return (
        <ModalCustom modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div className='endPublicity'>
                <h2>Tu publicidad ha finalizado</h2>
                {data && data.map((alert, index) => (
                    <div className='endPublicityAlerts' key={index}>
                        <div className='endPublicityImG'>
                            <BigImg img={alert.data.imgUrl[0]} />
                        </div>
                        <div className='endPublicityText'>
                            <p><strong>Nombre:</strong> {alert.data.title}</p>
                            <p><strong>Tipo:</strong> {alert.data.type}</p>
                            {moreTime !== alert._id &&
                                <>
                                    <p><strong>Finalizo:</strong> {new Date(alert.data.end).toLocaleDateString()}</p>
                                    <button className='btnCard' onClick={() => setMoreTime(alert._id)}>Renovar</button>
                                </>
                            }
                            {moreTime === alert._id && <MoreTimeEnd data={alert.data} />}
                            <p className='endPublicityBlue'>Alerta generada el {new Date(alert.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ModalCustom>
    );
};

export default EndPublicity;