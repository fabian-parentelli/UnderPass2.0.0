import './walletCreate.scss';
import { useState } from 'react';
import UserSearch from '../../utils/UserSearch/UserSearch';
import FlagsCountry from '../../utils/FlagsCountry';
import { newWalletApi } from '../../../helpers/wallet/newWallet.api';
import SnackbarAlert from '../../utils/SnackbarAlert';

const WalletCreate = ({ setLoading, setVew }) => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleClik = async () => {
        setLoading(true);
        const response = await newWalletApi({ userId: user._id, country: user.country });
        if (response.status === 'suvcess') {
            setTimeout(() => {
                setLoading(false);
                setVew(null);
            }, 2000);
        } else {
            setLoading(false);
            setMessage({ status: 'error', mess: response.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    return (
        <div className='walletCreate'>
            <h3>Crear billetera para un usuario.</h3>
            <UserSearch setUser={setUser} />

            {user &&
                <div className='walletCreateUserData'>
                    <p><strong>Nombre:</strong> {user.label}</p>
                    <p><strong>id:</strong> {user._id}</p>
                    <div className='flagsDiv'>
                        <p><strong>País:</strong></p>
                        <FlagsCountry country={user.country} whidt='30' />
                    </div>
                    <button className='btn btnB' onClick={handleClik}>Crear</button>
                </div>
            }
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default WalletCreate;