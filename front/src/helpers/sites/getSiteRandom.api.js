const url = import.meta.env.VITE_API_URL;

const getSiteRandomApi = async () => {

    const country = localStorage.getItem('country');
    const response = await fetch(`${url}/api/sites/random/${country}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getSiteRandomApi };