const averageUy = async () => {
    const response = await fetch('https://uy.dolarapi.com/v1/cotizaciones/usd', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return ((content.compra + content.venta) / 2).toFixed(2);
};

const averageAr = async () => {
    const response = await fetch('https://dolarapi.com/v1/dolares/blue', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return ((content.compra + content.venta) / 2).toFixed(2);
};

export { averageUy, averageAr };