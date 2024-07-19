import './wantTo.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WantTo = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setValue(e.target.value);

    useEffect(() => { navigate(`/profile/${value}`) }, [value]);

    return (
        <div className='wantTo'>
            <label>Quiero ...</label>
            <select value={value} onChange={handleChange}>
                <option value="">...</option>
                <option value="userBanner">Estar en el banner</option>
            </select>
        </div>
    );
};

export default WantTo;