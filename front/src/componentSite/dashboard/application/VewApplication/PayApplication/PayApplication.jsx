import './payApplication.scss';
import { useEffect, useState } from 'react';
import LoadSmallB from '../../../../../component/utils/LoadSmallB/LoadSmallB';
import ShopingTable from '../../../../../component/commerce/ShopingTable/ShopingTable';
import { getOrderByArticleApi } from '../../../../../helpers/orders/getOrdersByArticle.api.js';
import { getMoneyByUserIdApi } from '../../../../../helpers/wallet/getMoneyByUserId.api.js';

const PayApplication = ({ app }) => {

    const [orders, setOrders] = useState({ docs: [] });
    const [isUnderPay, setIsUnderPay] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrderByArticleApi(app._id);
            if (response.status) setOrders(({ docs: [...response.result] }));
            else console.log(response);
            const responseMoney = await getMoneyByUserIdApi(app.userId.userId);
            if (responseMoney.status === 'success') setIsUnderPay(responseMoney.result);
            console.error(responseMoney.error);
        }; fetchData();
    }, []);

    return (
        <div className='payApplication'>
            {!isUnderPay
                ? <LoadSmallB />
                : orders ? <ShopingTable orders={orders} isUnderPay={isUnderPay} /> : <LoadSmallB />
            }
        </div>
    );
};

export default PayApplication;