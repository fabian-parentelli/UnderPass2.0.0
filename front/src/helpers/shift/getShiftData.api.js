const url = import.meta.env.VITE_API_URL;

async function getShiftDataApi(obj) {
    
    let urlData = `${url}/api/shift/data?`;
    
    if (obj.uid) urlData += `uid=${obj.uid}&`; 
    if (obj.month) urlData += `month=${obj.month}&`; 
    if (obj.year) urlData += `year=${obj.year}&`; 
    if (obj.day) urlData += `day=${obj.day}&`; 

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { getShiftDataApi };