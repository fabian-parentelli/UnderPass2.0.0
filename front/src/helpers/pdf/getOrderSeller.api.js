const url = import.meta.env.VITE_API_URL;

async function getOrderSellerApi(obj) {

    let urlData = `${url}/api/order_seller?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.userid) urlData += `userid=${obj.userid}&`;
    if (obj.active) urlData += `active=${obj.active}&`;

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