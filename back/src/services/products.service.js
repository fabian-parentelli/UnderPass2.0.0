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

const getAll = async (limit, page, active, country, inSite) => {
    const query = {};
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (active !== undefined) query.active = active;
    if (inSite !== undefined) query.inSite = inSite;
    const result = await productRepository.getAll(query, limit, page);
    if (!result) throw new ProductNotFound('No se encuentran los usuarios');
    return { status: 'success', result };
};

const updImgActive = async (data) => {
    const product = await productRepository.getProdById(data.prodId);
    if (!product) throw new ProductNotFound('No se encuentra el producto');
    product.img.forEach((prod) => {
        if (prod._id == data.imgId) prod.actives = !prod.actives;
    });
    const result = await productRepository.update(product);
    if (!result) throw new ProductNotFound('No se puede actualizar el producto');
    return { status: 'success', result };
};

const updData = async (id, data) => {
    const product = await productRepository.getProdById(id);
    if (!product) throw new ProductNotFound('No se encuentra el producto');
    const newProduct = { ...product, ...data };
    const result = await productRepository.update(newProduct);
    if (!result) throw new ProductNotFound('No se puede actualizar el producto');
    return { status: 'success', result };
};

const updActive = async (id) => {
    const product = await productRepository.getProdById(id);
    if (!product) throw new ProductNotFound('No se encuentra el producto');
    product.active = !product.active;
    const result = await productRepository.update(product);
    if (!result) throw new ProductNotFound('No se puede actualizar el producto');
    return { status: 'success', result };
};

const uploadImg = async (images, imagesUrl, product) => {
    const productDB = await productRepository.getProdById(product.pid);
    if (!productDB) throw new ProductNotFound('No se encuentra el producto');
    productDB.img.push({ imgUrl: imagesUrl[0], imgName: images.originalname });
    const result = await productRepository.update(productDB);
    if (!result) throw new ProductNotFound('No se puede actualizar el producto');
    return { status: 'success', result };
};

export { newProduct, getByUserId, updData, updImgActive, uploadImg, updActive, getAll };