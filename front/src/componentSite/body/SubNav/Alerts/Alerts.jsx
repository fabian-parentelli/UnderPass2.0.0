import './alerts.scss';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Load from '../../../../component/utils/Load.jsx';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';
import EndPublicity from '../../../alerts/EndPublicity/EndPublicity.jsx';
import StartPublicity from '../../../alerts/StartPublicity/StartPublicity.jsx';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import { updActiveAlertsApi } from '../../../../helpers/alerts/updActiveAlerts.api.js';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { alertImages } from '../../../../utils/imagesData.utils.js';
import getTypeAlerts from '../../../../utils/alertTypeText.utils.js';

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

    console.log(alerts);


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

    const handleOff = async (id) => await updActiveAlertsApi(id);

    return (
        <div className='alerts'>

            {alerts && alerts.count > 0 &&
                <div className='alertsFather'>

                    <BadgeComp
                        Icon={NotificationsActiveIcon}
                        data={alerts.count}
                        color='success'
                    />

                    <div className='alertsChildren'>
                        {alerts.alerts && alerts.alerts.map((ale, index) => (
                            <Fragment key={index}>

                                {(ale.type === 'application_cards' || ale.type === 'application_banners') &&
                                    <Link to={getTypeToLink(ale.type)} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages[ale.type]} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {/* Mejorado de aquí para abajo */}

                                {(ale.type === 'havePay') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages[ale.type]} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'sold_product') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.orderSellerId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={ale.data.img[0].imgUrl} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'youMoneyInWallet') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.underPay} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'transfer_in') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages[ale.type]} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'transfer_confirm') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.transfer_in} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                            </Fragment>
                        ))}
                    </div>
                </div>
            }

            {/* {alerts && alerts.publicityOff &&
                <div className='alertsLink' onClick={() => openModal(1, alerts.publicityOff.data)} >
                    <BadgeComp
                        Icon={BadgeIcon}
                        data={alerts.publicityOff.count}
                        color='error'
                    />
                </div>
            } */}

            {/* {alerts && alerts.publicityOn &&
                <div className='alertsLink' onClick={() => openModal(2, alerts.publicityOn.data)} >
                    <BadgeComp
                        Icon={LiveTvIcon}
                        data={alerts.publicityOn.count}
                        color='success'
                    />
                </div>
            } */}

            {/* {alerts && alerts.newAplication &&
                <Link to={'/dashboard/vewapplicattion'} className='alertsLink' onClick={() => openModal(2, alerts.newAplication.data)} >
                    <BadgeComp
                        Icon={FiberNewIcon}
                        data={alerts.newAplication.count}
                        color='success'
                    />
                </Link>
            } */}

            {/* {alerts && alerts.sold_product &&
                <Link to={'/profile'} className='alertsLink' onClick={() => handleOff(alerts.sold_product.data)} >
                    <BadgeComp
                        Icon={StorefrontIcon}
                        data={alerts.sold_product.count}
                        color='success'
                    />
                </Link>
            } */}

            {/* {alerts && alerts.application_cards &&
                <Link to={'/profile/alerts'} className='alertsLink' onClick={() => handleOff(alerts.application_cards.data)} >
                    <div className='alertsFather'>
                        <BadgeComp
                            Icon={FiberNewIcon}
                            data={alerts.application_cards.count}
                            color='success'
                        />
                    </div>
                    <div className='alertsChildrn'>
                        <p>Cosa </p>
                        <p>Cosa </p>
                        <p>Cosa </p>
                    </div>
                </Link>
            } */}

            {/* Modales */}

            {/* {numberModal === 1 &&
                <EndPublicity
                    modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} data={selectedAlert}
                    setNumberModal={setNumberModal}
                />
            } */}

            {/* {numberModal === 2 &&
                <StartPublicity
                    modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} data={selectedAlert}
                    setNumberModal={setNumberModal}
                />
            } */}

            {/* <Load loading={loading} /> */}
        </div >
    );
};

export default Alerts;
// primary - secundary - error - warning - info - success

function getTypeToLink(types) {
    const data = {
        'application_cards': () => { return '/dashboard/vewapplicattion' },
        'application_banners': () => { return '/dashboard/vewapplicattion' },
        'default': () => { return '/' },
    };

    return (data[types] || data['default'])();
};