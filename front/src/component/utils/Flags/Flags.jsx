import ReactFlagsSelect from 'react-flags-select';
import { useState } from 'react';

const Flags = ({ setSelected, flag }) => {

    const [selected, setSelectedState] = useState('');

    const handleSelect = (code) => {
        setSelectedState(code);
        setSelected(code);
    };

    return (
        <div style={{ zIndex: '1' }}>
            <ReactFlagsSelect
                countries={flag || ''}
                onSelect={handleSelect}
                placeholder={selected ? '' : 'Tu País'}
                searchable={flag ? false : true}
                searchPlaceholder={!selected && !flag ? 'Buscar país' : ''}
                selected={selected}
            />
        </div>
    );
};

export default Flags;