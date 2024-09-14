import './getAllWalletTable.scss';
import { Fragment, useState } from 'react';
import flagsIcon from '../../../../../../utils/flagsIcon.utils';
import Movement from '../../../../../../component/wallet/WalletBodyPanel/Movement/Movement';

const GetAllWalletTable = ({ wallets }) => {

    const [vew, setVew] = useState(null);
    const handleVew = (id) => setVew(vew === id ? null : id);
    
    return (
        <div className='getAllWalletTable'>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>País</th>
                        <th>Rendimientos</th>
                        <th>Solicta dinero</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {wallets && wallets.map((wallet) => (
                        <Fragment key={wallet._id}>
                            <tr>
                                <td
                                    onClick={wallet.money.length > 0 ? () => handleVew(wallet._id) : undefined}
                                    className='getAllWalletTablePointer'
                                >
                                    <p>{wallet.userData.name}</p>
                                    <p>{wallet.userData.email}</p>
                                    <p>{wallet.userData?.phone}</p>
                                    <p>{wallet.userId}</p>
                                </td>
                                <td className='getAllWalletTableFlags'>
                                    <img src={wallet.country === 'UY' ? flagsIcon.uy : flagsIcon.ar} alt="img" />
                                </td>
                                <td style={{ color: wallet.inWallet ? 'green' : 'red' }}>
                                    {wallet.inWallet ? 'SI' : 'NO'}
                                </td>
                                <td style={{ color: wallet.reqMoney ? 'green' : 'red' }}>
                                    {wallet.reqMoney ? 'SI' : 'NO'}
                                </td>
                                <td>${wallet.total}</td>
                            </tr>

                            {vew === wallet._id &&
                                <tr>
                                    <td colSpan='5'><Movement wallet={wallet} /></td>
                                </tr>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetAllWalletTable;