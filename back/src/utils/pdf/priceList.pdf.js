import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

const priceListPdf = (info) => {

    const doc = new PDFDocument();

    doc.fontSize(18).text('Lista de precios', { align: 'center' });
    doc.moveDown();

    // Detalles del banner
    doc.fontSize(12).text(`País: ${info.banner.country === 'AR' ? 'Argentina' : 'Uruguay'}`);
    doc.text(`Lista: $${info.banner.name}`);
    doc.text(`Precio: $${info.banner.price}`);
    doc.text(`Activo: ${info.banner.active ? 'Sí' : 'No'}`);
    doc.text(`Fecha: ${new Date(info.banner.date).toLocaleDateString()}`);
    doc.fontSize(14).text('Descuentos:', { underline: true });
    info.banner.sales.forEach((sale) => {
        const { days, sale: discount } = sale; // Desestructurando el objeto sale
        doc.fontSize(12).text(`Descuento más de ${days} días es de %${discount}`);
    });

    const stream = new PassThrough();
    doc.pipe(stream);
    doc.end();

    return stream;
};

export default priceListPdf;