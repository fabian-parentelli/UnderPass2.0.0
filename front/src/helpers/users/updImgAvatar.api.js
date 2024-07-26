const url = import.meta.env.VITE_API_URL;

const updImgAvatarApi = async (id, img) => {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/user/imgavatar/${id}`, {
        method: 'PUT',
        body: img,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { updImgAvatarApi };