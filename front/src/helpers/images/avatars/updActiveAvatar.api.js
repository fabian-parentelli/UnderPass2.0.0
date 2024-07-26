const url = import.meta.env.VITE_API_URL;

async function updActiveAvatarApi(id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/avatar/${id}`, {
        method: 'PUT',
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

export { updActiveAvatarApi };