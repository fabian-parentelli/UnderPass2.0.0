import './uploadTransfer.scss';
import { useState } from 'react';
import Checkboxes from '../../../../component/utils/Checkboxes';
import CloudTransfer from './CloudTranfer/CloudTranfer';

const UploadTransfer = ({ order }) => {

    const [type, setType] = useState(null);

    return (
        <div className='uploadTransfer'>
            <div className='uploadTransferChek'>
                <Checkboxes labels={['Subir ticket', 'WhatsApp', 'Completar datos']} setType={setType} />
            </div>
            
            {type && type === 'Subir ticket' && <CloudTransfer order={order} />}
            {type && type === 'WhatsApp' && 'whatsApp'}
            {type && type === 'Completar datos' && 'completar datos'}
        </div>
    );
};

export default UploadTransfer;