const url = import.meta.env.VITE_API_URL;

const newShiftconfApi = async (shift) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/shiftconf`, {
        method: 'POST',
        body: shift,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newShiftconfApi };