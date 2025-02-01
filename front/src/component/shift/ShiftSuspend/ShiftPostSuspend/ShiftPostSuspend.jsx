import './shiftPostSuspend.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import UnderMoney from '../../../pay/UnderMoney/UnderMoney';
import { useLoginContext } from '../../../../context/LoginContext';
import { shiftSuspendByPanelApi } from '../../../../helpers/shift/shiftSuspendByAdmin.api.js';

const ShiftPostSuspend = ({ admin, shift, setSnack, setModal }) => {

    const { user } = useLoginContext();
    const [isUnderPay, setIsUnderPay] = useState(null);
    const [password, setPassword] = useState(null);
    const [loadin, setLoading] = useState(false);

    console.log(admin);
    

    const handleSuspend = async () => {
        setLoading(true);
        const query = { id: shift._id, admin };
        if (password) query.password = password;
        const response = await shiftSuspendByPanelApi(query);
        if (response.status) setSnack({ open: true, message: { status: 'success', mess: response.result } });
        else setSnack({ open: true, message: { status: 'error', mess: response.error } });
        setTimeout(() => {
            setSnack({ open: false, message: { status: '', mess: '' } });
            setModal({ open: false, id: null });
            setLoading(false);
        }, 2000);
    };

    return (
        <div className='shiftPostSuspend'>
            <div className='line' style={{ backgroundColor: '#ec3639' }}></div>
            <p className='colSH'>Suspender:</p>
            {shift && (!shift.isPay
                ? <>
                    <p className='pgray'>La transacción no se realizó a través de esta plataforma. Si decides suspender la reserva, asegúrate de contactar al {admin ? 'cliente' : 'administrador'} directamente para gestionar la devolución del importe correspondiente.</p>
                    {admin ?
                        <div>
                            <p style={{ fontSize: '12px' }}>{shift.customerData?.name}</p>
                            <p style={{ fontSize: '12px' }}>{shift.customerData?.email}</p>
                            <p style={{ fontSize: '12px' }}>cel:{shift.customerData?.phone}</p>
                        </div>
                        : <p style={{ fontSize: '12px' }}>Dirígite al sitio de {shift?.place?.name} luego de suspender</p>
                    }
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
            )}

            <button className='btn btnSH' onClick={handleSuspend}>
                {loadin ? <Spinner size={25} color='gray' /> : 'Suspender'}
            </button>
        </div>
    );
};

export default ShiftPostSuspend;