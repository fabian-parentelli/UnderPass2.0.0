import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxes2 = ({ labels, setType, multiselect = false }) => {

    const [selected, setSelected] = useState([]);

    const handleCheckboxChange = (label) => {
        let updatedSelection;
        if (multiselect) {
            if (selected.includes(label._id)) updatedSelection = selected.filter((i) => i !== label._id);
            else updatedSelection = [...selected, label._id];
        } else updatedSelection = [label._id];
        setSelected(updatedSelection);
        setType(updatedSelection);
    };

    return (
        <>
            {labels && labels.map((label) => (
                <div key={label._id} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Checkbox
                        checked={selected.includes(label._id)}
                        onChange={() => handleCheckboxChange(label)}
                    />
                    <p>{label.title || label.name}</p>
                </div>
            ))}
        </>
    );
};

export default CheckBoxes2;
