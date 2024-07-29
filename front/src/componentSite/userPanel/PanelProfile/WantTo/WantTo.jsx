import './wantTo.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WantTo = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);
    useEffect(() => { navigate(value) }, [value]);

    return (
        <div className='wantTo'>
            <label>Quiero ...</label>
            <select value={value} onChange={handleChange}>
                <option value="">...</option>
                <option value="/profile/advertising">Estar en el banner</option>
                <option value="/profile/advertising">Crear publicidad</option>
                <option value="/cart">Ver el carrito</option>
                <option value="/profile/datauser">Tus datos</option>
                <option value="/profile/panelavatar">Modificar tu avatar</option>
                <option value="/profile/productmenu">Crear un producto</option>
            </select>
        </div>
    );
};

export default WantTo;