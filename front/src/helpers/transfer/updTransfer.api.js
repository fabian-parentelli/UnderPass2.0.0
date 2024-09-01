const url = import.meta.env.VITE_API_URL;

const updTransferApi = async (transfer, id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/transfer/${id}`, {
        method: 'PUT',
        body: transfer,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { updTransferApi };