import './alerts.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Load from '../../../../component/utils/Load.jsx';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';
import EndPublicity from '../../../alerts/EndPublicity/EndPublicity.jsx';
import StartPublicity from '../../../alerts/StartPublicity/StartPublicity.jsx';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import { updActiveAlertsApi } from '../../../../helpers/alerts/updActiveAlerts.api.js';

const Alerts = ({ user }) => {

    const [alerts, setAlerts] = useState([]);
    const [selectedAlert, setSelectedAlert] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [numberModal, setNumberModal] = useState(0);

    const openModal = (number, alert) => {
        setModalIsOpen(true);
        setSelectedAlert(alert);
        setNumberModal(number);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllAlertsApi();
            if (response.status === 'success') {
                setAlerts(response.result);
            } else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [modalIsOpen]);

    const handleOff = async (data) =>{
        const ids = [];
        data.forEach(aler => ids.push(aler._id));
        await updActiveAlertsApi(ids);
    };

    return (
        <div className='alerts'>

            {alerts && alerts.publicityOff &&
                <div className='alertsLink' onClick={() => openModal(1, alerts.publicityOff.data)} >
                    <BadgeComp
                        Icon={BadgeIcon}
                        data={alerts.publicityOff.count}
                        color='error'
                    />
                </div>
            }

            {alerts && alerts.publicityOn &&
                <div className='alertsLink' onClick={() => openModal(2, alerts.publicityOn.data)} >
                    <BadgeComp
                        Icon={LiveTvIcon}
                        data={alerts.publicityOn.count}
                        color='success'
                    />
                </div>
            }

            {alerts && alerts.newAplication &&
                <Link to={'/dashboard/vewapplicattion'} className='alertsLink' onClick={() => openModal(2, alerts.newAplication.data)} >
                    <BadgeComp
                        Icon={FiberNewIcon}
                        data={alerts.newAplication.count}
                        color='success'
                    />
                </Link>
            }
            
            {alerts && alerts.sold_product &&
                <Link to={'/profile'} className='alertsLink' onClick={()=> handleOff(alerts.sold_product.data)} >
                    <BadgeComp
                        Icon={StorefrontIcon}
                        data={alerts.sold_product.count}
                        color='success'
                    />
                </Link>
            }

            {/* Modales */}

            {numberModal === 1 &&
                <EndPublicity
                    modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} data={selectedAlert}
                    setNumberModal={setNumberModal}
                />
            }

            {numberModal === 2 &&
                <StartPublicity
                    modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} data={selectedAlert}
                    setNumberModal={setNumberModal}
                />
            }

            <Load loading={loading} />
        </div >
    );
};

export default Alerts;
// primary - secundary - error - warning - info - success