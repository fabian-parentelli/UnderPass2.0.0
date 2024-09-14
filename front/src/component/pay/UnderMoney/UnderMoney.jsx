import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import { getMoneyByUserIdApi } from '../../../helpers/wallet/getMoneyByUserId.api.js';

const UnderMoney = ({ userId, setIsUnderPay }) => {

    const [money, setMoney] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMoneyByUserIdApi(userId);
            if (response.status === 'success') {
                setMoney(response.result);
                setIsUnderPay && setIsUnderPay(response.result);
            } else console.error(response);
        }; fetchData();
    }, []);

    return (
        <>
            ${money}
        </>
    );
};

export default UnderMoney;