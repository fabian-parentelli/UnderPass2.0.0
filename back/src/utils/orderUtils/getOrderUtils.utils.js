import {
    productRepository, appliRepository
} from "../../repositories/index.repositories.js";
import { OrderNotFound, UserNotFound } from "../custom-exceptions.utils.js";

const getCart = async (order) => {
    for (const ord of order) {
        for (const type of ord.cart) {
            if (type.is === 'product') type.data = await productRepository.getProdById(type.typeId);
            if (type.is !== 'product') type.data = await appliRepository.getAppById(type.typeId);
        };
    }
    return order;
};

export { getCart };