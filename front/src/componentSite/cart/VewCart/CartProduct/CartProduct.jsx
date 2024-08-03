import './cartProduct.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import Counter from '../../../../component/utils/Counter/Counter';
import { useCartContext } from '../../../../context/CartContext';

const CartProduct = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <tr className='cartProduct'>
            <td className='tdBanner'>
                <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                <BigImg img={item.img} border={false} />
                <p>{item.name}</p>
                <p className='pID'>{item._id}</p>
            </td>
            <td>${item.price}</td>
            <td><Counter prod={item} /></td>
            <td style={{ width: '80px' }}>${totalProduct(item._id)}</td>
        </tr>
    );
};

export default CartProduct;