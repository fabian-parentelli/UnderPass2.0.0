import './shiftHours.scss';
import { useEffect, useState } from 'react';
import CheckBoxes2 from "../../../../utils/CheckBoxes2";
import { setHours } from '../../../../../utils/setHours.utils.js';

const ShiftHours = ({ hour, setType, book }) => {

    const [labels, setLabels] = useState(setHours(hour))

    useEffect(() => {
        if (book.length > 0) {
            let data = setHours(hour);
            book.forEach((bo) => {
                if (bo.hour) {
                    bo.hour.forEach((hour) => {
                        data = data.filter(lab => lab.title !== hour);
                    });
                };
            });
            setLabels(data);
        } else setLabels(setHours(hour));
    }, [book]);

    if (labels.length === 0) {
        return <div className='ShiftHours'><p className='ShiftHoursP'>Todos los horarios están ocupados.</p></div>;
    };

    return (
        <div className='ShiftHours'>
            {labels && <CheckBoxes2 labels={labels} setType={setType} multiselect={true} />}
        </div>
    );
};

export default ShiftHours;