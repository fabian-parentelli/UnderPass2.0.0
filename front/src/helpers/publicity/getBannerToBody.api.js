const url = import.meta.env.VITE_API_URL;

const getBannerToBodyApi = async () => {

    const country = localStorage.getItem('country');
    const response = await fetch(`${url}/api/publicity/banner/${country}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getBannerToBodyApi };