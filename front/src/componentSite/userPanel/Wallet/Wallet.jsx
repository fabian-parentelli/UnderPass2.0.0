import './wallet.scss';
import { useState } from 'react';
import Load from '../../../component/utils/Load';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import WalletByUser from '../../../component/wallet/WalletByUser/WalletByUser';

const Wallet = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);

    return (
        <div className='wallet'>
            <Title Icon={LocalAtmIcon} name='Billetera' goTo={'/help'} />
            <WalletByUser userId={user.data._id} setLoading={setLoading} />
            <Load loading={loading} />
        </div>
    );
};

export default Wallet;