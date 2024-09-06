const url = import.meta.env.VITE_API_URL;

const updIsWalletApi = async (isWallet, id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/wallet/iswallet/${id}`, {
        method: 'PUT',
        body: JSON.stringify(isWallet),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { updIsWalletApi };