const url = import.meta.env.VITE_API_URL;

const newTransferPayApi = async (transfer) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/transferpay`, {
        method: 'POST',
        body: transfer,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newTransferPayApi };