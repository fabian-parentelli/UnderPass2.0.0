const url = import.meta.env.VITE_API_URL;

const exchangeApi = async () => {

    const response = await fetch(`${url}/api/price/exchange`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { exchangeApi };