import './exchange.scss';
import { useEffect, useState } from 'react';
import { exchangeApi } from '../../../helpers/exchange/exchangeApi';

const Exchange = () => {

    const [exchange, setExchange] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await exchangeApi();
            if (response.status === 'success') setExchange(response.result);
        }; fetchData();
    }, []);

    return (
        <div className='exchange'>
           { exchange && <p>AR <span>${exchange.ar}</span> - UY <span>${exchange.uy}</span></p>}
        </div>
    );
};

export default Exchange;