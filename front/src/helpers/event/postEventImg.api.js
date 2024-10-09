const url = import.meta.env.VITE_API_URL;

const postEventImgApi = async (event) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/img`, {
        method: 'POST',
        body: event,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { postEventImgApi };