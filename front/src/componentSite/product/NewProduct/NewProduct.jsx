import './newProduct.scss';
import { useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import IsLoggedUrser from '../../../component/user/IsLoggedUser/IsLoggedUser';
import IsFinancialData from '../../../component/user/IsFinancialData/IsFinancialData';
import NewProductC from '../../../component/products/NewProductC/NewProductC';
import SnackbarAlert from '../../../component/utils/SnackbarAlert';
import Load from '../../../component/utils/Load';

const NewProduct = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    return (
        <div className='newProduct'>
            {user && !user.logged && <IsLoggedUrser setPath='newProduct' />}
            {user && user.data && !user.data.financeData && <IsFinancialData setPath='newProduct' />}
            {user && user.logged && user.data.financeData &&
                <NewProductC userId={user.data._id} setOpen={setOpen} setMessage={setMessage} setLoading={setLoading} />
            }
            
            <SnackbarAlert open={open} message={message} />
            <Load loading={loading} />
        </div>
    );
};

export default NewProduct;