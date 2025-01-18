const url = import.meta.env.VITE_API_URL;

const updShiftConfHolApi = async (holidays) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/shiftconf/holidays`, {
        method: 'PUT',
        body: JSON.stringify(holidays),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { updShiftConfHolApi };