import './eventCategory.scss';
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EventCategory = ({ values, handleChangue }) => {

    const [vew, setVew] = useState(false);

    useEffect(() => {
        if (values.category === 'other') setVew(true);
    }, [values.category]);

    const handleReturn = () => setVew(false);

    return (
        <div className='eventCategory'>
            {vew ?
                <>
                    <input type="text" name='category' onChange={handleChangue} />
                    <Tooltip title='Ver el listado'>
                        <p onClick={handleReturn} className='eventCategoryret'><KeyboardBackspaceIcon /></p>
                    </Tooltip>
                </>
                :
                <select name="category" onChange={handleChangue} >
                    <option value="">Elige una categoría</option>
                    <option value="concert">Concierto</option>
                    <option value="theater">Teatro</option>
                    <option value="filmmaker">Filmmaker</option>
                    <option value="standup">Stand Up</option>
                    <option value="conference">Conferencia</option>
                    <option value="art">Artística</option>
                    <option value="dance">Danza</option>
                    <option value="other">Otro</option>
                </select>
            }
        </div>
    );
};

export default EventCategory;