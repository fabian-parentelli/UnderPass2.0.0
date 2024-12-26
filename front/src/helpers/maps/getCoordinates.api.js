const url = 'https://nominatim.openstreetmap.org/search?q=';

const getCoordinatesApi = async (coordinate) => {

    const parts = [
        coordinate.address?.replace(/ /g, '+'),
        coordinate.door?.replace(/ /g, '+'),
        coordinate.city?.replace(/ /g, '+'),
        coordinate.province?.replace(/ /g, '+')
    ].filter(Boolean);

    const country = coordinate.country === 'UY' ? 'uruguay' : 'argentina';
    const query = `${parts.join('+')}+${country}`;

    const response = await fetch(`${url}${query}&format=json`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return content.error ? content : content;
};

export { getCoordinatesApi };