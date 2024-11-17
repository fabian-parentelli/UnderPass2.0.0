const url = import.meta.env.VITE_API_URL;

const updSiteApi = async (sites) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/sites`, {
        method: 'PUT',
        body: sites,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { updSiteApi };