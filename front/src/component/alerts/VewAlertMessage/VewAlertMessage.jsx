import './vewAlertMessage.scss';
import { useNavigate } from 'react-router-dom';
import getTypeAlerts from '../../../utils/alertTypeText.utils.js';

const VewAlertMessage = ({ alert }) => {

    const navigate = useNavigate();

    const handleNavigate = (alert) => {
        if (alert.type === 'havePay' || alert.type === 'youMoneyInWallet' || alert.type === 'transfer_in'
            || alert.type === 'transfer_confirm' || alert.type === 'payTranferToCustomer'
            || alert.type === 'success_pay') {
            navigate(`/vewalert/${alert.type}/${alert.eventId}`);
        };
        if (alert.type === 'sold_product') navigate(`/vewalert/${alert.type}/${alert.orderSellerId}`)
    };

    return (
        <td className='vewAlertMessage' onClick={() => handleNavigate(alert)}>
            {alert.type && getTypeAlerts(alert.type)}
        </td>
    );
};

export default VewAlertMessage;