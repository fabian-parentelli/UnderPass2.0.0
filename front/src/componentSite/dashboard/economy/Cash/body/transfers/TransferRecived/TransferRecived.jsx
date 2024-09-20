import './transferRecived.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getTransferApi } from '../../../../../../../helpers/transfer/getTransfer.api.js';
import { confirmTransferApi } from '../../../../../../../helpers/transfer/confirmTransfer.api.js';
import TransferTable from '../../../../../../../component/wallet/tablesWallet/TransferTable/TransferTable.jsx';
import ConfirmPassword from '../../../../../../../component/utils/ConfirmPassword/ConfirmPassword.jsx';
import SnackbarAlert from '../../../../../../../component/utils/SnackbarAlert.jsx';

const TransferRecived = ({ country, setLoading, values }) => {

    const [transfers, setTransfers] = useState(null);
    const [page, setPage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [password, setPassword] = useState(null);
    const [tif, setTif] = useState(null);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleOpenModal = (id) => {
        setModalOpen(true);
        setTif(id);
    };

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            const query = {};
            if (country) query.country = country
            if (page) query.page = page;
            if (values.type) query.type = values.type;
            if (values.confirm) query.confirm = values.confirm;
            if (values._id) query.id = values._id
            const response = await getTransferApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchdata();
    }, [country, page, values]);

    const HandleChangePage = (page) => setPage(page);

    const handleConfirm = async (id) => {
        setModalOpen(false)
        setLoading(true);
        const response = await confirmTransferApi(id, { password: password });
        if (response.status === 'success') {
            const tranfersCopy = { ...transfers };
            const index = tranfersCopy.docs.findIndex(tra => tra._id === response.result._id);
            tranfersCopy.docs[index] = response.result;
            setTransfers(tranfersCopy);
        } else {
            setMessage({ status: 'error', mess: response.error });
            setLoading(false);
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
        setLoading(false);
    };

    return (
        <div className='transferRecived'>
            <TransferTable
                transfers={transfers}
                handleOpenModal={handleOpenModal}
                setTransfers={setTransfers}
                setLoading={setLoading}
            />
            <Pager users={transfers} HandleChangePage={HandleChangePage} />
            <ConfirmPassword modalOpen={modalOpen} setModalOpen={setModalOpen} setPassword={setPassword} handleClick={handleConfirm} id={tif && tif} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default TransferRecived;