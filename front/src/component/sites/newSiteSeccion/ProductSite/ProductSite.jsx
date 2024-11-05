import './productSite.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import CheckBoxes2 from '../../../utils/CheckBoxes2';
import { getProductByUserIdApi } from '../../../../helpers/products/getProductByUserId.api.js';

const ProductSite = ({ values, setValues }) => {

    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);

    const handleProduct = (e) => setValues({ ...values, isProduct: e.target.checked });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductByUserIdApi(values.userId);
            if (response.status === 'success') setProducts(response.result);
            else console.error(response.error);
        }; if (values.userId && values.isProduct) fetchData();
    }, [values.isProduct]);

    useEffect(() => { setValues({ ...values, products: [...selected] }) }, [selected]);

    return (
        <div className='productSite'>
            
            <label>Productos:</label>

            <section className='productSiteBody'>

                <div className='productSiteDiv'>
                    <div className='productSiteSwitch'>
                        <p>NO</p>
                        <Switch value={values.isProduct} onChange={handleProduct} />
                        <p>SI</p>
                    </div>
                    <p className='productSitePhelp'>Habilita la venta de productos</p>
                </div>

                {values.isProduct && products.length > 0 &&
                    <section>
                        <p className='productSitePhelp'>Productos disponibles</p>
                        <CheckBoxes2 labels={products} setType={setSelected} multiselect={true} />
                    </section>
                }

            </section>
        </div>
    );
};

export default ProductSite;