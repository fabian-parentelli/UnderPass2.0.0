const url = import.meta.env.VITE_API_URL;

const getCodeApi = async (name) => {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/code/${name}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getCodeApi };