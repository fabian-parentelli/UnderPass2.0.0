import { useEffect, useState } from "react";
import Movement from "../Movement/Movement";

const UnderPayments = ({ wallet, setLoading }) => {

    const [newWallet, setNewWallet] = useState(null);

    useEffect(() => {
        const data = [...wallet.money];
        setNewWallet({ ...wallet, money: data.filter(wal => wal.TypeMotion === 'underPay' && !wal.type) });
    }, []);

    return (
        <div className='payments'>
            {newWallet && <Movement wallet={newWallet} />}
        </div>
    );
};

export default UnderPayments;