import './alertsUserVew.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import { getAlertByUserIdApi } from '../../../helpers/alerts/getAlertByUserId.api.js';

const AlertsUserVew = ({ userId }) => {

    const [alerts, setAlerts] = useState(null);
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(false);

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
                        <th>imgagen</th>
                        <th>Mensaje</th>
                        <th>Nombre</th>
                        <th>Alerta</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts && alerts.docs.map((alert) => (
                        <tr key={alert._id}>
                            <td>{<BigImg img={alert.data?.imgUrl[0]} border={false} />}</td>
                            <td>{typeAlert(alert.type)}</td>
                            <td>{alert.data?.title}</td>
                            <td>{new Date(alert.date).toLocaleDateString()}</td>
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

function typeAlert(types) {

    const alert = {
        'publicityOff': () => { return 'Ha finalizado tu publicidad' },
        'publicityOn': () => { return 'Ha iniciado tu publicidad' },
    };

    return (alert[types])();
};