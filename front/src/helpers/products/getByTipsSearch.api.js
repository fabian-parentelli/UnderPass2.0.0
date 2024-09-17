const url = import.meta.env.VITE_API_URL;

const getByTipsSearchApi = async (obj) => {

    let urlData = `${url}/api/product/tips_search?`;
    if (obj.name) urlData += `name=${obj.name}&`;
    if (obj.favorite) urlData += `favorite=${obj.favorite}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.pid) urlData += `pid=${obj.pid}&`;

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);
    
    const response = await fetch(urlData, {
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

export { getByTipsSearchApi };