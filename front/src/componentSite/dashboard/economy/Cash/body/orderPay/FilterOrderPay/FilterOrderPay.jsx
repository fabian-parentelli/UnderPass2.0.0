import './filterOrderPay.scss';
import { useEffect, useState } from 'react';
import { getDataOrderPayApi } from '../../../../../../../helpers/orderPay/getDataOrderPay.api.js';

const FilterOrderPay = ({ country, setQuerys, setVew, selectedIds, orders, setGenerate, generate }) => {

    const [users, setUsers] = useState([]);
    const handleChange = (e) => setQuerys(e.target.value);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDataOrderPayApi(country);
            if (response.status === 'success') setUsers(response.result);
            else (console.error(response.error));
        }; fetchData();
    }, []);

    useEffect(() => {
        let result = 0;
        selectedIds.forEach((selec) => {
            const sum = orders.filter(ord => ord._id == selec);
            if (sum.length > 0) result += sum[0].total;
        });
        setTotal(result);
    }, [selectedIds]);

    return (
        <div className='filterOrderPay'>

            <div className='filterOrderPayDiv'>
                <select name='user' onChange={handleChange}>
                    <option value="">Filtrar por usuario</option>
                    {users && users.map((user) => (
                        <option key={user.userId} value={user.userId} >{user.name}</option>
                    ))}
                </select>
                <button className='btn btnC' onClick={() => setGenerate(!generate)}>Generar</button>
            </div>

            {total > 0 && <p>${total}</p>}

            {selectedIds.length > 0 &&
                <button className='btn btnD' onClick={() => setVew(true)}>Confirmar</button>
            }
        </div>
    );
};

export default FilterOrderPay;