const url = import.meta.env.VITE_API_URL;

const getShiftCustomerByUserIdApi = async (userId) => {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/shiftcustomer/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getShiftCustomerByUserIdApi };