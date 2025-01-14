import { getCodeApi } from '../../../../../helpers/code/getCodes.api';
import './codeFilter.scss';
import { useEffect, useState } from 'react';

const CodeFilter = () => {

    const [query, setQuery] = useState({});

    console.log(query);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCodeApi(query);
            console.log(response);

            // Acá me quede creo que lo voy a mostarr en detail como hice la conf de los shift
            
        }; fetchData();
    }, []);

    return (
        <div className='codeFilter'>
            CodeFilter
        </div>
    );
};

export default CodeFilter;