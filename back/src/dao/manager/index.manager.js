import User from './users.manager.js';
import Tutorials from './tutorials.manager.js';
import Banners from './banners.manager.js';
import PriceBanner from './pricebanner.manager.js';
import Application from './application.manager.js';
import FinancialUser from './financialUser.manager.js';

export const userManager = new User();
export const tutorialsManager = new Tutorials();
export const bannersManager = new Banners();
export const priceBannerManager = new PriceBanner();
export const appliManager = new Application();
export const financialUserManager = new FinancialUser();