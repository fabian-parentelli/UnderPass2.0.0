const url = import.meta.env.VITE_API_URL;

const getPostponesByAdminIdApi = async (id, active) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/postpone/byadminid/${id}/active/${active}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getPostponesByAdminIdApi };