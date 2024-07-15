import * as pdfService from '../services/pdf.service.js';
import { PdfNotFound } from '../utils/custom-exceptions.utils.js';

const priceList = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await pdfService.priceList(country);
        if (result) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${country}_lista_de_precios.pdf"`);
            result.pipe(res);
        };
    } catch (error) {
        if (error instanceof PdfNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { priceList };