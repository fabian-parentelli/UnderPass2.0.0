const url = import.meta.env.VITE_API_URL;

const newProductsApi = async (product) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/product`, {
        method: 'POST',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newProductsApi };