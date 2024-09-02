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
        if(product.quantity >= prod.quantity) {
            product.quantity -= prod.quantity;
            await productRepository.update(product);
        } else {
            // Calcular a aver que pasa si hay menos yo que se...
        }
    };
};

const newOrders = async (order, userId) => {
    const total = order.cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    const result = await orderRepository.newOrders({ userId: userId, cart: order.cart, total: total, pay: { typePay: order.typePay } });
    if (!result) throw new OrderNotFound('No se puede guardar la orden');
    return result;
};

const orderSellerResult = [];

const orderSeller = async (order, userId, orderId) => {
    const orders = [];
    for (const ord of order.cart) {
        if (ord.is === 'product') {
            const product = await productRepository.getProdById(ord.typeId);
            const prod = orders.findIndex((prod) => prod.sellerUserId == product.userId);
            if (prod !== -1) {
                orders[prod].cart.push(ord);
                orders[prod].total += ord.price * ord.quantity;
            } else {
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
        orderSellerResult.push(result);
    };
};

const alertsSend = async (order) => {
    for(const ord of order) {
        if(ord.is !== 'product' && ord.is !== 'evenet' && ord.is !== 'shift') {
            const alert ={
                eventId: ord.typeId,
                userId: '668d9529cf8bde76a0dc3adb',
                type: `application_${ord.is}`,
            };
            await alertsRepository.newAlert(alert);    
        };
    };
    for (const ord of orderSellerResult) {
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