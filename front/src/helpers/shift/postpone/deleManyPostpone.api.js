const url = import.meta.env.VITE_API_URL;

const delAllPostponesApi = async (postpones) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/postpone/deleteall`, {
        method: 'PUT',
        body: JSON.stringify(postpones),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { delAllPostponesApi };