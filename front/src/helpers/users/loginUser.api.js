const url = import.meta.env.VITE_API_URL;

async function loginUserApi(values) {

    const response = await fetch(`${url}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { loginUserApi };