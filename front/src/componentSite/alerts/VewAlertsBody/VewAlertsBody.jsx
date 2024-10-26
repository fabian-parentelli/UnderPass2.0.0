import './VewAlertsBody.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HaveAPay from './HaveAPay/HaveAPay.jsx';
import Load from '../../../component/utils/Load';
import PublicityOff from './PublicityOff/PublicityOff.jsx';
import ReportComment from './ReportComment/ReportComment.jsx';
import OrderToPayAlert from './OrderToPayAlert/OrderToPayAlert';
import ProductInStock from './ProductInStock/ProductInStock.jsx';
import getTypeAlerts from '../../../utils/alertTypeText.utils.js';
import SoldProductAlert from './SoldProductAlert/SoldProductAlert';
import HaveMoneyAlerts from './HaveMoneyAlerts/HaveMoneyAlerts.jsx';
import ReqTranferAlert from './ReqTransferAlert/ReqTransferAlert.jsx';
import WeHaveSeeYourReq from './WeHaveSeeYourReq/WeHaveSeeYourReq.jsx';
import MapNoMatch from './MapNoMatch/MapNoMatch.jsx';

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
            {type === 'payTranferToCustomer' && <HaveAPay id={id} setLoading={setLoading} />}
            {type === 'success_pay' && <HaveMoneyAlerts id={id} setLoading={setLoading} />}
            {type === 'weHaveSeenYourRequest' && <WeHaveSeeYourReq id={id} setLoading={setLoading} />}
            {type === 'productInStock' && <ProductInStock id={id} setLoading={setLoading} />}
            {type === 'newReport_news' && <ReportComment id={id} setLoading={setLoading} type={type} />}
            {type === 'newReport_product' && <ReportComment id={id} setLoading={setLoading} type={type} />}
            {type === 'publicityOff' && <PublicityOff id={id} setLoading={setLoading} />}
            {type === 'mapNoMatch' && <MapNoMatch id={id} setLoading={setLoading} />}

            <Load loading={loading} />
        </div>
    );
};

export default VewAlertsBody;