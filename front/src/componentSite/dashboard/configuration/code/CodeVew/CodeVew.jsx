import './codeVew.scss';
import { useState } from 'react';
import CodeFilter from '../CodeFilter/CodeFilter';

const CodeVew = () => {

    const [codes, setCodes] = useState(null);

    return (
        <div className='codeVew'>
            <CodeFilter setCodes={setCodes} />
        </div>
    );
};

export default CodeVew;