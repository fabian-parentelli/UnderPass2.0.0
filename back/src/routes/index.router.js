import UserRouter from "./users.router.js";
import ImagenRouter from './images.router.js';
import PriceRouter from './price.router.js';
import PdfRouter from './pdf.router.js';
import GraphRouter from './graph.router.js';
import AplliRouter from './application.router.js';
import AlertsRouter from './alerts.router.js';
import ProductRouter from './products.router.js';
import PublicitynRouter from './publicity.router.js';
import OrderRouter from "./orders.router.js";
import OrderSellerRouter from "./orderSeller.router.js";
import WalletRouter from "./wallet.router.js";
import TicketRouter from "./ticket.router.js";
import TransferRouter from "./transfer.router.js";
import CashRouter from "./cash.router.js";
import AuditRouter from "./audit.router.js";
import OrderPayRouter from "./orderPay.router.js";
import TransferPayRouter from "./transferPay.router.js";
import PayRouter from "./pay.router.js";
import BookingRouter from "./booking.router.js";
import NewsRouter from "./news.router.js";
import MessageRouter from "./messages.router.js";
import EventRouter from "./event.router.js";
import NotesRouter from "./notes.router.js";
import SitesRouter from "./sites.router.js";
import ShiftconfRouter from "./shiftconf.router.js";
import ShiftRouter from "./shift.router.js";
import ShiftCustomerRouter from "./shiftCustomer.router.js";
import CodeRouter from "./code.router.js";

export const userRouter = new UserRouter().getRouter();
export const imagenRouter = new ImagenRouter().getRouter();
export const priceRouter = new PriceRouter().getRouter();
export const pdfRouter = new PdfRouter().getRouter();
export const graphRouter = new GraphRouter().getRouter();
export const aplliRouter = new AplliRouter().getRouter();
export const alertsRouter = new AlertsRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();
export const publicityRouter = new PublicitynRouter().getRouter();
export const orderRouter = new OrderRouter().getRouter();
export const orderSellerRouter = new OrderSellerRouter().getRouter();
export const walletRouter = new WalletRouter().getRouter();
export const ticketRouter = new TicketRouter().getRouter();
export const transferRouter = new TransferRouter().getRouter();
export const cashRouter = new CashRouter().getRouter();
export const auditRouter = new AuditRouter().getRouter();
export const orderPayRouter = new OrderPayRouter().getRouter();
export const transferPayRouter = new TransferPayRouter().getRouter();
export const payRouter = new PayRouter().getRouter();
export const bookingRouter = new BookingRouter().getRouter();
export const newsRouter = new NewsRouter().getRouter();
export const messageRouter = new MessageRouter().getRouter();
export const eventRouter = new EventRouter().getRouter();
export const notesRouter = new NotesRouter().getRouter();
export const sitesRouter = new SitesRouter().getRouter();
export const shiftconfRouter = new ShiftconfRouter().getRouter();
export const shiftRouter = new ShiftRouter().getRouter();
export const shiftCustomerRouter = new ShiftCustomerRouter().getRouter();
export const codeRouter = new CodeRouter().getRouter();