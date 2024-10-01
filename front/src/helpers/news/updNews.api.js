const url = import.meta.env.VITE_API_URL;

const updNewsApi = async (product) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/news`, {
        method: 'PUT',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { updNewsApi };