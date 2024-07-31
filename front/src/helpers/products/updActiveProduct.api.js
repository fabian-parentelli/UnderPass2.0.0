const url = import.meta.env.VITE_API_URL;

const updActiveProductApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/product/active/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { updActiveProductApi };