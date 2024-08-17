import './alerts.scss';
import { Link } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import { Fragment, useEffect, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';
import EndPublicity from '../../../alerts/EndPublicity/EndPublicity.jsx';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import Load from '../../../../component/utils/Load.jsx';

const Alerts = ({ user }) => {

    const [alerts, setAlerts] = useState([]);
    const [selectedAlert, setSelectedAlert] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openModal = (alert) => {
        setModalIsOpen(true);
        setSelectedAlert(alert);
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
        console.log(modalIsOpen);

    }, [modalIsOpen]);

    return (
        <div className='alerts'>

            {alerts && alerts.publicityOff &&
                <div className='alertsLink' onClick={() => openModal(alerts.publicityOff.data)} >
                    <BadgeComp
                        Icon={BadgeIcon}
                        data={alerts.publicityOff.count}
                        color='success'
                    />
                </div>
            }

            {modalIsOpen &&
                <EndPublicity
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    data={selectedAlert}
                />
            }
            <Load loading={loading} />
        </div >
    );
};

export default Alerts;
// primary - secundary - error - warning - info - success