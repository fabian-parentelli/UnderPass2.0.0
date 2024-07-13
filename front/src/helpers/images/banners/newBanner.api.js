const url = import.meta.env.VITE_API_URL;

const newBannerApi = async (user) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/banner`, {
        method: 'POST',
        body: user,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newBannerApi };