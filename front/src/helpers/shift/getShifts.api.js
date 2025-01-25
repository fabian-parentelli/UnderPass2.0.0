const url = import.meta.env.VITE_API_URL;

async function getShiftsApi(obj) {
    
    let urlData = `${url}/api/shift?`;
    
    if (obj.uid) urlData += `uid=${obj.uid}&`; 
    if (obj.month) urlData += `month=${obj.month}&`; 
    if (obj.year) urlData += `year=${obj.year}&`; 
    if (obj.customer) urlData += `customer=${obj.customer}&`; 
    if (obj.userCustomer) urlData += `usercustomer=${obj.userCustomer}&`; 
    if (obj.id) urlData += `id=${obj.id}&`; 
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

export { getShiftsApi };