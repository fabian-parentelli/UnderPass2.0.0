import UserRepository from './user.repositories.js';
import ImagenRepository from './imagen.repositories.js';
import PriceRepository from './price.repositories.js';

export const userRepository = new UserRepository();
export const imagenRepository = new ImagenRepository();
export const priceRepository = new PriceRepository();