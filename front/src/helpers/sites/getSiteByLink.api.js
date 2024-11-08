const url = import.meta.env.VITE_API_URL;

const getSiteByLinksApi = async (link) => {

    const response = await fetch(`${url}/api/sites/link/${link}`, {
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

export { getSiteByLinksApi };