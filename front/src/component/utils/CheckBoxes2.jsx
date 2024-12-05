import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxes2 = ({ labels, setType, multiselect = false, selecteds = [], index }) => {

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (selecteds.length > 0) setSelected(selecteds);
    }, [selecteds]);

    const handleCheckboxChange = (label) => {
        let updatedSelection;
        if (multiselect) {
            if (selected.includes(label._id)) updatedSelection = selected.filter((i) => i !== label._id);
            else updatedSelection = [...selected, label._id];
        } else updatedSelection = [label._id];
        setSelected(updatedSelection);
        setType(index !== undefined ? { index, selection: updatedSelection } : updatedSelection);
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