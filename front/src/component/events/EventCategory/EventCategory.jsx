import './eventCategory.scss';
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EventCategory = ({ values, handleChangue }) => {

    const [vew, setVew] = useState(false);

    useEffect(() => {
        const isSome = categorys.some(s => s.val === values.category);
        if (!isSome && values.category !== '') setVew(true);
        else setVew(false);
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
                    {categorys.map((cat, i) => (
                        <option key={i} value={cat.val}>{cat.name}</option>
                    ))}
                </select>
            }
        </div>
    );
};

export default EventCategory;

const categorys = [
    { val: 'concert', name: 'Concierto' },
    { val: "theater", name: 'Teatro' },
    { val: 'filmmaker', name: 'Filmmaker' },
    { val: 'standup', name: 'Stand Up' },
    { val: 'conference', name: 'conference' },
    { val: 'art', name: 'Artística' },
    { val: 'dance', name: 'Danza' },
    { val: 'other', name: 'Otro' },
];