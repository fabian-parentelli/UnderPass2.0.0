const url = import.meta.env.VITE_API_URL;

const getTransferApi = async (obj) => {

    let urlData = `${url}/api/transfer?`;
    if (obj.confirm) urlData += `confirm=${obj.confirm}&`;
    if (obj.user) urlData += `user=${obj.user}&`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    if (obj.id) urlData += `id=${obj.id}&`;

    const token = localStorage.getItem('token');
    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();    
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getTransferApi };