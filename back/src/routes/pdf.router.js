import Router from './routes.js';
import * as pdfController from '../controllers/pdf.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PdfRouter extends Router {
    init() {
        this.post('/pricelist/:country', ['ADMIN'], passportEnum.JWT, pdfController.priceList);
    };
};