const url = import.meta.env.VITE_API_URL;

async function getBookingByUidIdTypeApi(obj) {

    const response = await fetch(`${url}/api/booking/${obj.uid}/${obj.id}/${obj.type}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { getBookingByUidIdTypeApi };