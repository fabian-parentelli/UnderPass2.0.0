const url = import.meta.env.VITE_API_URL;

const updImgActiveProductApi = async (data) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/product/imgactive`, {
        method: 'PUT',
        body: JSON.stringify(data),
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

export { updImgActiveProductApi };