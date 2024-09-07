import './VewAlertsBody.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import OrderToPayAlert from './OrderToPayAlert/OrderToPayAlert';
import getTypeAlerts from '../../../utils/alertTypeText.utils.js';
import SoldProductAlert from './SoldProductAlert/SoldProductAlert';
import HaveMoneyAlerts from './HaveMoneyAlerts/HaveMoneyAlerts.jsx';
import ReqTranferAlert from './ReqTransferAlert/ReqTransferAlert.jsx';

const VewAlertsBody = () => {

    const { id, type } = useParams();
    const [loading, setLoading] = useState(false);

    return (
        <div className='VewAlertsBody'>
            <h2>Alertas</h2>
            <p>{getTypeAlerts(type)}</p>

            {type === 'havePay' && <OrderToPayAlert id={id} setLoading={setLoading} />}
            {type === 'sold_product' && <SoldProductAlert id={id} setLoading={setLoading} />}
            {type === 'youMoneyInWallet' && <HaveMoneyAlerts id={id} setLoading={setLoading} />}
            {type === 'transfer_in' && <ReqTranferAlert id={id} setLoading={setLoading} />}
            {type === 'transfer_confirm' && <HaveMoneyAlerts id={id} setLoading={setLoading} />}

            <Load loading={loading} />
        </div>
    );
};

export default VewAlertsBody;