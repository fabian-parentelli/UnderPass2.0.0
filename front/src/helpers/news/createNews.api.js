const url = import.meta.env.VITE_API_URL;

const createNewsApi = async (news) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/news`, {
        method: 'POST',
        body: news,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { createNewsApi };