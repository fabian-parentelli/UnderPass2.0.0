const url = import.meta.env.VITE_API_URL;

const confirmTransferApi = async (id, password) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/transfer/confirm/${id}`, {
        method: 'PUT',
        body: JSON.stringify(password),
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

export { confirmTransferApi };