import './walletByUser.scss';
import { useEffect, useState } from 'react';
import FlagsCountry from '../../utils/FlagsCountry';
import WalletBodyPanel from '../WalletBodyPanel/WalletBodyPanel.jsx';
import RequestMoneyWallet from '../RequestMoneyWallet/RequestMoneyWallet.jsx';
import { getWalletByUserIdApi } from '../../../helpers/wallet/getWalletByUserId.api.js';

const WalletByUser = ({ userId, setLoading }) => {

    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getWalletByUserIdApi(userId);
            if (response.status === 'success') setWallet(response.result);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);
    
    return (
        <>
            {wallet && (
                <>
                    <div className='walletByUser'>
                        <div className='walletByUserData'>
                            <img src={wallet.user?.imgUrl} alt="img" />
                            <div className='walletByUserText'>
                                <h3>{wallet.user?.name}</h3>
                                <p>{wallet.user?.email}</p>
                                <div className='walletByUserMoney'>
                                    <p><strong>Moneda:</strong></p>
                                    <FlagsCountry country={wallet?.country} whidt={20} />
                                </div>
                                <p><strong>UserId:</strong> {wallet?.userId}</p>
                                <p><strong>Billetera:</strong> {wallet?._id}</p>
                            </div>
                        </div>
                        <div className='walletByUserTotalDiv'>
                            <p>Tu saldo: <span>${wallet?.total}</span></p>
                        </div>

                        <div>
                            {wallet.inWallet &&
                                <RequestMoneyWallet wallet={wallet} setWallet={setWallet} setLoading={setLoading} />
                            }
                        </div>
                    </div>
                    <WalletBodyPanel wallet={wallet} setLoading={setLoading} />
                </>
            )}
        </>
    );
};

export default WalletByUser;
