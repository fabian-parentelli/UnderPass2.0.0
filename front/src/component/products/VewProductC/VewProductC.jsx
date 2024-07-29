import { getProductByUserIdApi } from '../../../helpers/products/getProductByUserId.api';
import { useEffect, useState } from 'react';
import FormVewProduct from '../FormVewProduct/FormVewProduct';

const VewProductC = ({ userId, setLoading }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await getProductByUserIdApi(userId);
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
            setLoading(false);
        }; if (userId) fetchData();
    }, [userId]);

    return (
        <>
            {products &&
                <FormVewProduct
                    products={products}
                    setProducts={setProducts}
                    setLoading={setLoading}
                />
            }
        </>
    );
};

export default VewProductC;