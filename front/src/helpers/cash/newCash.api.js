const url = import.meta.env.VITE_API_URL;

async function newCashApi() {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/cash`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { newCashApi };