const url = import.meta.env.VITE_API_URL;

const getMessageByTypeApi = async (obj) => {

    let urlData = `${url}/api/message?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    urlData += `active=${obj.active}&`;
    urlData += `report=${obj.report}&`;

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
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getMessageByTypeApi };