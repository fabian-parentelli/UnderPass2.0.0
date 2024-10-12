const url = 'https://nominatim.openstreetmap.org/search?q=';

const getCoordinatesApi = async (coordinate) => {

    const address = coordinate.address.replace(/ /g, '+');
    const door = coordinate.door.replace(/ /g, '+');
    const city = coordinate.city.replace(/ /g, '+');
    const province = coordinate.province.replace(/ /g, '+');
    const country = coordinate.country === 'Uy' ? 'uruguay' : 'argentina';
    
    const response = await fetch(`${url}${address}+${door}+${city}+${province}+${country}&format=json`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();    
    if (content.error) return content;
    if (content) return content;
};

export { getCoordinatesApi };