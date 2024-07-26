const url = import.meta.env.VITE_API_URL;

const newAvatarApi = async (avatar) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/img/avatar`, {
        method: 'POST',
        body: avatar,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newAvatarApi };