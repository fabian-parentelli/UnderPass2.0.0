import { useState } from 'react';
import IsUserCart from './IsUserCart/IsUserCart';
import Load from '../../../../component/utils/Load';
import { useLoginContext } from '../../../../context/LoginContext';

const CartPeople = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);

    return (
        <>
            {user.logged && <IsUserCart user={user.data} /> }
            <Load loading={loading} />
        </>
    );
};

export default CartPeople;