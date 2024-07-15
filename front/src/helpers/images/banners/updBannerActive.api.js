const url = import.meta.env.VITE_API_URL;

const updBannerActiveApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/banneractive/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { updBannerActiveApi };