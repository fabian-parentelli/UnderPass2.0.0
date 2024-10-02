const url = import.meta.env.VITE_API_URL;

const getMessageByTypeIdApi = async (type, typeId) => {

    const response = await fetch(`${url}/api/message/type/${type}/typeid/${typeId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getMessageByTypeIdApi };