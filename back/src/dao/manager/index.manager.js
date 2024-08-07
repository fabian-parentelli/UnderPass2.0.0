import User from './users.manager.js';
import Tutorials from './tutorials.manager.js';
import Banners from './banners.manager.js';
import Application from './application.manager.js';
import FinancialUser from './financialUser.manager.js';
import Avatar from './avatar.manager.js';
import Product from './product.manager.js';
import Publicity from './publicity.manager.js';
import Price from './price.manager.js';

export const userManager = new User();
export const tutorialsManager = new Tutorials();
export const bannersManager = new Banners();
export const appliManager = new Application();
export const financialUserManager = new FinancialUser();
export const avatarManager = new Avatar();
export const productManager = new Product();
export const publicityManager = new Publicity();
export const priceManager = new Price();