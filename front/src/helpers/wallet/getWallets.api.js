const url = import.meta.env.VITE_API_URL;

async function getWalletsApi(obj) {

    let urlData = `${url}/api/wallet?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.country) urlData += `country=${obj.country}&`;
    if (obj.inWallet) urlData += `inWallet=${obj.inWallet}&`;
    if (obj.reqMoney) urlData += `reqMoney=${obj.reqMoney}&`;

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

export { getWalletsApi };