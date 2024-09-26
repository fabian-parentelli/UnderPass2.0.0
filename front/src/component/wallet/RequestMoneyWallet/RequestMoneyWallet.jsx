import { newOrderPayApi } from "../../../helpers/orderPay/newOrderPay.api";

const RequestMoneyWallet = ({ wallet, setWallet, setLoading }) => {

    const handleClik = async () => {
        setLoading(true);
        const response = await newOrderPayApi({ userId: wallet.userId, total: wallet.total, country: wallet.country });
        if(response.status === 'success') setWallet(response.result);
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='RequestMoneyWallet'>
            {!wallet.reqMoney ?
                <button className='btn btnD' onClick={handleClik}>Cobrar</button>
                : <div>
                    <p>Has solicitado cobrar tu dinero.</p>
                    <p style={{ fontSize: '12px' }}>En un máximo de 48 horas hábiles lo tendras en tu cuenta.</p>
                </div>
            }
        </div>
    );
};

export default RequestMoneyWallet;