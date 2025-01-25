import './shiftPostponePanelResp.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import { activePostponeApi } from '../../../../../helpers/shift/activePostpone.api.js';

const ShiftPostponePanelResp = ({ postpone, setModal }) => {

    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        const response = await activePostponeApi(postpone._id);
        if (response.status) setModal({ open: false, id: null, message: '' });
        else console.error(response);
        setLoading(false);
    };

    return (
        <div className='shiftPostponePanelResp'>
            <h2>Respuesta de la propuesta de posponer.</h2>
            <p>El usuario a decidido <span style={{ color: postpone.accept ? 'green' : '#ec3639' }}>
                {postpone.accept ? 'posponer' : 'suspender'}</span>.
            </p>

            {!postpone.accept ?
                <>
                    <p className='pgray'>{postpone.resMessage}</p>
                    <div>
                        <p>{postpone.customerData.name}</p>
                        <p>{postpone.customerData.email}</p>
                        <p>cel: {postpone.customerData.phone}</p>
                    </div>
                </>
                : <>
                    <p className='pgray'>{postpone.resMessage}</p>
                </>
            }
            
            <button className='btn btnSH shiftPostponePanelRespBtn' onClick={handleConfirm}>
                {loading ? <Spinner size={25} color={'gray'} /> : 'Confirmar'}
            </button>
        </div>
    );
};

export default ShiftPostponePanelResp;