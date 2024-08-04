const url = import.meta.env.VITE_API_URL;

const newPublicityApi = async (publicity) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/publicity`, {
        method: 'POST',
        body: publicity,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newPublicityApi };