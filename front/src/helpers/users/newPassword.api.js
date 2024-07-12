const url = import.meta.env.VITE_API_URL;

export const newPasswordApi = async (token, password) => {

    const response = await fetch(`${url}/api/user/new_password`, {
        method: 'PUT',
        body: JSON.stringify(password),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};