import { useEffect, useState } from 'react';
import FormVewProductHtml from './FormVewProductHtml';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import { updProductDataApi } from '../../../helpers/products/updProductData.api.js';
import { updImgActiveProductApi } from '../../../helpers/products/updImgActiveProduct.api.js';
import { uploadImgProductApi } from '../../../helpers/products/uploadImgProduct.api.js';
import { updActiveProductApi } from '../../../helpers/products/updActiveProduct.api.js';

const FormVewProduct = ({ products, setProducts, setLoading }) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [formData, setFormData] = useState(null);

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
        setLoading(true);
        const checked = e.target.checked;
        setProducts(products.map(prod => prod._id === prodId ? { ...prod, inSite: checked } : prod));
        const response = await updProductDataApi({ inSite: checked }, prodId);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: `Ahora ${checked ? 'Si' : 'No'} se va a ver el producto en tu sitio` });
            setTimeout(() => { setOpen(false) }, 2000);
        } else console.log(response);
        setLoading(false);
    };

    const handleUpdate = async (id) => {
        setLoading(true);
        const product = products.find(prod => prod._id === id);
        const response = await updProductDataApi(product, id);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Producto modificado' });
            setTimeout(() => { setOpen(false) }, 2000);
        } else console.log(response);
        setLoading(false);
    };

    const handleImgInactive = async (prodId, imgId) => {
        setLoading(true);
        const response = await updImgActiveProductApi({ prodId, imgId });
        if (response.status === 'success') {
            const index = products.findIndex(prod => prod._id === prodId);
            if (index !== -1) {
                const updatedProduct = { ...products[index] };
                updatedProduct.img = updatedProduct.img.map(img =>
                    img._id === imgId ? { ...img, actives: !img.actives } : img
                );
                const updatedProducts = [...products];
                updatedProducts[index] = updatedProduct;
                setProducts(updatedProducts);
            };
        } else console.log(response);
        setLoading(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (formData) {
                setLoading(true);
                const response = await uploadImgProductApi(formData);
                if (response.status === 'success') {
                    const index = products.findIndex(prod => prod._id === response.result._id);
                    if (index !== -1) {
                        const updatedProduct = { ...products[index] };
                        updatedProduct.img = response.result.img;
                        const updatedProducts = [...products];
                        updatedProducts[index] = updatedProduct;
                        setProducts(updatedProducts);
                    };
                } else console.log(response);
                setLoading(false);
            };
        }; fetchData();
    }, [formData]);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveProductApi(id);
        if (response.status === 'success') {
            const index = products.findIndex(prod => prod._id === response.result._id);
            if (index !== -1) {
                const updatedProduct = { ...products[index] };
                updatedProduct.active = response.result.active;
                const updatedProducts = [...products];
                updatedProducts[index] = updatedProduct;
                setProducts(updatedProducts);
            };
        } else console.log(response);
        setLoading(false);
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
                    handleImgInactive={handleImgInactive}
                    setFormData={setFormData}
                    handleActive={handleActive}
                />
            }
            <SnackbarAlert open={open} message={message} />
        </>
    );
};

export default FormVewProduct;