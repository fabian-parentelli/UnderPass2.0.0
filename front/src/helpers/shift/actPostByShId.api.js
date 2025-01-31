const url = import.meta.env.VITE_API_URL;

const actPostByShIdApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/shift/actpostbyshid/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { actPostByShIdApi };