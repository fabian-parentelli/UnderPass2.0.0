const url = import.meta.env.VITE_API_URL;

async function updVewUserApi() {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/publicity/uservew`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if(content.error) return content.error;
};

export { updVewUserApi };