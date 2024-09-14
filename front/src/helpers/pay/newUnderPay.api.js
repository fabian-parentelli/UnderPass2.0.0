const url = import.meta.env.VITE_API_URL;

async function newUnderPayApi(pay) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/pay`, {
        method: 'POST',
        body: JSON.stringify(pay),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { newUnderPayApi };