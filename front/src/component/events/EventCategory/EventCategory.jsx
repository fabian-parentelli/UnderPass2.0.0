import './eventCategory.scss';
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import { eventCategorysArray } from '../../../utils/typeEventCategory.utils.js';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EventCategory = ({ values, handleChangue }) => {

    const [vew, setVew] = useState(false);

    useEffect(() => {
        const isSome = eventCategorysArray.some(s => s.val === values.category);
        if (!isSome && values.category !== '') setVew(true);
        if (values.category === 'other') setVew(true);
    }, [values.category]);

    const handleReturn = () => setVew(false);

    return (
        <div className='eventCategory'>
            {vew ?
                <>
                    <input type="text" name='category' onChange={handleChangue} value={values.category} />
                    <Tooltip title='Ver el listado'>
                        <p onClick={handleReturn} className='eventCategoryret'><KeyboardBackspaceIcon /></p>
                    </Tooltip>
                </>
                :
                <select name="category" onChange={handleChangue} value={values.category} >
                    <option value="">Elige una categoría</option>
                    {eventCategorysArray.map((cat, i) => (
                        <option key={i} value={cat.val}>{cat.name}</option>
                    ))}
                </select>
            }
        </div>
    );
};

export default EventCategory;