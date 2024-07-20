const url = import.meta.env.VITE_API_URL;

const getAllApplicationApi = async (obj) => {

    let urlData = `${url}/api/appli/all?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.category) urlData += `category=${obj.category}&`;
    if (obj.active) urlData += `active=${obj.active}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    if (obj.pay) urlData += `pay=${obj.pay}&`;

    const token = localStorage.getItem('token');
    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getAllApplicationApi };