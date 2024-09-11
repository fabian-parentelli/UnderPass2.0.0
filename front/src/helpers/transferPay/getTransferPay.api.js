const url = import.meta.env.VITE_API_URL;

async function getTransferPayApi(obj) {

    let urlData = `${url}/api/transferpay?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.userid) urlData += `userid=${obj.userid}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.pay !== undefined) urlData += `pay=${obj.pay}&`;

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
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getTransferPayApi };