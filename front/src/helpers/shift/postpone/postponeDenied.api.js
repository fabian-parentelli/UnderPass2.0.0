const url = import.meta.env.VITE_API_URL;

async function postponeDeniedApi(id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/postpone/denied/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { postponeDeniedApi };