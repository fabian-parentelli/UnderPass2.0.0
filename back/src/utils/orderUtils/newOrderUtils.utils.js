import {
    userRepository, productRepository, orderRepository, orderSellerRepository, alertsRepository
} from "../../repositories/index.repositories.js";
import { OrderNotFound, UserNotFound } from "../custom-exceptions.utils.js";

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

const newOrders = async (order, userId) => {
    const total = order.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    const result = await orderRepository.newOrders({ userId: userId, cart: order, total: total });
    if (!result) throw new OrderNotFound('No se puede guardar la orden');
    return result;
};

const orederSllerResult = [];

const orderSeller = async (order, userId, orderId) => {
    const orders = [];

    for (const ord of order.cart) {
        if (ord.is === 'product') {
            const product = await productRepository.getProdById(ord.typeId);
            const prod = orders.findIndex((prod) => prod.sellerUserId == product.userId);
            if (prod !== -1) {
                orders[prod].cart.push(ord);
                orders[prod].total += ord.price * ord.quantity;
            }else {
                const obj = {
                    orderId: orderId,
                    buyerUserId: userId,
                    sellerUserId: product.userId,
                    cart: [ord],
                    total: ord.price * ord.quantity
                };
                orders.push(obj);
            };
        };
    };
    for (const ord of orders) {
        const result = await orderSellerRepository.newOrder(ord);
        if (!result) throw new OrderNotFound('No se puede crear la orden vendedora');
        orederSllerResult.push(result);
    };
};

const alertsSend = async () => {
    const alerts = [];
    for (const ord of orederSllerResult) {
        ord.cart.map(async (prod) => {
            const alert = {
                eventId: prod.typeId,
                userId: ord.sellerUserId,
                type: `sold_${prod.is}`
            };
            await alertsRepository.newAlert(alert);
        });
    };
};

export { updateUser, updateStock, newOrders, orderSeller, alertsSend };