import {
    userRepository, productRepository, orderRepository, orderSellerRepository, alertsRepository, eventRepository
} from "../../repositories/index.repositories.js";
import { OrderNotFound, UserNotFound } from "../custom-exceptions.utils.js";

const updateUser = async (userId, data) => {
    const user = await userRepository.getUserById(userId);
    if (!user) throw new UserNotFound('No se encuentra el usuario en la base de datos');
    if (data.address) user.location.address = data.address;
    if (data.postalCode) user.location.postalCode = data.postalCode;
    if (data.dni) user.dni = data.dni;
    if (data.address || data.postalCode || data.dni) await userRepository.update(user);
};

const updateStock = async (order) => {
    const products = order.filter(prod => prod.is === 'product');
    if (products.length > 0) {
        for (const prod of products) {
            const product = await productRepository.getProdById(prod.typeId);
            if (product.quantity >= prod.quantity) {
                product.quantity -= prod.quantity;
                if (!product.inSite && product.quantity < 1) product.active = false;
                await productRepository.update(product);
            } else {
                // Calcular a aver que pasa si hay menos yo que se...
            }
        };
    };
    const events = order.filter(event => event.is === 'events');
    if (events.length > 0) {
        for (const eve of events) {
            const event = await eventRepository.getById(eve.eventId);
            if (event.tickets) {
                for (const ev of event.ticketInfo) {
                    if (ev._id == eve.typeId && ev.quantity >= eve.quantity) {
                        ev.quantity -= eve.quantity;
                        await eventRepository.update(event);
                    };
                    // acá hacer un else a ver que hago si hay menos, lo mismo que en productos
                };
            };
        };
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
                orders[prod].total += product.price * ord.quantity;
            } else {
                const obj = {
                    orderId: orderId,
                    buyerUserId: userId,
                    sellerUserId: product.userId,
                    cart: [ord],
                    total: product.price * ord.quantity,
                    pay: { payIn: {}, payCredited: {}, payOut: {} }
                };
                orders.push(obj);
            };
        };
        if (ord.is === 'events') {
            const event = await eventRepository.getById(ord.eventId);
            const ticket = event.ticketInfo.find(tick => tick._id == ord.typeId);
            const index = orders.findIndex(eve => eve.sellerUserId == event.userId);
            if (index !== -1) {
                orders[index].cart.push(ord);
                orders[index].total += ticket.price * ord.quantity
            } else {
                const obj = {
                    orderId,
                    buyerUserId: userId,
                    sellerUserId: event.userId,
                    cart: [ord],
                    total: ticket.price * ord.quantity,
                    pay: { payIn: {}, payCredited: {}, payOut: {} }
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
    for (const ord of order) {
        if (ord.is !== 'product' && ord.is !== 'evenets' && ord.is !== 'shift') {
            const alert = {
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
                eventId: prod.is === 'events' ? prod.eventId : prod.typeId,
                userId: ord.sellerUserId,
                type: `sold_${prod.is}`,
                orderSellerId: ord._id
            };
            await alertsRepository.newAlert(alert);
        });
    };
};

export { updateUser, updateStock, newOrders, orderSeller, alertsSend };