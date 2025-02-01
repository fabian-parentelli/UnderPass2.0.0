import './alerts.scss';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { alertImages } from '../../../../utils/imagesData.utils.js';
import getTypeAlerts from '../../../../utils/alertTypeText.utils.js';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import { updActiveAlertsApi } from '../../../../helpers/alerts/updActiveAlerts.api.js';

const Alerts = () => {

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') {
                setAlerts(response.result);
            } else console.log(response);
        }; fetchData();
    }, []);

    const handleOff = async (id) => await updActiveAlertsApi(id);

    console.log(alerts);

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
                                        <img src={ale?.data?.img[0].imgUrl} lt="img" />
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

                                {(ale.type === 'payTranferToCustomer') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.transfer_in} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'success_pay') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.transfer_in} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'weHaveSeenYourRequest') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.application_cards} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'productInStock') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.application_cards} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'newReport_news') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'publicityOff') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)}>
                                        <img src={alertImages.application_cards} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'newReport_product') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'mapNoMatch') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'sold_events') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'shiftPostpone') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'resShiftPostponeCA_notIsPay') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'acceptUpdateDateShift') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                                {(ale.type === 'shiftSupend_notIsPay') &&
                                    <Link to={`/vewalert/${ale.type}/${ale.eventId}`} className='alertsChildrenDiv' onClick={() => handleOff(ale._id)} >
                                        <img src={alertImages.coop} lt="img" />
                                        <p>{getTypeAlerts(ale.type)}</p>
                                    </Link>
                                }

                            </Fragment>
                        ))}
                    </div>
                </div>
            }
        </div >
    );
};

export default Alerts;

function getTypeToLink(types) {
    const data = {
        'application_cards': () => { return '/dashboard/vewapplicattion' },
        'application_banners': () => { return '/dashboard/vewapplicattion' },
        'default': () => { return '/' },
    };
    return (data[types] || data['default'])();
};