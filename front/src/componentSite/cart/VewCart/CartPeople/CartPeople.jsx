import { useState } from 'react';
import IsUserCart from './IsUserCart/IsUserCart';
import Load from '../../../../component/utils/Load';
import { useLoginContext } from '../../../../context/LoginContext';
import IsNotUserCart from './IsNotUserCart/IsNotUsercart';

const CartPeople = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);

    return (
        <>
            {!user.logged && <IsNotUserCart />}
            {user.logged && <IsUserCart user={user.data} setLoading={setLoading} /> }
            <Load loading={loading} />
        </>
    );
};

export default CartPeople;