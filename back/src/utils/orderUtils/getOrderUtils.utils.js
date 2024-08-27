import {
    productRepository, appliRepository, userRepository
} from "../../repositories/index.repositories.js";
import { OrderNotFound, UserNotFound } from "../custom-exceptions.utils.js";

const getCart = async (order, user) => {
    for (const ord of order) {
        if (user.role !== 'user' && ord.userId) ord.userData = await userRepository.getUserById(ord.userId);
        s
        // Aca tengo acomodar para oderSelelr
        // Aca tengo acomodar para oderSelelr
        // Aca tengo acomodar para oderSelelr
        // Aca tengo acomodar para oderSelelr
        // Aca tengo acomodar para oderSelelr
        // Aca tengo acomodar para oderSelelr

        for (const type of ord.cart) {
            if (type.is === 'product') type.data = await productRepository.getProdById(type.typeId);
            if (type.is !== 'product') type.data = await appliRepository.getAppById(type.typeId);
        };
    };
    return order;
};

export { getCart };