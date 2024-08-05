const url = import.meta.env.VITE_API_URL;

async function updPublicityApi(banner, id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/publicity/${id}`, {
        method: 'PUT',
        body: JSON.stringify(banner),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if(content.error) return content.error;
};

export { updPublicityApi };