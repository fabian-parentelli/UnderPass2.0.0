import FormVewProductHtml from './FormVewProductHtml';

const FormVewProduct = ({ products, setProducts, setLoading }) => {

    const handleChange = (e, prodId, field) => {
        setProducts(products.map(prod => prod._id === prodId ? { ...prod, [field]: e.target.value } : prod));
    };

    const handleUpdate = (e, id) => {
        console.log({ [e.target.name]: e.target.value });
        console.log(id);
    };

    return (
        <>
            {products &&
                <FormVewProductHtml
                    products={products}
                    handleChange={handleChange}
                    handleUpdate={handleUpdate}
                />
            }
        </>
    );
};

export default FormVewProduct;