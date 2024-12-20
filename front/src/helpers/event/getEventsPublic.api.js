const url = import.meta.env.VITE_API_URL;

const getEventsPublicApi = async (obj) => {

    let urlData = `${url}/api/event/public?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.province) urlData += `province=${obj.province}&`;
    if (obj.publicity) urlData += `publicity=${obj.publicity}&`; 
    if (obj.category) urlData += `category=${obj.category}&`; 
    if (obj.startDate) urlData += `startdate=${obj.startDate}&`; 
    if (obj.title) urlData += `title=${obj.title}&`; 
    
    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

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

export { getEventsPublicApi };