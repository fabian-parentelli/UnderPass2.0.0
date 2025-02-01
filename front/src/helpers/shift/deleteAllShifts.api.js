const url = import.meta.env.VITE_API_URL;

const deleteAllShiftsApi = async (shift) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/shift/delallshift`, {
        method: 'PUT',
        body: JSON.stringify(shift),
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

export { deleteAllShiftsApi };