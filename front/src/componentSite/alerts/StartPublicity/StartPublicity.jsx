import './startPublicity.scss';
import { Link } from 'react-router-dom';
import BigImg from '../../../component/utils/BigImg/BigImg';
import ModalCustom from '../../../component/utils/ModalCustom/ModalCustom';
import { updActiveAlertsApi } from '../../../helpers/alerts/updActiveAlerts.api.js';

const StartPublicity = ({ modalIsOpen, setModalIsOpen, data, setNumberModal }) => {

    const closeModal = async () => {
        const ids = [];
        data.forEach(aler => ids.push(aler._id));
        await updActiveAlertsApi(ids);
        setModalIsOpen(false);
        setNumberModal(0);
    };

    const handleClosed = async () => {
        const ids = [];
        data.forEach(aler => ids.push(aler._id));
        await updActiveAlertsApi(ids);
        setModalIsOpen(false);
        setNumberModal(0);
    };

    return (
        <ModalCustom modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div className='startPublicity'>
                <h2>Tu publicidad ha iniciado</h2>
                {data && data.map((alert, index) => (
                    <div className='endPublicityAlerts' key={index}>
                        <div className='endPublicityImG'>
                            <BigImg img={alert.data.imgUrl[0]} />
                        </div>
                        <div className='endPublicityText'>
                            <p><strong>Nombre:</strong> {alert.data.title}</p>
                            <p><strong>Tipo:</strong> {alert.data.type}</p>
                            <p><strong>Finalizo:</strong> {new Date(alert.data.end).toLocaleDateString()}</p>
                            <Link onClick={handleClosed} to={`/${alert.data?.links}`}><button className='btnCard'>Ver</button></Link>
                            <p className='endPublicityBlue'>Alerta generada el {new Date(alert.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ModalCustom>
    );
};

export default StartPublicity;