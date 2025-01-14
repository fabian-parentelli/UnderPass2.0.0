const url = import.meta.env.VITE_API_URL;

const getCodeApi = async (obj) => {

    let urlData = `${url}/api/code?`;
    
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;  
    if (obj.type) urlData += `type=${obj.type}&`;  
    if (obj.name) urlData += `name=${obj.name}&`; 

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

export { getCodeApi };