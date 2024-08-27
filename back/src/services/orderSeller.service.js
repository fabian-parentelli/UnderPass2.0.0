import { orderSellerRepository } from "../repositories/index.repositories.js";
import { OrderSellerNotFound } from "../utils/custom-exceptions.utils.js";

const getOrders = async (page, limit, userid, active, payIn, payOut, { user }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (userid) query.sellerUserId = userid;
    if (active !== undefined) query.active = active;
    if (payIn !== undefined) query['pay.payIn.isPayIn'] = payIn;
    if (payOut !== undefined) query['pay.payOut.isPayOut'] = payOut;
    const result = await orderSellerRepository.getOrders(query, limit, page, user)
    if (!result) throw new OrderSellerNotFound('No se encuentran Ordenes de venta');
    return { status: 'success', result };
};

export { getOrders };