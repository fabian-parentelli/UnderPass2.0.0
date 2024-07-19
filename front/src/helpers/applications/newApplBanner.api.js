const url = import.meta.env.VITE_API_URL;

const newApplBannerApi = async (banner) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/appli/banner`, {
        method: 'POST',
        body: banner,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newApplBannerApi };