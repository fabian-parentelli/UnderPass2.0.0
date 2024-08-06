const url = import.meta.env.VITE_API_URL;

const getProductsRandomApi = async () => {

    const country = localStorage.getItem('country');
    const response = await fetch(`${url}/api/product/random?country=${country}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getProductsRandomApi };