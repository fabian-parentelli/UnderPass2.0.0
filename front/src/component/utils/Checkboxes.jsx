import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes({ labels, setType, multiSelect = false }) {
    
    const [selectedIdx, setSelectedIdx] = useState([]);

    const handleCheckboxChange = (index, label) => {
        let updatedSelection;
        if (multiSelect) {
            if (selectedIdx.includes(index)) updatedSelection = selectedIdx.filter(i => i !== index); 
            else updatedSelection = [...selectedIdx, index];
        } else updatedSelection = [index];
        setSelectedIdx(updatedSelection);
        setType(label);
    };

    return (
        <>
            {labels && labels.map((label, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Checkbox
                        checked={selectedIdx.includes(index)}
                        onChange={() => handleCheckboxChange(index, label)}
                    />
                    <p>{label}</p>
                </div>
            ))}
        </>
    );
};