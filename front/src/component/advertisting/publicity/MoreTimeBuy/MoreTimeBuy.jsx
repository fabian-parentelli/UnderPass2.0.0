import './moreTimeBuy.scss';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { useCartContext } from '../../../../context/CartContext';


const MoreTimeBuy = ({ data, setMoreTime }) => {

    console.log(data);
    const { addToCart } = useCartContext();
    const [isInPortal, setIsInPortal] = useState(false);
    const [values, setValues] = useState({ days: '', inPortal: isInPortal });

    const handleSwitch = (e) => {
        setIsInPortal(e.target.checked);
        setValues({ ...values, inPortal: e.target.checked });
    };

    return (
        <div className='moreTimeBuy'>
            <h2>Agregar más tiempo</h2>

            <div className='moreTimeSwitch'>
                <p>General</p>
                <Switch value={isInPortal} onChange={handleSwitch} />
                <p>En la portada</p>
            </div>

        </div>
    );
};

export default MoreTimeBuy;