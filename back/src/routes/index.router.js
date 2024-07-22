import UserRouter from "./users.router.js";
import ImagenRouter from './images.router.js';
import PriceRouter from './price.router.js';
import PdfRouter from './pdf.router.js';
import GraphRouter from './graph.router.js';
import AplliRouter from './application.router.js';
import AlertsRouter from './alerts.router.js';

export const userRouter = new UserRouter().getRouter();
export const imagenRouter = new ImagenRouter().getRouter();
export const priceRouter = new PriceRouter().getRouter();
export const pdfRouter = new PdfRouter().getRouter();
export const graphRouter = new GraphRouter().getRouter();
export const aplliRouter = new AplliRouter().getRouter();
export const alertsRouter = new AlertsRouter().getRouter();