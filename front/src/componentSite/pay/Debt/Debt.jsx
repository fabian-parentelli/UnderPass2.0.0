import './debt.scss';
import { useEffect, useState } from "react";
import { getOrderByIdApi } from "../../../helpers/orders/getOrderById.api.js";

const Debt = ({ orderId, setOrder, setLoading }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderByIdApi(orderId)
            if (response.status === 'success') {
                setOrder(response.result);
                setData(response.result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);
    
    return (
        <div className='debt'>
            {data &&
                <>
                    <p>Monto a pagar: <span> ${data.total}</span></p>
                    <p className='debtOrder'>N° Orden: {data._id}</p>
                </>
            }
        </div>
    );
};

export default Debt;