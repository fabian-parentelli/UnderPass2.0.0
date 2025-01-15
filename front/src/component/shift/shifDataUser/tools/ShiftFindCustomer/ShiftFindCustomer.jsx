import './shiftFindCustomer.scss';
import { Spinner } from 'faradaycomp'
import { useEffect, useState } from 'react';
import AutoComplete from '../../../../utils/AutoComplete.jsx';
import { getShiftCustomerByUserIdApi } from '../../../../../helpers/shiftCustomer/getShiftCustomerByUserId.api.js';

const ShiftFindCustomer = ({ userId, setDataUser }) => {

    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftCustomerByUserIdApi(userId);
            if (response.status === 'success') {
                const result = response.result.map((cust) => { return { ...cust, label: cust.name } })
                setCustomers(result);
            } else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleChange = (e, newValue) => {
        if (newValue) {
            const matchedCustomer = customers.find((cust) => cust._id === newValue._id);
            if (matchedCustomer) {
                setDataUser({ name: matchedCustomer.name, phone: matchedCustomer.phone, email: matchedCustomer.email });
                setCustomer(matchedCustomer);
            };
        } else {
            setDataUser(null);
            setCustomer(null);
        };
    };


    if (loading) return (
        <div className='shiftFindCustomer'>
            <div className='shiftFindCustomerSpinner'>
                <Spinner color="#ec3639" size={50} />
            </div>
        </div>
    );

    return (
        <div className='shiftFindCustomer'>

            {customers &&
                <AutoComplete data={customers} handleChange={handleChange} />
            }

            {customer ?
                <div className='shiftFindCustomerData'>
                    <p><span>Nombre: </span>{customer.name}</p>
                    {customer.phone && <p><span>Teléfono: </span>{customer.phone}</p>}
                    {customer.email && <p><span>Email: </span>{customer.email}</p>}
                </div>
                : <p className='pgray shiftFindCustomerDataP'>Buscar en la lista de clientes</p>
            }

        </div>
    );
};

export default ShiftFindCustomer;