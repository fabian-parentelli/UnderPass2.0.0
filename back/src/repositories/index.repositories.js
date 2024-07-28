import UserRepository from './user.repositories.js';
import ImagenRepository from './imagen.repositories.js';
import PriceRepository from './price.repositories.js';
import AppliRepository from './application.repositories.js';
import ProductRepository from './Product.repositories.js';

export const userRepository = new UserRepository();
export const imagenRepository = new ImagenRepository();
export const priceRepository = new PriceRepository();
export const appliRepository = new AppliRepository();
export const productRepository = new ProductRepository();