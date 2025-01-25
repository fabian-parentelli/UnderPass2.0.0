import './shiftPostSuspend.scss';
import UnderMoney from '../../../pay/UnderMoney/UnderMoney';
import { useLoginContext } from '../../../../context/LoginContext';
import { shiftSuspendByPanelApi } from '../../../../helpers/shift/shiftSuspendByAdmin.api.js';
import { useState } from 'react';

const ShiftPostSuspend = ({ admin, shift, setSnack, setModal }) => {

    const { user } = useLoginContext();
    const [isUnderPay, setIsUnderPay] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSuspend = async () => {
        const query = { id: shift._id, admin };
        if (password) query.password = password;        
        const response = await shiftSuspendByPanelApi(query);


        // --------------------------------------------------
    };

    return (
        <div className='shiftPostSuspend'>
            <div className='line' style={{ backgroundColor: '#ec3639' }}></div>
            <p className='colSH'>Suspender:</p>
            {!shift.isPay
                ? <>
                    <p className='pgray'>La transacción no se realizó a través de esta plataforma. Si decides suspender la reserva, asegúrate de contactar al cliente directamente para gestionar la devolución del importe correspondiente.</p>
                    <div>
                        <p style={{ fontSize: '12px' }}>{shift.customerData.name}</p>
                        <p style={{ fontSize: '12px' }}>{shift.customerData.email}</p>
                        <p style={{ fontSize: '12px' }}>cel:{shift.customerData?.phone}</p>
                    </div>
                </>
                : <>
                    <p className='pgray'>La transacción se realizó a través de esta plataforma. Si decides suspender la reserva, asegúrate de devolver el importe correspondiente a UnderPass, para que podamos revertir el dinero al cliente.</p>
                    <div className='shiftPostSuspendPay'>
                        {user.logged && <UnderMoney userId={user.data._id} setIsUnderPay={setIsUnderPay} />}
                        <p>Under<span>Pay</span></p>
                    </div>

                    {isUnderPay !== null && isUnderPay > 0 && (
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    )}
                </>
            }
            
            <button className='btn btnSH' onClick={handleSuspend}>
                Suspender
            </button>
        </div>
    );
};

export default ShiftPostSuspend;