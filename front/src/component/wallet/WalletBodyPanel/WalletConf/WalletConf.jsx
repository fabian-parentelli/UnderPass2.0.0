import './walletConf.scss';
import Switch from '@mui/material/Switch';
import { useUnderContext } from '../../../../context/UnderContext';
import { useEffect, useState } from 'react';
import { updIsWalletApi } from '../../../../helpers/wallet/updIsWallet.api';
import SnackbarAlert from '../../../utils/SnackbarAlert';

const WalletConf = ({ wallet, setLoading }) => {

    const [inWallet, setInWallet] = useState(wallet?.inWallet ?? true);
    const { underData } = useUnderContext();
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleSwitchChange = async (event) => {
        setLoading(true)
        setInWallet(event.target.checked);
        const response = await updIsWalletApi({ wallet: event.target.checked }, wallet._id);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Configuracion actualizada' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='walletConf'>

            <div className='walletConfSwitch'>
                <p>Cobrar lo antes posible</p>
                <Switch checked={inWallet} onChange={handleSwitchChange} />
                <p>Dinero en Billetera</p>
            </div>

            <div className='walletConfSwitchText'>
                <p>Tienes dos opciones en la forma de cobrar.</p>
                <p><strong>"Dinero en billetera":</strong> Con esta opción puedes retirar el dinero cuando quieras, solo que debes precionar el boton 'cobrar'. Mientras tu dinero esté en nuestra plataforma generará un rendimiento anual de {underData && underData.perfomance}%.</p>
                <p><strong>"Cobrar lo antes posible":</strong> con esta opción una vez que el cliente paga, en un plazo de 48 horas hábiles, estarás recibiendo el dinero en la cuenta que hallas proporcionado en tus datos financieros.</p>
            </div>

            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default WalletConf;