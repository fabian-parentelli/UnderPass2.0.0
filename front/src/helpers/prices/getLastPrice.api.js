const url = import.meta.env.VITE_API_URL;

async function getLastPriceApi(obj) {

    let urlData = `${url}/api/price/last?`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.name) urlData += `name=${obj.name}&`;

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { getLastPriceApi };