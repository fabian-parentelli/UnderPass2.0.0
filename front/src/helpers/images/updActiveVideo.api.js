const url = import.meta.env.VITE_API_URL;

async function updActiveVideoApi(values) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/videoactive`, {
        method: 'PUT',
        body: JSON.stringify(values),
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

export { updActiveVideoApi };