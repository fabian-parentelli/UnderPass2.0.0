import './movementsCash.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getCashApi } from '../../../../../../../helpers/cash/getCash.api.js';
import MovementsCashTable from '../MovementsCashTable/MovementsCashTable.jsx';
import MovementCashFilter from '../MovementsCashFilter/MovementCashFilter.jsx';

const MovementsCash = ({ country, setLoading }) => {

    const [movements, setMovements] = useState(null);
    const [query, setQuery] = useState({ country: country })

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getCashApi(query);
            if (response.status === 'success') setMovements(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const HandleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='movementsCash'>
            <MovementCashFilter setQuery={setQuery} country={country} />
            {movements && <MovementsCashTable movements={movements.docs} />}
            <Pager users={movements} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default MovementsCash;