const url = import.meta.env.VITE_API_URL;

const getAllProductsApi = async (obj) => {

    let urlData = `${url}/api/product?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.inSite) urlData += `inSite=${obj.inSite}&`;
    if (obj.active) urlData += `active=${obj.active}&`;
    if (obj.country) urlData += `country=${obj.country}&`;

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getAllProductsApi };