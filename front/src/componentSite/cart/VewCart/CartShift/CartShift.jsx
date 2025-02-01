import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Load from '../../../../component/utils/Load.jsx';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import { useCartContext } from '../../../../context/CartContext';
import { deleteShiftByIdApi } from '../../../../helpers/shift/deleShiftById.api.js';
import { typeCart_caUtils } from '../../../../utils/cart_utils/typeCart.cart.utils.js';

const CartShift = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const response = await deleteShiftByIdApi(item._id);
        if (response.status === 'success') {
            removeItem(item._id)
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <>
            {item &&
                <tr>
                    <td className='tdBanner'>
                        <CancelIcon className='cancelIcon' onClick={handleDelete} />
                        <BigImg img={item.img} border={false} />
                        <p>{item.name}</p>
                        <p className='pID'>{item.description}</p>
                    </td>
                    <td>{typeCart_caUtils(item.is)}</td>
                    <td>${item.price}</td>

                    <td>
                        <p>{item.quantity} turno{item.quantity > 1 ? 's' : ''}</p>
                        <p className='pgray'>No es modificalbe</p>
                    </td>

                    {<td style={{ width: '80px' }}>${totalProduct(item._id)}</td>}
                </tr>
            }
            <Load loading={loading} />
        </>
    );
};

export default CartShift;