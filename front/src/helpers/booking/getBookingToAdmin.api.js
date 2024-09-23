const url = import.meta.env.VITE_API_URL;

async function getBookingToAdminApi(obj) {

    let urlData = `${url}/api/booking/admin?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;

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
    if(content.error) return content;
    if(content.data) return content.data;
};

export { getBookingToAdminApi };