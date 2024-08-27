import './cartProduct.scss';
import { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import BigImg from '../../../../component/utils/BigImg/BigImg';
import { useCartContext } from '../../../../context/CartContext';
import Counter from '../../../../component/utils/Counter/Counter';
import { getLastPriceApi } from '../../../../helpers/prices/getLastPrice.api.js';
import typeCart from '../../../../utils/typeCart.utils.js';

const CartProduct = ({ item }) => {

    const [price, setPrice] = useState(0);
    const { removeItem, totalProduct } = useCartContext();
    const country = localStorage.getItem('country');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLastPriceApi({ country: country, name: 'products' })
            if (response.status === 'success') setPrice(response.result.price);
            else console.log(response);
        }; if (country) fetchData();
    }, []);

    return (
        <tr className='cartProduct'>
            <td className='tdBanner'>
                <CancelIcon className='cancelIcon' onClick={() => removeItem(item._id)} />
                <BigImg img={item.img} border={false} />
                <p>{item.name}</p>
                <p className='pID'>{item._id}</p>
            </td>
            <td>{typeCart(item.is)}</td>
            <td>${item.price}</td>
            <td><Counter prod={item} /></td>
            {<td style={{ width: '80px' }}>${totalProduct(item._id)}</td>}
        </tr>
    );
};

export default CartProduct;