import {
    productRepository, appliRepository, userRepository
} from "../../repositories/index.repositories.js";
import { OrderNotFound, UserNotFound } from "../custom-exceptions.utils.js";

const getCart = async (order, user) => {
    for (const ord of order) {
        if (user.role !== 'user') {
            if (ord.userId) {
                const user = await userRepository.getUserById(ord.userId) || '';
                delete user.password;
                ord.userData = user;
            };
            if (ord.buyerUserId) {
                const user = await userRepository.getUserById(ord.buyerUserId) || '';
                delete user.password;
                ord.buyerUserData = user;
            };
            if (ord.sellerUserId) {
                const user = await userRepository.getUserById(ord.sellerUserId) || '';
                delete user.password;
                ord.sellerUserData = await userRepository.getUserById(ord.sellerUserId) || '';
            };
        };
        for (const type of ord.cart) {

            if (type.is === 'product') type.data = await productRepository.getProdById(type.typeId);
            if (type.is !== 'product') type.data = await appliRepository.getAppById(type.typeId);
            // En el if anterior poner !== a event || shift, además de product..............
        };
    };
    return order;
};

export { getCart };