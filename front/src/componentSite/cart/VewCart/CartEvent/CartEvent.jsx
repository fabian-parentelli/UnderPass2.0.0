import CancelIcon from '@mui/icons-material/Cancel';
import typeCart from '../../../../utils/typeCart.utils';
import { imgages } from '../../../../utils/imagesData.utils';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import { useCartContext } from '../../../../context/CartContext';
import Counter from '../../../../component/utils/Counter/Counter';


const CartEvent = ({ item }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <>
            {item &&
                <tr>
                    <td className='tdBanner'>
                        <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                        <BigImg img={item.img.isPreset ? imgages.underEvent : item.img.img} border={false} />
                        <p>{item.name}</p>
                        <p className='pID'>{item.description}</p>
                    </td>
                    <td>{typeCart(item.is)}</td>
                    <td>${item.price}</td>
                    <td><Counter prod={item} /></td>
                    {<td style={{ width: '80px' }}>${totalProduct(item._id)}</td>}
                </tr>
            }
        </>
    );
};

export default CartEvent;