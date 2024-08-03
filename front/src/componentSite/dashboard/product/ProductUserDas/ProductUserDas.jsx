import './productUserDas.scss';
import { useState } from 'react';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import SelectedProd from '../../../../component/products/SelectedProd/SelectedProd';

const ProductUserDas = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='productUserDas'>
            <Title Icon={AgricultureIcon} name='Productos por Usuario' />
            <UserSearch setUser={setUser} />
            <div className='productUserDasSelected'>
                {user ? (user.financeData ? (
                    <SelectedProd userId={user._id} />
                ) : (<p>El usuario no posee datos financieros</p>)
                ) : (<p>Seleccione un usuario</p>)
                }
            </div>
        </div>
    );
};

export default ProductUserDas;