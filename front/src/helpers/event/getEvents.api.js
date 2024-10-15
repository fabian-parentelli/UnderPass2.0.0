const url = import.meta.env.VITE_API_URL;

const getEventsApi = async (obj) => {

    let urlData = `${url}/api/event?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.city) urlData += `city=${obj.city}&`; 
    if (obj.province) urlData += `province=${obj.province}&`;
    if (obj.publicity) urlData += `publicity=${obj.publicity}&`;
    if (obj.provinceSort) urlData += `provinceSort=${obj.provinceSort}&`;
    if (obj.citySort) urlData += `citySort=${obj.citySort}&`; 

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

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

export { getEventsApi };