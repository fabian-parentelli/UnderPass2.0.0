import './uploadTransfer.scss';
import { useState, useEffect } from 'react';
import Checkboxes from '../../../../component/utils/Checkboxes';
import CloudTransfer from './CloudTranfer/CloudTranfer';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert';
import WhatsAppTransfer from './WhatsAppTransfer/WhatsAppTransfer';
import { getDataPassApi } from '../../../../helpers/dataPass/getDataPass.api.js';
import WriteTransfer from './WriteTranfer/WriteTransfer.jsx';


const UploadTransfer = ({ order, setLoading }) => {

    const [dataPass, setDataPass] = useState(null);
    const [type, setType] = useState(null);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const country = localStorage.getItem('country');
            const response = await getDataPassApi(country)
            if (response.status === 'success') setDataPass(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <>
            <div className='uploadTransfer'>
                <div className='uploadTransferChek'>
                    <Checkboxes labels={['Subir ticket', 'WhatsApp', 'Completar datos']} setType={setType} />
                </div>

                {type && type === 'Subir ticket' && <CloudTransfer order={order} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} dataPass={dataPass} />}
                {type && type === 'WhatsApp' && <WhatsAppTransfer order={order} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} dataPass={dataPass} />}
                {type && type === 'Completar datos' && <WriteTransfer order={order} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} dataPass={dataPass} />}
            </div>

            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default UploadTransfer;