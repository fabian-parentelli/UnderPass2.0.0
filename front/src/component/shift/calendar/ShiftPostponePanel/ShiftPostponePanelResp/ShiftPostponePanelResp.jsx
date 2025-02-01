import './shiftPostponePanelResp.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import { activePostponeApi } from '../../../../../helpers/shift/postpone/activePostpone.api.js';

const ShiftPostponePanelResp = ({ postpone, setModal, postpones, setPostpones }) => {

    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        const response = await activePostponeApi(postpone._id);
        if (response.status) {
            const data = [...postpones];
            const result = data.filter(post => post._id !== postpone._id);
            setPostpones(result);
            setModal({ open: false, id: null, message: '' });
        }else console.error(response);
        setLoading(false);
    };

    return (
        <div className='shiftPostponePanelResp'>
            <h2>Respuesta de la propuesta de posponer.</h2>
            <p>El {postpone.to === 'admin' ? 'administrador' : 'usuario'} a decidido <span style={{ color: postpone.accept ? 'green' : '#ec3639' }}>
                {postpone.accept ? 'posponer' : 'suspender'}</span>.
            </p>

            {!postpone.accept ?
                <>
                    <p className='pgray'>{postpone.resMessage}</p>
                    {postpone?.customerData &&
                        <div>
                            <p>{postpone.customerData.name}</p>
                            <p>{postpone.customerData.email}</p>
                            <p>cel: {postpone.customerData.phone}</p>
                        </div>
                    }
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