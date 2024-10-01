const orderByLocation = (document, user) => {

    const data = [...document.docs];

    const matched = data.filter(doc => {
        const province = doc.location?.province?.toLowerCase() || '';
        const city = doc.location?.city?.toLowerCase() || '';
        return province === user.provinceSort.toLowerCase() || city === user.citySort.toLowerCase();
    });

    const unmatched = data.filter(doc => {
        const province = doc.location?.province?.toLowerCase() || '';
        const city = doc.location?.city?.toLowerCase() || '';
        return !(province === user.provinceSort.toLowerCase() || city === user.citySort.toLowerCase());
    });
    document.docs = [...matched, ...unmatched];
    return document; 
};

export default orderByLocation;
