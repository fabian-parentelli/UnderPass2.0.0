const url = import.meta.env.VITE_API_URL;

const newPresetApi = async (preset) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/preset`, {
        method: 'POST',
        body: preset,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newPresetApi };