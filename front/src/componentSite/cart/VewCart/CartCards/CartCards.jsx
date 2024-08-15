import PriceCards from './PriceCards/PriceCards';
import CancelIcon from '@mui/icons-material/Cancel';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import { useCartContext } from '../../../../context/CartContext';
import Counter from '../../../../component/utils/Counter/Counter';

const CartCards = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <tr>
            <td className='tdBanner'>
                <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                <BigImg img={item.img} border={false} />
                <p>{item.name}</p>
                <p className='pID'>{item._id}</p>
            </td>
            <td>{item.is}</td>
            <td style={{width: '285px'}}><PriceCards item={item} /></td>
            <td><Counter prod={item} /></td>
            <td style={{ width: '80px' }}>${totalProduct(item._id)}</td>
        </tr>
    );
};

export default CartCards;