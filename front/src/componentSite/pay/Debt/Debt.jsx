import './debt.scss';
import { useEffect, useState } from "react";
import { getOrderByIdApi } from "../../../helpers/orders/getOrderById.api.js";
import LoadSmall from '../../../component/utils/LoadSmall/LoadSmall.jsx';

const Debt = ({ orderId, setOrder}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrderByIdApi(orderId)
            if (response.status === 'success') {
                setOrder(response.result);
                setData(response.result);
            } else console.error(response.error);
        }; fetchData();
    }, []);
    
    return (
        <div className='debt'>
            {data ?
                <>
                    <p>Monto a pagar: <span> ${data.total}</span></p>
                    <p className='debtOrder'>N° Orden: {data._id}</p>
                </>
                : <div className='debLoadDiv'><LoadSmall /></div>
            }
        </div>
    );
};

export default Debt;