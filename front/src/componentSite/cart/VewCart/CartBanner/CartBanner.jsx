import './cartBanner.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import { useCartContext } from '../../../../context/CartContext';
import Counter from '../../../../component/utils/Counter/Counter';
import PriceCartBanner from './prices/PriceCartBanner';
import { typeCart_caUtils } from '../../../../utils/cart_utils/typeCart.cart.utils';

const CartBanner = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <tr className='cartBanner'>
            <td className='tdBanner'>
                <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                <BigImg img={item.img} border={false} />
                <p>{item.name}</p>
                <p className='pID'>{item._id}</p>
            </td>
            <td>{typeCart_caUtils(item.is)}</td>
            <td style={{ width: '285px' }}>{<PriceCartBanner item={item} />}</td>
            <td><Counter prod={item} /></td>
            <td style={{ width: '80px' }}>${totalProduct(item._id)}</td>
        </tr>
    );
};

export default CartBanner;