import * as productService from '../services/products.service.js';
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const newProduct = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await productService.newProduct(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.getByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newProduct, getByUserId };