const url = import.meta.env.VITE_API_URL;

export const recoverPasswordApi = async (email) => {

    const response = await fetch(`${url}/api/user/recover_password`, {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};