import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function Checkboxes({ labels, setType }) {

    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleCheckboxChange = (index, label) => {
        setSelectedIdx(index);
        setType(label);
    };

    return (
        <>
            {labels && labels.map((label, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                        checked={selectedIdx === index}
                        onChange={() => handleCheckboxChange(index, label)}
                    />
                    <p>{label}</p>
                </div>
            ))}
        </>
    );
};