const url = import.meta.env.VITE_API_URL;

const getAllPublicityApi = async (obj) => {
    
    let urlData = `${url}/api/publicity?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.inPortal) urlData += `inPortal=${obj.inPortal}&`;
    if (obj.active) urlData += `active=${obj.active}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.category) urlData += `category=${obj.category}&`;
    if (obj.type) urlData += `type=${obj.type}&`;

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

export { getAllPublicityApi };