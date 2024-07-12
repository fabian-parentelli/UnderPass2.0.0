import UserRouter from "./users.router.js";
import ImagenRouter from './images.router.js';

export const userRouter = new UserRouter().getRouter();
export const imagenRouter = new ImagenRouter().getRouter();
