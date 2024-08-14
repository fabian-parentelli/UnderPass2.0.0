import './counter.scss';
import { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useCartContext } from '../../../context/CartContext';

const Counter = ({ prod }) => {

    const [count, setCount] = useState(prod.quantity || 1);
    const { updateQuantity } = useCartContext();

    const handelLess = () => count > 1 && setCount(count - 1);
    const handleAdd = () => {
        if (prod.end) count < Math.ceil((new Date(prod.end) - new Date()) / (1000 * 60 * 60 * 24)) && setCount(count + 1);
        else setCount(count + 1);
    };

    useEffect(() => {
        updateQuantity(prod._id, count);
    }, [count]);

    return (
        <div className='counter'>
            <RemoveCircleIcon className='icon' onClick={handelLess} disabled={count <= 1} />
            <p>{count && count}</p>
            <AddCircleIcon className='icon' onClick={handleAdd} disabled={prod.is === 'event' && count >= 6} />
        </div>
    );
};

export default Counter;