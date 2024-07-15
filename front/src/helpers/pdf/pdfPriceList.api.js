const url = import.meta.env.VITE_API_URL;

async function pdfPriceList(country) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/pdf/pricelist/${country}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `lista_de_precios_${country}.pdf`;
    link.click();
    URL.revokeObjectURL(blobUrl);
};

export { pdfPriceList };