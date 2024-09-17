import './alertsUserVew.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import getTipeAlerts from '../../../utils/alertTypeText.utils.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { getAlertByUserIdApi } from '../../../helpers/alerts/getAlertByUserId.api.js';
import DeleteAlert from '../DeleteAlert/DeleteAlert.jsx';
import VewAlertMessage from '../VewAlertMessage/VewAlertMessage.jsx';

const AlertsUserVew = ({ userId }) => {

    const [alerts, setAlerts] = useState(null);
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = {};
            if (userId) query.user = userId;
            if (page) query.page = page;
            const response = await getAlertByUserIdApi(query);
            if (response.status === 'success') setAlerts(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [userId, page]);

    const HandleChangePage = (setPages) => setPage(setPages);

    return (
        <div className='alertsUserVew'>
            <table>
                <thead>
                    <tr>
                        <th>imgágen</th>
                        <th>Mensaje</th>
                        <th>Nombre</th>
                        <th>Alerta</th>
                        {user.data.role !== 'user' && <th>Eliminar</th>}
                    </tr>
                </thead>
                <tbody>
                    {alerts && alerts.docs.map((alert) => (
                        <tr key={alert._id}>
                            <td>
                                {alert?.data?.img?.[0]?.imgUrl && <BigImg img={alert.data.img[0].imgUrl} border={false} />}
                                {alert?.data?.imgUrl?.[0] && <BigImg img={alert.data.imgUrl[0]} border={false} />}

                                {!alert?.data?.img?.[0]?.imgUrl && !alert?.data?.imgUrl?.[0] && (
                                    <BigImg img={typeImg(alert.type)} border={false} />
                                )}
                            </td>

                            <VewAlertMessage alert={alert} />

                            <td>
                                {alert.data?.name ? alert.data.name : ''}
                                {alert.data?.title && ` ${alert.data.title}`}
                                {!alert.data?.title && !alert.data?.name && 'Información'}
                            </td>

                            <td>{new Date(alert.date).toLocaleDateString()}</td>

                            {user.data.role !== 'user' &&
                                <DeleteAlert
                                    alertId={alert._id}
                                    setLoading={setLoading}
                                    alerts={alerts}
                                    setAlerts={setAlerts}
                                />
                            }
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '2rem' }}><Pager users={alerts} HandleChangePage={HandleChangePage} /></div>
            <Load loading={loading} />
        </div>
    );
};

export default AlertsUserVew;

function typeImg(types) {
    const data = {
        'application_cards': () => { return 'Solicitud de Cards' },
        'application_banners': () => { return 'Solicitud de Banners' },
        'sold_product': () => { return 'Vendiste un producto' },
        'transfer_in': () => { return 'Recibiste una transferencia' },
        'transfer_confirm': () => { return 'Transferencia confirmada' },
        'havePay': () => { return 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1725718015/images/jfbb8kbtsnelbrv2gwfv.png' },
        'youMoneyInWallet': () => { return 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1725721458/images/qs0fuwe6qak5ikrjic5f.png' },
        'payTranferToCustomer': () => { return 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1726607221/images/r0sz8ubnjab48ayftt9a.png' },
        'success_pay': () => { return 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1725721458/images/qs0fuwe6qak5ikrjic5f.png' },
        'default': () => { return 'otro' },
    };

    return (data[types] || data['default'])();
};