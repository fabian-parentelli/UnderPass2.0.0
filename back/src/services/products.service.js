import { productRepository, userRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const newProduct = async (images, imagesUrl, product) => {
    product.description = JSON.parse(product.description);
    product.img = [];
    imagesUrl.forEach((image, index) => {
        const obj = {
            imgUrl: image,
            imgName: images[index].originalname,
            active: true
        };
        product.img.push(obj);
    });
    const user = await userRepository.getUserById(product.userId);
    product.location = user.location || {};
    const result = await productRepository.newProduct(product);
    if (!result) throw new ProductNotFound('No se puede agregar un nuevo producto');
    return { status: 'success', result };
};

const getByUserId = async (id) => {
    const result = await productRepository.getByUserId(id);
    if (!result) throw new ProductNotFound('No se encuentra el usuario');
    return { status: 'success', result };
};

export { newProduct, getByUserId };