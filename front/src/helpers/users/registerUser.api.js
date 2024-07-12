const url = import.meta.env.VITE_API_URL;

const userRegisterApi = async (user) => {

    const response = await fetch(`${url}/api/user/register`, {
        method: 'POST',
        body: user,
        headers: {
            'Accept': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { userRegisterApi };