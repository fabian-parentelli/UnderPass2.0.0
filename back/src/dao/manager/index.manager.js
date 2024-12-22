import User from './users.manager.js';
import Tutorials from './tutorials.manager.js';
import Application from './application.manager.js';
import FinancialUser from './financialUser.manager.js';
import Avatar from './avatar.manager.js';
import Product from './product.manager.js';
import Publicity from './publicity.manager.js';
import Price from './price.manager.js';
import Alerts from './alerts.manager.js';
import Order from './order.manager.js';
import OrderSeller from './orderSeller.manager.js';
import Wallet from './wallet.manager.js';
import Ticket from './ticket.manager.js';
import Data from './data.manager.js';
import Transfer from './transfer.manager.js';
import Cash from './cash.manager.js';
import Audit from './audit.manager.js';
import OrderPay from './orderPay.manager.js';
import TransferPay from './transferPay.manager.js';
import Booking from './booking.manager.js';
import News from './news.manager.js';
import Event from './event.manager.js';
import Preset from './preset.manager.js';
import Notes from './notes.manager.js';
import Sites from './sites.manager.js';
import Shiftconf from './shiftconf.manager.js';
import Shift from './shift.manager.js';
import ShiftCustomer from './shiftCustomer.manager.js';

export const userManager = new User();
export const tutorialsManager = new Tutorials();
export const appliManager = new Application();
export const financialUserManager = new FinancialUser();
export const avatarManager = new Avatar();
export const productManager = new Product();
export const publicityManager = new Publicity();
export const priceManager = new Price();
export const alertsManager = new Alerts();
export const orderManager = new Order();
export const orderSellerManager = new OrderSeller();
export const walletManager = new Wallet();
export const ticketManager = new Ticket();
export const dataManager = new Data();
export const transferManager = new Transfer();
export const cashManager = new Cash();
export const auditManager = new Audit();
export const orderPayManager = new OrderPay();
export const transferPayManager = new TransferPay();
export const bookingManager = new Booking();
export const newsManager = new News();
export const eventManager = new Event();
export const presetManager = new Preset();
export const notesManager = new Notes();
export const sitesManager = new Sites();
export const shiftconfManager = new Shiftconf();
export const shiftManager = new Shift();
export const shiftCustomerManager = new ShiftCustomer();