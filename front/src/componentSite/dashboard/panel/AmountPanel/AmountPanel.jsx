import './amountPanel.scss';
import { useEffect, useState } from 'react';
import { getAmountAllertApi } from '../../../../helpers/alerts/getAmounts.api.js';
import AmountsCards from '../../../../component/dashboard/panel/AmountsCards/AmountsCards.jsx';

const AmountPanel = () => {

    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAmountAllertApi();
            if (response.status === 'success') setResult(response.result);
            else console.log(response);
        }; fetchData();
    }, []);

    return (
        <div className='amountPanel'>
            {result &&
                <>
                    <AmountsCards title='Usuarios' arg={result.ar.users} uru={result.uy.users} />
                    <AmountsCards title='Productos' arg={result.ar.products} uru={result.uy.products} />
                </>
            }
        </div>
    );
};

export default AmountPanel;