import {
    userRepository, productRepository, orderSellerRepository
} from "../../repositories/index.repositories.js";
import { UserNotFound } from "../custom-exceptions.utils.js";

const updateUser = async (userId, data) => {
    const user = await userRepository.getUserById(userId);
    if (!user) throw new UserNotFound('No se encuentra el usuario en la base de datos');
    if (data.address) user.location.address = data.address;
    if (data.postalCode) user.location.postalCode = data.postalCode;
    if (data.dni) user.dni = data.dni;
    await userRepository.update(user);
};

const updateStock = async (order) => {
    const products = order.filter(prod => prod.is === 'product');
    for (const prod of products) {
        const product = await productRepository.getProdById(prod.typeId);
        product.quantity -= prod.quantity;
        await productRepository.update(product);
    };
};

export { updateUser, updateStock };