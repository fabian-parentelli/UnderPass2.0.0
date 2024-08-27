import { useState } from "react";
import UserSearch from "../../../../../component/utils/UserSearch/UserSearch";
import WalletByUser from "../../../../../component/wallet/WalletByUser/WalletByUser";

const WalletVewByUser = ({ setLoading }) => {

    const [user, setUser] = useState(null);

    return (
        <div className='walletVewByUser'>
            <div style={{ marginTop: '1rem' }}></div>
            <UserSearch setUser={setUser} />
            <div style={{ marginTop: '1rem' }}></div>
            {user && <WalletByUser userId={user._id} setLoading={setLoading} />}
        </div>
    );
};

export default WalletVewByUser;