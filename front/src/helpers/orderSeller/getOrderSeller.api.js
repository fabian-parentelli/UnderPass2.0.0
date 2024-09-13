const url = import.meta.env.VITE_API_URL;

async function getOrderSellerApi(obj) {

    let urlData = `${url}/api/order_seller?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.userid) urlData += `userid=${obj.userid}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.payIn !== undefined) urlData += `payIn=${obj.payIn}&`; 
    if (obj.payOut !== undefined) urlData += `payOut=${obj.payOut}&`;
    if (obj.id) urlData += `id=${obj.id}&`;

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

export { getOrderSellerApi };