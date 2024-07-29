import './productUserDas.scss';
import { useState } from 'react';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import SelectedProd from '../../../../component/products/SelectedProd/SelectedProd';

const ProductUserDas = () => {

    const [user, setUser] = useState(null);

    console.log(user);

    return (
        <div className='productUserDas'>
            <Title Icon={AgricultureIcon} name='Productos por Usuario' />
            <UserSearch setUser={setUser} />
            <div className='productUserDasSelected'>
               {user && <SelectedProd userId={user._id} />}
            </div>
        </div>
    );
};

export default ProductUserDas;