const url = import.meta.env.VITE_API_URL;

async function updEventConfirmApi(id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/confirm/${id}`, {
        method: 'PUT',
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

export { updEventConfirmApi };