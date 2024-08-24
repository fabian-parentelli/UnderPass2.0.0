import { orderRepository } from "../repositories/index.repositories.js";
import * as newOrderUtils from '../utils/orderUtils/newOrderUtils.utils.js';
import { OrderNotFound } from "../utils/custom-exceptions.utils.js";

const newOrder = async (order, { user }) => {

    await newOrderUtils.updateUser(user._id, order.user);
    await newOrderUtils.updateStock(order.cart);


    // const newOrder = [];
    // const notStock = [];

    // const { cart, ...userData } = order;

    // await newOrderUtils.iSUser(order);
    // const processedProducts = await newOrderUtils.processProducts(order.cart, notStock);
    // newOrder.push(...processedProducts);
    // const processedEvents = await newOrderUtils.processEvents(order.cart, notStock);
    // newOrder.push(...processedEvents);

    // const theOrder = { userId: order.userId, cart: newOrder };
    // const result = await orderRepository.newOrder(theOrder);
    // if (!result) throw new OrderNotFound('No se puede generar la orden');

    // await newOrderUtils.emailToBuyer(newOrder, userData);
    // await newOrderUtils.orderSeller(result); // Estoy haciendo la base de datos del vendedor...

    // return { status: 'success', result };
};

export { newOrder };