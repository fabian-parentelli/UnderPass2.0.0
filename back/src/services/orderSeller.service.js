import { orderSellerRepository } from "../repositories/index.repositories.js";
import { OrderSellerNotFound } from "../utils/custom-exceptions.utils.js";

const getOrders = async (page, limit, userid, active, payIn, payOut, id, { user }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (userid) query.sellerUserId = userid;
    if (payIn !== undefined) query['pay.payIn.isPayIn'] = payIn === 'true' ? true : payIn === 'false' ? false : payIn;
    if (payOut !== undefined) query['pay.payOut.isPayOut'] = payOut === 'true' ? true : payOut === 'false' ? false : payOut;
    if (id) query._id = id;
    const result = await orderSellerRepository.getOrders(query, limit, page, user);
    if (!result) throw new OrderSellerNotFound('No se encuentran Ordenes de venta');
    return { status: 'success', result };
};

export { getOrders };