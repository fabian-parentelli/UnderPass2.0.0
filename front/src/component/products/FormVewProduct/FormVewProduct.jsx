import FormVewProductHtml from './FormVewProductHtml';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { updProductDataApi } from '../../../helpers/products/updProductData.api.js';
import { getProductByUserIdApi } from '../../../helpers/products/getProductByUserId.api.js';
import { useState } from 'react';

const FormVewProduct = ({ products, setProducts, setLoading }) => {

    const { user } = useLoginContext();

    const handleChange = (e, prodId, field) => {
        setProducts(products.map(prod => prod._id === prodId ? { ...prod, [field]: e.target.value } : prod));
    };

    const handleDescription = (e, prodId, field) => {
        const { value } = e.target;
        setProducts(products.map(prod => {
            if (prod._id === prodId) return { ...prod, description: { ...prod.description, [field]: value } };
            return prod;
        }));
    };

    const handleLocation = (e, prodId, field) => {
        const { value } = e.target;
        setProducts(products.map(prod => {
            if (prod._id === prodId) return { ...prod, location: { ...prod.location, [field]: value } };
            return prod;
        }));
    };


    const handleSwitchChange = async (e, prodId) => {
        const checked = e.target.checked;
        setProducts(products.map(prod =>
            prod._id === prodId ? { ...prod, inSite: checked } : prod
        ));
        // Conectar con la base para cambiar el switch
    };

    const handleUpdate = async (id) => {
        const product = products.find(prod => prod._id === id);
        const response = await updProductDataApi(product);
        console.log(response);
    };

    return (
        <>
            {products &&
                <FormVewProductHtml
                    products={products}
                    handleChange={handleChange}
                    handleDescription={handleDescription}
                    handleLocation={handleLocation}
                    handleSwitchChange={handleSwitchChange}
                    handleUpdate={handleUpdate}
                />
            }
        </>
    );
};

export default FormVewProduct;