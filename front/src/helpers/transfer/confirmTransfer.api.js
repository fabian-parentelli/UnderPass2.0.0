const url = import.meta.env.VITE_API_URL;

const confirmTransferApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/transfer/confirm/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { confirmTransferApi };