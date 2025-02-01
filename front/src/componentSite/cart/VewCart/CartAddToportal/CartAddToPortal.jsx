import CancelIcon from '@mui/icons-material/Cancel';
import { useCartContext } from '../../../../context/CartContext';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import PriceAddToPortal from './PriceAddToPortal';
import Counter from '../../../../component/utils/Counter/Counter';
import { typeCart_caUtils } from '../../../../utils/cart_utils/typeCart.cart.utils';

const CartAddToPortal = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <tr>
            <td className='tdBanner'>
                <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                <BigImg img={item.img} border={false} />
                <p>{item.name}</p>
                <p className='pID'>{item._id}</p>
            </td>
            <td>{typeCart_caUtils(item.is)}</td>
            <td style={{ width: '285px' }}><PriceAddToPortal item={item} /></td>
            <td><Counter prod={item} /></td>
            <td style={{ width: '80px' }}>${totalProduct(item._id)}</td>
        </tr>
    );
};

export default CartAddToPortal;