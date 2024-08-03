const url = import.meta.env.VITE_API_URL;

const getByTipsSearchApi = async (name, favorite) => {

    const response = await fetch(`${url}/api/product/tips_search/${name}/favorite/${favorite}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getByTipsSearchApi };